import createMainPage from './Components/MainPage';
import './style.css';

document.querySelector('#app')!.appendChild(createMainPage().getNode());
