import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectResultContact = createSelector(
  selectContacts,
  selectFilter,
  (items, valueFilter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(valueFilter.toLowerCase())
    )
);
