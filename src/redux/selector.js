import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.list;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilterContact = state => state.filter;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilterContact], (state, filter)=> {
        return state.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);