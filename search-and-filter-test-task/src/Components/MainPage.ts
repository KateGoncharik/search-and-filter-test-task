import Component from '../component';
import { updateSearchByFilter } from '../helpers';
import createFooter from './Footer';
import createHeader from './Header';
import { createResultsWrapper } from './Results';
import createFilter from './Search';

export default function createMainPage(): Component {
  updateSearchByFilter('');
  return new Component(
    { className: 'main-wrapper' },
    createHeader(),
    createFilter(),
    createResultsWrapper(),
    createFooter()
  );
}
