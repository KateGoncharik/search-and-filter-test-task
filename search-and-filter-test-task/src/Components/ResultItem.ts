import Component from '../component';
import { ResultItem } from '../types';
import { showPopup, updatePopupContent } from './Layout/Popup';

export default function createResultItem(itemData: ResultItem): Component {
  const itemBlock = new Component({
    className: 'result-item',
  });
  const name = new Component({
    className: 'result-item-detail',
    text: itemData.ManufacturerName,
  });
  const link = new Component({
    tag: 'a',
    className: 'result-item-detail',
    text: 'Details from resourse',
  });
  link.setAttribute('href', itemData.URL);
  link.addListener('click', (e) => e.stopPropagation());

  itemBlock.appendChildren([name, link]);
  itemBlock.setAttribute(
    'data-manufacturer-id',
    itemData.ManufacturerId.toString()
  );
  itemBlock.addListener('click', () => handleItemClick(itemData));
  async function handleItemClick(itemData: ResultItem) {
    if (itemData.ManufacturerId) {
      updatePopupContent(itemData.ManufacturerId).then(() => showPopup());
    }
  }
  return itemBlock;
}
