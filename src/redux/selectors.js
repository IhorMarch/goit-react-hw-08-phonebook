import { createSelector } from "@reduxjs/toolkit";



export const selectContacts = state => state.contacts.items;
export const selectStatusFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


export const selectVisibleContacts = createSelector(
[selectContacts, selectStatusFilter],
  (contacts, statusFilter) => { 
 

    const normalizedFilter = statusFilter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter)
      );

  });

