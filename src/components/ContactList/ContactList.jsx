import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectResultContact } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsAll = useSelector(selectContacts);
  const contacts = useSelector(selectResultContact);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h3>Your phonebook has {contactsAll.length} contacts</h3>
      {contacts.length > 0 ? (
        <h3>contacts found {contacts.length} </h3>
      ) : (
        <h3>Contact not found</h3>
      )}
      <ul className={styles.list__box}>
        {contacts.map(item => (
          <li key={item.id} className={styles.list}>
            <p>
              <b>{item.name}</b> {item.phone}
            </p>
            <button type="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
