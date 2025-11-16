import Component from '../component';
import { updateSearchByFilter } from '../helpers';

const PART_TYPE_CODES = [565, 566];

export default function createFilter(): Component {
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
    }
  });
  return label;
}
