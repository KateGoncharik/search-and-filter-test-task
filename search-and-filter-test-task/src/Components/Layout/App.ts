import Component from '../../component';
import createFooter from './Footer';
import createHeader from './Header';
import createMainWrapper from './MainWrapper';

export default function createApp(): Component {
  return new Component(
    { className: 'app' },
    createHeader(),
    createMainWrapper(),
    createFooter()
  );
}
