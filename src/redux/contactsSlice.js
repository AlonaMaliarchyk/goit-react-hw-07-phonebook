import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../redux/operations";


 const handlePending = state => {
        state.isLoading = true;
 };

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        list: [ ],
        isLoading: true,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]:handlePending,
        [deleteContact.pending]:handlePending,
        [fetchContacts.rejected]:handleRejected,
        [addContact.rejected]:handleRejected,
        [deleteContact.rejected]:handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.list = action.payload;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.list.push(action.payload);
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.list.findIndex(
            contact => contact.id === action.payload.id
            );
            state.list.splice(index, 1);
        },
    },
});

export const {  fetchingInProgress, fetchingSuccess, fetchingError} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

