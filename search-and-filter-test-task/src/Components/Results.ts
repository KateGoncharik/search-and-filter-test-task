import Component from '../component';
import { ResultItem } from '../types';
import createResultItem from './ResultItem';

export const createResultsWrapper = () => {
  return new Component(
    { className: 'results-wrapper' },
    new Component({ className: 'results-title', text: 'Results:' }),
    new Component({ className: 'results-container', text: 'No data' })
  );
};

export const createResults = (results: Array<ResultItem>) => {
  const container = new Component({
    className: 'results',
    text: results.length === 0 ? 'No data' : '',
  });

  results.forEach((result: ResultItem) => {
    const item = createResultItem(result);
    container.append(item);
  });
  return container;
};

export const updateResults = (results: Array<ResultItem>) => {
  const container = document.querySelector('.results-container');
  if (!container) {
    throw new Error('Container expected');
  }
  container.innerHTML = '';
  container.appendChild(createResults(results).getNode());
};
