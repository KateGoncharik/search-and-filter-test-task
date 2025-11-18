import Component from '../../component';
import { updateSearchByFilter } from '../../helpers';
import { createResultsWrapper } from '../Results';
import { createFilters } from '../Search';

const createApiDescription = () => {
  return new Component({
    className: 'api-description',
    text: 'Product Information Catalog Vehicle Listing API by National Highway Traffic Safety Administration  provides information on Vehicles and their specifications. Here you can get information about vehicle parts by their name and type',
  });
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
