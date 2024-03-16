import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/selectors';
import { addContact } from 'store/thunks';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styles from './ContactForm.module.css';

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
      ? Notify.info(`${name} is already in contacts`)
      : dispatch(addContact(newContact))
          .unwrap()
          .then(() => {
            Notify.success('New contact added');
          })
          .catch(() => {
            Notify.failure('OOPS some error');
          });
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
