import { getParts } from './api/api';
import { updateResults } from './Components/Results';

export const updateSearchByFilter = (filter: string) => {
  getParts(filter).then((res) => {
    updateResults(res.Results);
  });
};
