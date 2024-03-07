import React, { useState, useEffect } from 'react';
import API from '../../Api/Api.js';
import './ContactComponent.css';

const ContactComponent = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', reason: '', message: '' });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    API.get('/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  };

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post('/contacts/create', newContact)
      .then(() => {
        fetchContacts();
        setNewContact({ name: '', email: '', reason: '', message: '' });
      })
      .catch(error => {
        console.error('Error creating contact:', error);
      });
  };

  const handleDeleteContact = (contactId) => {
    API.delete(`/contacts/delete/${contactId}`)
      .then(() => {
        fetchContacts();
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Contactos</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact._id}>
              {contact.name} - {contact.email} - {contact.reason}
              <button onClick={() => handleDeleteContact(contact._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={newContact.name} onChange={handleInputChange} placeholder="Nombre" />
          <input type="email" name="email" value={newContact.email} onChange={handleInputChange} placeholder="Email" />
          <select name="reason" value={newContact.reason} onChange={handleInputChange}>
            <option value="question">Pregunta</option>
            <option value="information">Información</option>
            <option value="alert">Alerta</option>
          </select>
          <textarea name="message" value={newContact.message} onChange={handleInputChange} placeholder="Mensaje"></textarea>
          <button type="submit">Agregar Contacto</button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;



