import { getManufacturerDetails } from '../../api/api';
import Component from '../../component';

export const showPopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.classList.toggle('hidden');
  }
};

export default function createPopup(
  title: string,
  contentComponent: Component
): Component {
  const popupRoot = new Component({
    tag: 'div',
    className: `popup hidden`,
  });

  const contentContainer = new Component({
    tag: 'div',
    className: `popup-container`,
  });

  const header = new Component({
    tag: 'div',
    className: `popup-header`,
  });
  const titleComponent = new Component({
    tag: 'h2',
    className: `popup-title`,
    text: title,
  });
  const closeButton = new Component({
    tag: 'button',
    className: `popup-close`,
    text: '×',
  });

  const hide = () => {
    popupRoot.toggleClass('hidden');
  };
  closeButton.addListener('click', () => {
    hide();
  });

  header.appendChildren([titleComponent, closeButton]);

  const body = new Component(
    { tag: 'div', className: `popup-body` },
    contentComponent
  );

  contentContainer.appendChildren([header, body]);
  popupRoot.append(contentContainer);

  popupRoot.addListener('click', (event: Event) => {
    if (event.target === popupRoot.getNode()) {
      hide();
    }
  });

  document.body.append(popupRoot.getNode());

  return popupRoot;
}

export const updatePopupContent = async (manufacturerId: number) => {
  const popupContent = document.querySelector('.popup-content');
  if (!popupContent) {
    throw new Error('Popup сontent expected');
  }
  const details = await getManufacturerDetails(manufacturerId);
  popupContent.innerHTML = '';
  popupContent.appendChild(createDetails(details.Results[0]).getNode());
};

export const createDetails = (details: any) => {
  const AAA = new Component({
    className: 'TODO',
    text: details.Address,
  });
  const BBB = new Component({
    className: 'TODO',
    text: details.Country,
  });
  const CCC = new Component({
    className: 'TODO',
    text: details.ContactEmail,
  });
  const contentWrapper = new Component({}, AAA, BBB, CCC);

  details.ManufacturerTypes.forEach((type: { Name: string }) => {
    const AAA = new Component({
      className: 'TODO',
      text: type.Name,
    });
    contentWrapper.append(AAA);
  });

  console.log('details', details);
  return contentWrapper;
};
