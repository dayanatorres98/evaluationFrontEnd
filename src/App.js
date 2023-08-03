import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';
import Pagination from './components/Pagination';

function App() {

  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [pageRange, setPageRange] = useState([1, 3]);

  // obtencion de datos de la api
  const peticionGet = async () => {
    await axios.get("https://random-data-api.com/api/v2/users?size=30")
      .then(response => {
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  // se usa para controlar el evento que el usuario escribe en el searchBar
  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  // Se realiza la busqueda por nombre o nombre de usuario
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (elemento.first_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.username.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    if (resultadosBusqueda.length === 0) {
      alert("No se encontró el usuario");
    } else {
      setUsuarios(resultadosBusqueda);
      setCurrentPage(1);
    }
  }

  useEffect(() => {
    peticionGet();
  }, [])

  //constantes para la paginacion
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = usuarios.slice(indexOfFirstItem, indexOfLastItem);

  //controla los eventos cada vez que el usuario presiona el btn de las paginas
  const handleClick = action => {
    let newPage = currentPage;
    let newPageRange = [...pageRange];
  
    if (action === "prev") {
      if (currentPage > 1) newPage = currentPage - 1;
      if (newPage < pageRange[0]) {
        newPageRange = [newPageRange[0] - 1, newPageRange[1] - 1];
      }
    } else if (action === "next") {
      if (currentPage < pageNumbers.length) newPage = currentPage + 1;
      if (newPage > pageRange[1]) {
        newPageRange = [newPageRange[0] + 1, newPageRange[1] + 1];
      }
    } else if (typeof action === "number") {
      newPage = action;
      if (newPage < pageRange[0]) {
        newPageRange = [newPage, newPage + 2];
      } else if (newPage > pageRange[1]) {
        newPageRange = [newPage - 2, newPage];
      }
    }
  
    setCurrentPage(newPage);
    setPageRange(newPageRange);
  };
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(usuarios.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [viewTable, setViewTable] = useState(true);

  return (
    <div className="App">
      <div className='App-header'>
        <h2>
          <FontAwesomeIcon icon={faUser}/>
             Buscador de usuario     
          <FontAwesomeIcon icon={faUser} />
        </h2>
        <div className='searchBar'>
          <SearchBar busqueda={busqueda} handleChange={handleChange} />
        </div>
      </div>
      <button className='btn-selector' onClick={() => setViewTable(!viewTable)}>
        {viewTable ? 'Ver como tarjetas' : 'Ver como tabla'}
      </button>
      <UserTable usuarios={currentItems} viewTable={viewTable} />
      <Pagination pageNumbers={pageNumbers} currentPage={currentPage} handleClick={handleClick} pageRange={pageRange} />
    </div>
  );
}

export default App;
