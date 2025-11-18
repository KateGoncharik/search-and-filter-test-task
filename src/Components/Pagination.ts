import { AppState, appState, LIMIT_PER_PAGE, updatePage } from './state';
import Component from '../component';
import { updateResults } from './Results';
import { updatePaginationControllersState } from '../helpers';

export const createPaginationControls = (
  state: AppState,
  onPageChange: (newPage: number) => void
) => {
  const totalPages = Math.ceil(state.totalItems / LIMIT_PER_PAGE);
  const currentPage = state.currentPage;

  const prevButton = new Component({
    tag: 'button',
    className: 'pagination-button prev',
    text: '<< Prev',
  });
  prevButton.addListener('click', () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  });

  const statusText = new Component({
    className: 'pagination-status',
    text: `Page ${currentPage} of ${totalPages}`,
  });

  const nextButton = new Component({
    tag: 'button',
    className: 'pagination-button next',
    text: 'Next >>',
  });
  nextButton.addListener('click', () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  });

  return new Component(
    { className: 'pagination-controls' },
    prevButton,
    statusText,
    nextButton
  );
};

// TODO handle case when we are on more than 10's page - fetch next 1000 results
export const changePage = (newPage: number) => {
  updatePage(newPage);
  paginateAndRender(appState);
  updatePaginationControllersState();
};

export const paginateAndRender = (state: AppState) => {
  const startIndex = (state.currentPage - 1) * LIMIT_PER_PAGE;
  const endIndex = startIndex + LIMIT_PER_PAGE;
  const displayedResults = state.searchResults.slice(startIndex, endIndex);

  const dataToUpdate = {
    results: displayedResults,
    total: state.totalItems,
  };

  updateResults(dataToUpdate);

  const paginationContainer = document.querySelector('.results-wrapper');
  if (!paginationContainer) {
    throw new Error('Results wrapper expected');
  }

  const existingControls = paginationContainer.querySelector(
    '.pagination-controls'
  );
  if (existingControls) {
    existingControls.remove();
  }

  const controls = createPaginationControls(state, changePage);
  paginationContainer.appendChild(controls.getNode());
};
