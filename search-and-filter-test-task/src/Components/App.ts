import Component from '../component';
import createFooter from './Layout/Footer';
import createHeader from './Layout/Header';
import createMainWrapper from './Layout/MainWrapper';
import createPopup from './Layout/Popup';

export default function createApp(): Component {
  createPopup(
    'Details',
    new Component({ className: 'popup-content', text: 'Loading...' })
  );

  return new Component(
    { className: 'app' },
    createHeader(),
    createMainWrapper(),
    createFooter()
  );
}
