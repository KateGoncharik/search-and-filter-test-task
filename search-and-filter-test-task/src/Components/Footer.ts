import Component from '../component';

export default function createFooter(): Component {
  const info = new Component({
    className: 'footer-title',
    text: 'TODO',
  });

  return new Component({ tag: 'footer', className: 'main-footer' }, info);
}
