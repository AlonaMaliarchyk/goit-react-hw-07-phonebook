import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://63ff00ea571200b7b7d39fe9.mockapi.io/contacts";
// Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch(e) {
     // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
}
});
export const addContact = createAsyncThunk("contact/addContact", async (data, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)