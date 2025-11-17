import Component from '../../component';
import { updateSearchByFilter } from '../../helpers';
import { createResultsWrapper } from '../Results';
import { createFilters } from '../Search';

export default function createMainWrapper(): Component {
  updateSearchByFilter('');
  const apiDescription = new Component({
    className: 'api-description',
    text: 'Product Information Catalog Vehicle Listing API by National Highway Traffic Safety Administration  provides information on Vehicles and their specifications. Here you can get information about vehicle parts by their name and type',
  });
  return new Component(
    { tag: 'main', className: 'main-wrapper' },
    apiDescription,
    createFilters(),
    new Component({ className: 'results-title', text: 'Results:' }),
    createResultsWrapper()
  );
}
