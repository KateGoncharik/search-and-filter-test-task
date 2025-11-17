import Component from '../../component';

export default function createHeader(): Component {
  const headerTitle = new Component({
    className: 'header-title',
    text: 'Test task by Kate Goncharik',
  });
  return new Component(
    { tag: 'header', className: 'main-header' },
    headerTitle
  );
}
