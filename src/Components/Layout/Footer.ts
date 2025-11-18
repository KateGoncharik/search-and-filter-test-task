import Component from '../../component';

export default function createFooter(): Component {
  const info = new Component({
    className: 'footer-title',
    text: 'Created with HTML, CSS, TypeScript, Vite in 2025',
  });

  return new Component({ tag: 'footer', className: 'main-footer' }, info);
}
