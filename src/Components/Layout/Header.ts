import Component from '../../component';

export const createHeader = (): Component => {
  const authorLink = new Component({
    tag: 'a',
    className: 'author',
    text: 'Kate Goncharik',
  });
  authorLink.setAttribute(
    'href',
    'https://www.linkedin.com/in/kate-goncharik/'
  );
  const headerTitle = new Component(
    {
      className: 'header-title',
      text: 'Test task completed by ',
    },
    authorLink
  );

  return new Component(
    { tag: 'header', className: 'main-header' },
    headerTitle
  );
};
