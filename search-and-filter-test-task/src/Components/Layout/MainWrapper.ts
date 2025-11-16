import Component from '../../component';
import { updateSearchByFilter } from '../../helpers';
import { createResultsWrapper } from '../Results';
import createFilter from '../Search';

export default function createMainWrapper(): Component {
  updateSearchByFilter('');
  return new Component(
    { tag: 'main', className: 'main-wrapper' },
    createFilter(),
    createResultsWrapper()
  );
}
