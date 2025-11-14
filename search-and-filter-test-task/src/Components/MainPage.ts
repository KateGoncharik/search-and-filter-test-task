import { getParts } from '../api/api';
import Component from '../component';
import createFooter from './Footer';
import createHeader from './Header';
import { createResultsWrapper, updateResults } from './Results';

export default function createMainPage(): Component {
  getParts('ORG10655').then((res) => {
    updateResults(res.Results);
  });
  return new Component(
    { className: 'main-wrapper' },
    createHeader(),
    createResultsWrapper(),
    createFooter()
  );
}
