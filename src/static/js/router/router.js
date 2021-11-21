export default function router(routeInfo = []) {
  const ROUTE_INFO = routeInfo;

  const route = async () => {
    const potentialMatches = ROUTE_INFO.map(ROUTE => ({
      ROUTE,
      isMatch: window.location.pathname === ROUTE.path
    }));

    let match = potentialMatches.find(
      potentialMatche => potentialMatche.isMatch
    );

    if (!match) {
      match = {
        route: ROUTE_INFO[0],
        isMatch: true
      };
    }

    const view = new match.ROUTE.View();

    document.querySelector('#app').innerHTML = await view.getHtml();
    if (typeof view.controller === 'function') view.controller();
  };

  return {
    route() {
      return route();
    },
    navigate(url) {
      globalThis.history.pushState(null, null, url);

      route();
    }
  };
}
