import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectError, selectLoader } from '../store/selectors';
import { fetchContacts } from 'store/thunks';
import { useEffect } from 'react';
import styles from './App.module.css';
import Loader from './Loader/Loader';
import Error from './Error/Error';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {error ? (
        <Error />
      ) : (
        <>
          <h2 className={styles.title}>Phonebook</h2>
          <ContactForm />
          <h2 className={styles.title}>Contacts</h2>
          {contacts.length !== 0 && <Filter />}
          {loader ? <Loader /> : <ContactList />}
        </>
      )}
    </div>
  );
};
