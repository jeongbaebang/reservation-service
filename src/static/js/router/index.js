import Menu from '../views/Menu';
import Home from '../views/Home';
import UserReservation from '../views/UserReservation';
import MenuReservation from '../views/MenuReservation';
import Confirm from '../views/Confirm';
import Admin from '../views/Admin';

import router from './router';

const routeInfo = [
  { path: '/', View: Home },
  { path: '/menu', View: Menu },
  { path: '/user_reservation', View: UserReservation },
  { path: '/menu_reservation', View: MenuReservation },
  { path: '/confirm', View: Confirm },
  { path: '/admin', View: Admin }
];

export default router(routeInfo);
