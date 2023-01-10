import { Container } from './App.styled';
import Section from '../Section';
import Form from '../Contacts';
import Filter from '../Filter';
import ListForm from '../ContactsList';

export function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ListForm />
      </Section>
    </Container>
  );
}
