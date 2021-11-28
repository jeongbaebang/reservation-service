import '../css/index.css';

import router from './router/index';

const { route, navigate } = router;

window.addEventListener('popstate', () => {
  route();
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').addEventListener('click', e => {
    if (!e.target.matches('[data-link]')) return;
    e.preventDefault();

    navigate(e.target.dataset.link);
  });

  route();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(err => {
    console.error(err);
  });
}

// 임시
document.querySelector('.logo').addEventListener('dblclick', () => {
  navigate('/admin');
});
