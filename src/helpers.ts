import { getParts, getPartsByName } from './api/api';
import { paginateAndRender } from './Components/Pagination';
import {
  appState,
  DEFAULT_PAGINATION_PAGE,
  LIMIT_PER_PAGE,
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
          updatePaginationControllersState();
        });
      });
    }
  });
};

export const updateSearchByName = (name: string) => {
  getPartsByName(name).then((res) => {
    if (res) {
      updateSearchResults(res).then(() => {
        updateTotal(1).then(() => {
          paginateAndRender({
            ...appState,
            currentPage: DEFAULT_PAGINATION_PAGE,
          });
          updatePaginationControllersState();
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

export const updatePaginationControllersState = () => {
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  if (!prev || !next) {
    return;
  }
  const totalPages = Math.ceil(appState.totalItems / LIMIT_PER_PAGE);
  if (appState.currentPage === 1) {
    prev.setAttribute('disabled', '');
  } else {
    prev.removeAttribute('disabled');
  }
  if (appState.currentPage >= totalPages) {
    next.setAttribute('disabled', '');
  } else {
    next.removeAttribute('disabled');
  }
};
