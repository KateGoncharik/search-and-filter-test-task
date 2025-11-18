import { createApp } from './Components/App';
import { paginateAndRender } from './Components/Pagination';
import { appState } from './Components/state';
import './assets/style.css';
import { updatePaginationControllersState } from './helpers';

document.body.appendChild(createApp().getNode());
paginateAndRender(appState);
updatePaginationControllersState();
