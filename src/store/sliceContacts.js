import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './thunks';
import {
  handelAddContact,
  handelGetContactsFulfilled,
  handelPending,
  handelRejected,
  handlerDeleteContactFulfilled,
} from './handels';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: '',
  },
  extraReducers: bilder => {
    bilder
      .addCase(fetchContacts.fulfilled, handelGetContactsFulfilled)
      .addCase(addContact.fulfilled, handelAddContact)
      .addCase(deleteContact.fulfilled, handlerDeleteContactFulfilled)
      .addMatcher(action => action.type.endsWith('pending'), handelPending)
      .addMatcher(action => action.type.endsWith('rejected'), handelRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
