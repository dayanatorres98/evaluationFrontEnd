// Componente para representar una fila individual de usuario en la el componente UserTable
function UserRow({ usuario }) {
    return (
      <tr>
        <td>
          <img className="avatar" src={usuario.avatar} alt={usuario.first_name} />
        </td>
        <td>
          {usuario.first_name} {usuario.last_name}
        </td>
        <td>
          {usuario.email}
        </td>
        <td>
          {usuario.gender}
        </td>
        <td>
          {usuario.phone_number}
        </td>
        <td>
          {usuario.date_of_birth}
        </td>
        <td>
          {usuario.employment.title}
        </td>
        <td>
          {usuario.address.city}
        </td>
        <td>
          {usuario.address.street_address}
        </td>
        <td>
          {usuario.subscription.plan}
        </td>
      </tr>
    );
  }
  
  export default UserRow;
  