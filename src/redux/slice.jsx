import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.name !== action.payload
      );
    },
    contactFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, contactFilter } =
  contactSlice.actions;
export default contactSlice.reducer;
