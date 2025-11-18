import { ResultItem } from '../types';

export const LIMIT_PER_PAGE = 10;

export interface AppState {
  allData: Array<ResultItem>;
  totalItems: number;
  currentPage: number;
}

export let appState: AppState = {
  allData: [],
  totalItems: 0,
  currentPage: 1,
};

export const updatePage = (page: number) => {
  return new Promise((resolve) => {
    appState = { ...appState, currentPage: page };
    resolve('');
  });
};

export const updateData = (newData: Array<ResultItem>) => {
  return new Promise((resolve) => {
    appState = { ...appState, allData: newData };
    resolve('');
  });
};

export const updateTotal = (newTotal: number) => {
  return new Promise((resolve) => {
    appState = { ...appState, totalItems: newTotal };
    resolve('');
  });
};
