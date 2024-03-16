import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/selectors';
import { addContact } from 'store/thunks';

const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const { name, number } = contact;

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handlerAddContact = e => {
    const { value, name } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(newContact)).then(() => {
        alert('New contact added')
      }).catch(() => {
        alert('ERROR')
      })
    resetForm();
  };



  const resetForm = () => {
    setContact({ name: '', number: '' });
  };
  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <label>
        <p className={styles.label}>Name</p>
        <input
          type="text"
          name="name"
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder=" "
          value={name}
          onChange={handlerAddContact}
        />
      </label>

      <label>
        <p className={styles.label}> Number</p>
        <input
          type="tel"
          name="number"
          className={styles.input}
          pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder=" "
          value={number}
          onChange={handlerAddContact}
        />
      </label>

      <button
        type="submit"
        className={styles.button}
        disabled={!name || !number}
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
