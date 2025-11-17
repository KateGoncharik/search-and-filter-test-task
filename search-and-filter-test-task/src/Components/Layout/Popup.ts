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
  popupContent.appendChild(createDetails(details).getNode());
};

export const createDetails = (details: any) => {
  const addressTitle = createPopupDetailsTitle('Address');
  const address = createPopupDetailsBlock(details.Address, 'No address');
  const countryTitle = createPopupDetailsTitle('Country');
  const country = createPopupDetailsBlock(details.Country, 'No country');
  const contactsTitle = createPopupDetailsTitle('Contacts');
  const contact = createPopupDetailsBlock(details.ContactEmail, 'No email');
  const typeTitle = createPopupDetailsTitle('Type');

  const contentWrapper = new Component(
    { className: 'popup-content-wrapper' },
    addressTitle,
    address,
    countryTitle,
    country,
    contactsTitle,
    contact,
    typeTitle
  );

  if (details.ManufacturerTypes.length === 0) {
    contentWrapper.append(createPopupDetailsBlock(null, 'No type'));
  } else {
    details.ManufacturerTypes.forEach((t: { Name: string }) => {
      const type = createPopupDetailsBlock(t.Name, '');
      contentWrapper.append(type);
    });
  }

  return contentWrapper;
};

const createPopupDetailsTitle = (text: string) => {
  return new Component({
    className: 'popup-details-title',
    text,
  });
};

const createPopupDetailsBlock = (text: string | null, placeholder: string) => {
  return new Component({
    className: 'popup-details',
    text: text ?? placeholder,
  });
};
