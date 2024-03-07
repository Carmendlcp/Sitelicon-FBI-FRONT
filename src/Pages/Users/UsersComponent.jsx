import React, { useState, useEffect } from 'react';
import API from '../../Api/Api.js';
import './UsersComponent.css';

const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', lastName: '', phoneNumber: '', email: '', password: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    API.get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post('/users/create', newUser)
      .then(() => {
        fetchUsers();
        setNewUser({ name: '', lastName: '', phoneNumber: '', email: '', password: '' });
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

  const handleDeleteUser = (userId) => {
    API.delete(`/users/delete/${userId}`)
      .then(() => {
        console.log('Usuario eliminado exitosamente');
        fetchUsers();
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Usuarios</h2>
        <ul>
          {users.map(user => (
            <li key={user._id}>
              {user.name} {user.lastName} - {user.email}
              <button onClick={() => handleDeleteUser(user._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Nombre" />
          <input type="text" name="lastName" value={newUser.lastName} onChange={handleInputChange} placeholder="Apellido" />
          <input type="text" name="phoneNumber" value={newUser.phoneNumber} onChange={handleInputChange} placeholder="Número de teléfono" />
          <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" />
          <input type="password" name="password" value={newUser.password} onChange={handleInputChange} placeholder="Contraseña" />
          <button type="submit">Agregar Usuario</button>
        </form>
      </div>
    </div>
  );
};

export default UserComponent;
