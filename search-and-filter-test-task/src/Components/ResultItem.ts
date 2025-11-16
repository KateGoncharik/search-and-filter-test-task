import Component from '../component';
import { ResultItem } from '../types';
import { showPopup, updatePopupContent } from './Layout/Popup';

export default function createResultItem(itemData: ResultItem): Component {
  const item = new Component({
    className: 'result-item',
    text: itemData.ManufacturerName,
  });
  item.setAttribute('data-manufacturer-id', itemData.ManufacturerId.toString());
  item.addListener('click', () => handleItemClick(itemData));
  async function handleItemClick(itemData: ResultItem) {
    if (itemData.ManufacturerId) {
      updatePopupContent(itemData.ManufacturerId).then(() => showPopup());
    }
  }
  return item;
}
