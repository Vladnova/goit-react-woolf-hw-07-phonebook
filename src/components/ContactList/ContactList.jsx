import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'store/selectors';
import styles from './ContactList.module.css';
import { deleteContact } from 'store/thunks';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.containerList}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
