import createApp from './Components/App';
import { paginateAndRender } from './Components/Pagination';
import { appState } from './Components/state';
import './assets/style.css';

document.body.appendChild(createApp().getNode());
paginateAndRender(appState);
