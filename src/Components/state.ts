import { ResultItem } from '../types';

export const LIMIT_PER_PAGE = 10;
export const DEFAULT_PAGINATION_PAGE = 1;

export interface AppState {
  searchResults: Array<ResultItem>;
  totalItems: number;
  currentPage: number;
}

export let appState: AppState = {
  searchResults: [],
  totalItems: 0,
  currentPage: DEFAULT_PAGINATION_PAGE,
};

export const updatePage = (page: number) => {
  return new Promise((resolve) => {
    appState = { ...appState, currentPage: page };
    resolve('');
  });
};

export const updateSearchResults = (newData: Array<ResultItem>) => {
  return new Promise((resolve) => {
    appState = { ...appState, searchResults: newData };
    resolve('');
  });
};

export const updateTotal = (newTotal: number) => {
  return new Promise((resolve) => {
    appState = { ...appState, totalItems: newTotal };
    resolve('');
  });
};
