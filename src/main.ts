import createApp from './Components/App';
import { paginateAndRender } from './Components/Pagination';
import './assets/style.css';

document.body.appendChild(createApp().getNode());
paginateAndRender({ allData: [], totalItems: 0, currentPage: 1 });
