import { getParts, getPartsByName } from './api/api';
import { paginateAndRender } from './Components/Pagination';
import { appState, updateData, updateTotal } from './Components/state';

export const updateSearchByFilter = (filter?: string) => {
  getParts(filter).then((res) => {
    if (res) {
      updateData(res.results).then(() => {
        updateTotal(res.total).then(() => {
          paginateAndRender({
            allData: appState.allData,
            totalItems: appState.totalItems,
            currentPage: 1,
          });
        });
      });
    }
  });
};

export const updateSearchByName = (name: string) => {
  getPartsByName(name).then((res) => {
    if (res) {
      updateData(res).then(() => {
        updateTotal(1).then(() => {
          paginateAndRender({
            allData: appState.allData,
            totalItems: appState.totalItems,
            currentPage: 1,
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
