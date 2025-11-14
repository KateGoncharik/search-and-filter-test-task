import Component from '../component';

export default function createHeader(): Component {
  const headerTitle = new Component({
    className: 'header-title',
    text: 'Search and filter test task by Kate Goncharik',
  });
  const header = new Component(
    { tag: 'header', className: 'main-header' },
    headerTitle
  );
  return header;
}
