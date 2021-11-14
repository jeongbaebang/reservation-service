import Menu from '../views/Menu.js';
import Home from '../views/Home.js';

const routes = [
  { path: '/', View: Home },
  { path: '/menu', View: Menu }
];

const router = async () => {
  const potentialMatches = routes.map(route => ({
    route,
    isMatch: window.location.pathname === route.path
  }));

  let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  const view = new match.route.View();

  document.querySelector('#app').innerHTML = await view.getHtml();
};

export default router;
