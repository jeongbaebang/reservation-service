import router from './router/index.js';

const { route, navigate } = router;

window.addEventListener('popstate', () => {
  route();
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigate(e.target.dataset.link);
    }
  });

  route();
});
