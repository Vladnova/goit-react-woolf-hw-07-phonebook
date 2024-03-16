import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactApi, deleteContactApi, getContactsApi } from 'api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  getContactsApi
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteContactApi(id)
);

export const addContact = createAsyncThunk('contacts/addContact', newContact =>
  addContactApi(newContact)
);
