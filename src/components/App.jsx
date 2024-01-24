import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import styles from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from '../redux/selectors';
import { Spiner } from './Spiner/Spiner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactAll = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
      </div>
      <div className={styles.container}>
        <h2>Contacts</h2>
        {isLoading && !error && <Spiner />}
        {!contactAll.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : (
          <ContactList />
        )}
      </div>
    </section>
  );
};
