import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';
import {
  ContactList,
  ContactItem,
  ContactName,
  ContactButton,
  ContactNumber,
} from './ContactsList.styled';

export default function ListForm() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const showContacts = visibleContacts();

  return (
    <ContactList>
      {showContacts.map(({ id, name, number }) => (
        <ContactItem key={name}>
          <ContactName>
            {name}: <ContactNumber>{number}</ContactNumber>
          </ContactName>
          <ContactButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactList>
  );
}

ListForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
