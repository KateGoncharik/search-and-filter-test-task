import Component from '../component';
import { updateSearchByFilter, updateSearchByName } from '../helpers';

const PART_TYPE_CODES = [565, 566];

export const createFilters = (): Component => {
  return new Component(
    { className: 'filters-wrapper' },
    createTypeFilter(),
    createNameFilter()
  );
};

const createTypeFilter = (): Component => {
  const label = new Component({
    className: 'select-label',
    tag: 'label',
    text: 'Type',
  });
  label.setAttribute('for', 'filter');

  const select = new Component({ className: 'filter-select', tag: 'select' });
  select.setAttribute('name', 'filter');
  PART_TYPE_CODES.forEach((code) => {
    const option = new Component({
      className: 'select-option',
      tag: 'option',
      text: '' + code,
    });
    select.append(option);
  });
  label.append(select);

  select.addListener('change', (e) => {
    const target = e.target;

    if (target instanceof HTMLSelectElement) {
      updateSearchByFilter(target.value);
      clearNameSearch();
    }
  });
  return label;
};

const createNameFilter = (): Component => {
  const label = new Component({
    className: 'name-input-label',
    tag: 'label',
    text: 'Name',
  });
  label.setAttribute('for', 'filter');

  const wrapper = new Component({ className: 'name-input-wrapper' });
  const input = new Component({ className: 'name-input', tag: 'input' });
  input.setAttribute('name', 'name-input');

  const clearButton = new Component({
    className: 'clear-button',
    tag: 'button',
    text: '×',
  });
  clearButton.addListener('click', () => {
    clearNameSearch();
    updateSearchByFilter();
  });
  wrapper.appendChildren([input, clearButton]);
  label.append(wrapper);

  // TODO add debounce
  input.addListener('input', (e) => {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      updateSearchByName(target.value);
    }
  });

  return label;
};

export const clearNameSearch = () => {
  const input = document.querySelector('.name-input');
  if (!input) {
    throw new Error('Input expected');
  }
  if (input instanceof HTMLInputElement) {
    input.value = '';
  }
};
