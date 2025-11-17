import { getParts, getPartsByName } from './api/api';
import { updateResults } from './Components/Results';

export const updateSearchByFilter = (filter?: string) => {
  getParts(filter).then((res) => {
    if (res) {
      updateResults(res);
    }
  });
};

export const updateSearchByName = (name: string) => {
  getPartsByName(name).then((res) => {
    if (res) {
      updateResults(res);
    }
  });
};
