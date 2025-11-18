import Component from '../../component';
import githubIcon from '../../assets/img/github-mark.png';
import linkedin from '../../assets/img/linkedin.png';

export const createFooter = (): Component => {
  const title = new Component({
    className: 'footer-title',
    text: 'Created with HTML, CSS, TypeScript, Vite and passion',
  });
  const info = new Component({
    tag: 'a',
    className: 'repo-link',
    text: 'Check out this task repository',
  });
  info.setAttribute(
    'href',
    'https://github.com/KateGoncharik/search-and-filter-test-task'
  );

  const gitHubIcon = new Component({
    tag: 'img',
    className: 'github',
  });
  gitHubIcon.setAttribute('src', githubIcon);
  const githubLink = new Component(
    {
      tag: 'a',
    },
    gitHubIcon
  );
  githubLink.setAttribute('href', 'https://github.com/KateGoncharik');

  const linkedinIcon = new Component({
    tag: 'img',
    className: 'linkedin',
  });
  linkedinIcon.setAttribute('src', linkedin);
  const linkedinLink = new Component(
    {
      tag: 'a',
    },
    linkedinIcon
  );
  linkedinLink.setAttribute(
    'href',
    'https://www.linkedin.com/in/kate-goncharik/'
  );

  const year = new Component({
    className: 'year',
    text: '2025',
  });
  return new Component(
    { tag: 'footer', className: 'main-footer' },
    title,
    info,
    githubLink,
    linkedinLink,
    year
  );
};
