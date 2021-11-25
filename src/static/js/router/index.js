import Menu from '../views/Menu.js';
import Home from '../views/Home.js';
import UserReservation from '../views/UserReservation.js';
import MenuReservation from '../views/MenuReservation.js';
import Confirm from '../views/Confirm.js';
import Admin from '../views/Admin.js';

import router from './router.js';

const routeInfo = [
  { path: '/', View: Home },
  { path: '/menu', View: Menu },
  { path: '/user_reservation', View: UserReservation },
  { path: '/menu_reservation', View: MenuReservation },
  { path: '/confirm', View: Confirm },
  { path: '/admin', View: Admin }
];

export default router(routeInfo);
