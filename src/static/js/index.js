import router from './routes/routes.js';

const navigatorTO = url => {
  window.history.pushState(null, null, url);

  router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigatorTO(e.target.dataset.link);
    }
  });

  router();
});
