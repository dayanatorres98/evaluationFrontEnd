// Componente para visualizar en tarjetas y en dos columnas
function UserCard({ usuario }) {
    return (
      <div className='user-card'>
        <img src ={usuario.avatar} alt={usuario.first_name} />
        <div>
          <p><b>{usuario.first_name} {usuario.last_name}</b></p>
          <p><b>Email</b>:{usuario.email}</p>
          <p><b>Genero</b>:{usuario.gender}</p>
          <p><b>Telefono</b>:{usuario.phone_number}</p>
          <p><b>Fecha Nacimiento</b>{usuario.date_of_birth}</p>
          <p><b>Cargo</b>:{usuario.employment.title}</p>
          <p><b>Cuidad</b>:{usuario.address.city}</p>
          <p><b>Direccion</b>:{usuario.address.street_address}</p>
          <p><b>Subscripcion</b>:{usuario.subscription.plan}</p>
        </div>
      </div>
    );
  }
  
  export default UserCard;
  