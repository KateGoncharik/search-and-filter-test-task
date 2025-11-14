import Component from '../component';
import createFooter from './Footer';
import createHeader from './Header';

export default function createMainPage(): Component {
  return new Component(
    { className: 'main-wrapper' },
    createHeader(),
    createFooter()
  );
}
