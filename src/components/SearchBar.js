// Componente para realizar la busqueda por nombre o username
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ busqueda, handleChange }) {
  return (
    <div className='containerInput'>
      <input
      className='form-control inputBuscar'
      value={busqueda}
      placeholder='Busqueda por usuario, nombre o nombre de usuario'
      onChange={handleChange}
      />
      <button className='btn btn-success'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </div>
  );
}

export default SearchBar;
