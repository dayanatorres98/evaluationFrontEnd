//Componente para presentar a los usuarios en forma de tabla 
import UserRow from './UserRow';
import UserCard from './UserCard';

function UserTable({ usuarios, viewTable }) {
  return viewTable ? (
    <div className='table-responsive'>
      <table className='table'>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Género</th>
            <th>Teléfono</th>
            <th>F.Nacimiento</th>
            <th>Cargo Empleo</th>
            <th>Direccion</th>
            <th>Calles</th>
            <th>Subscripcion</th>
            
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => <UserRow key={usuario.id} usuario={usuario} />)}
        </tbody>
      </table>
    </div>
  ) : (
    <div>
      {Array(Math.ceil(usuarios.length / 2)).fill().map((_, idx) => (
        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <UserCard usuario={usuarios[2*idx]} />
          {usuarios[2*idx+1] && <UserCard usuario={usuarios[2*idx+1]} />}
        </div>
      ))}
    </div>
  );
}

export default UserTable;
