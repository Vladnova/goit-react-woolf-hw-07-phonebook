import axios from 'axios';

axios.defaults.baseURL = 'https://65f36d34105614e654a084bb.mockapi.io/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getContactsApi = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const deleteContactApi = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data.id;
};

export const addContactApi = async newContact => {
  const body = JSON.stringify(newContact);
  const { data } = await axios.post('contacts', body);
  return data;
};
