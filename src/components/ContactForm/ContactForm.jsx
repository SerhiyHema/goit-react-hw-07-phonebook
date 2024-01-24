import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyOptions = {
  position: 'top-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsAll = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const nameValue = e.target.elements.name.value;
    const phoneValue = e.target.elements.number.value;

    const validInput = contactsAll.some(function (element) {
      return (
        element.name.toLowerCase().trim() === nameValue.toLowerCase().trim() ||
        element.phone.trim() === phoneValue.trim()
      );
    });

    const objectSubmit = {
      name: nameValue,
      phone: phoneValue,
    };
    if (validInput) {
      toast.info(
        `${nameValue} or phone ${phoneValue}: is already in contacts `,
        notifyOptions
      );
    } else {
      dispatch(addContact(objectSubmit));
      toast.success('Contact added');
    }
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input placeholder="Name" type="text" name="name" required />
        </label>

        <label>
          <input placeholder="Phone number" type="tel" name="number" required />
        </label>

        <button type="submit">Add Contact</button>
      </form>
      <ToastContainer />
    </>
  );
};
