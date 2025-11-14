import Component from '../component';
import { ResultItem } from '../types';

export default function createResultItem(itemData: ResultItem): Component {
  return new Component({
    className: 'result-item',
    text: itemData.ManufacturerName,
  });
}
