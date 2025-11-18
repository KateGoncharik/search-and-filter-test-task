import Component from '../component';
import { ResultItem } from '../types';
import { showPopup, updatePopupContent } from './Layout/Popup';

export default function createResultItem(itemData: ResultItem): Component {
  const itemBlock = new Component({
    className: 'result-item',
  });
  const partName = new Component({
    className: 'result-item-detail bold',
    text: itemData.Name,
  });
  const manName = new Component({
    className: 'result-item-detail',
    text: 'Produced by: ' + itemData.ManufacturerName,
  });
  const link = new Component({
    tag: 'a',
    className: 'result-item-detail',
    text: 'Check details in the sourse',
  });
  link.setAttribute('href', itemData.URL);
  link.addListener('click', (e) => e.stopPropagation());

  itemBlock.appendChildren([partName, manName, link]);
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
