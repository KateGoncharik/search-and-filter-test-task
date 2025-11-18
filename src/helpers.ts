import { getParts, getPartsByName } from './api/api';
import { paginateAndRender } from './Components/Pagination';
import {
  appState,
  DEFAULT_PAGINATION_PAGE,
  updateSearchResults,
  updateTotal,
} from './Components/state';

export const updateSearchByFilter = (filter?: string) => {
  getParts(filter).then((res) => {
    if (res) {
      updateSearchResults(res.results).then(() => {
        updateTotal(res.total).then(() => {
          paginateAndRender({
            ...appState,
            currentPage: DEFAULT_PAGINATION_PAGE,
          });
        });
      });
    }
  });
};

export const updateSearchByName = (name: string) => {
  getPartsByName(name).then((res) => {
    if (res) {
      // TODO refactoring and upd buttons
      updateSearchResults(res).then(() => {
        updateTotal(1).then(() => {
          paginateAndRender({
            ...appState,
            currentPage: DEFAULT_PAGINATION_PAGE,
          });
        });
      });
    }
  });
};

export const debounce = (fn: () => void, ms: number) => {
  let timeout: number;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(), ms);
  };
};
