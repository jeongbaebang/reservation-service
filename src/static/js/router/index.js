import Menu from '../views/Menu.js';
import Home from '../views/Home.js';
// eslint-disable-next-line import/no-cycle
import UserReservation from '../views/UserReservation.js';
import MenuReservation from '../views/MenuReservation.js';

import router from './router.js';

const routeInfo = [
  { path: '/', View: Home },
  { path: '/menu', View: Menu },
  { path: '/user_reservation', View: UserReservation },
  { path: '/menu_reservation', View: MenuReservation }
];

export default router(routeInfo);
