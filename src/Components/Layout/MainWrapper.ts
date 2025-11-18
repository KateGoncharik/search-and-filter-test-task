import Component from '../../component';
import { updateSearchByFilter } from '../../helpers';
import { createResultsWrapper } from '../Results';
import { createFilters } from '../Search';

const createApiDescription = () => {
  const apiLink = new Component({
    tag: 'a',
    text: 'Product Information Catalog Vehicle Listing API',
  });
  apiLink.setAttribute('href', 'https://vpic.nhtsa.dot.gov/api/');
  const info = new Component({
    text: ' by National Highway Traffic Safety Administration  provides information on Vehicles and their specifications. Here you can get information about vehicle parts by their name and type',
  });
  return new Component(
    {
      className: 'api-description',
    },
    apiLink,
    info
  );
};

export default function createMainWrapper(): Component {
  updateSearchByFilter('');
  return new Component(
    { tag: 'main', className: 'main-wrapper' },
    createApiDescription(),
    createFilters(),
    createResultsWrapper()
  );
}
