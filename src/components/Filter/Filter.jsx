import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const showFilteredContacts = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <h2>Filter</h2>
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={showFilteredContacts}
        />
      </label>
    </div>
  );
};
