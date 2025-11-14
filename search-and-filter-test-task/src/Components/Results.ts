import Component from '../component';
import { ResultItem } from '../types';
import createResultItem from './ResultItem';

export const createResultsWrapper = () => {
  return new Component({ className: 'results-wrapper', text: 'No data' });
};

export const createResults = (results: Array<ResultItem>) => {
  const container = new Component({
    className: 'results-container',
  });
  results.forEach((result: ResultItem) => {
    const item = createResultItem(result);
    container.append(item);
  });
  return container;
};

export const updateResults = (results: Array<ResultItem>) => {
  const wrapper = document.querySelector('.results-wrapper');
  if (!wrapper) {
    throw new Error('Wrapper expected');
  }
  wrapper.innerHTML = '';
  wrapper.appendChild(createResults(results).getNode());
};
