import Component from '../component';
import { updateSearchByFilter, updateSearchByName } from '../helpers';

const PART_TYPE_CODES = [565, 566];

export default function createTypeFilter(): Component {
  const label = new Component({
    className: 'select-label',
    tag: 'label',
    text: 'Part type',
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
}

export const createNameFilter = (): Component => {
  const label = new Component({
    className: 'name-input-label',
    tag: 'label',
    text: 'Name',
  });
  label.setAttribute('for', 'filter');
  const input = new Component({ className: 'name-input', tag: 'input' });
  input.setAttribute('name', 'name-input');
  label.append(input);

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
