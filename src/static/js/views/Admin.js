import AbstractView from './AbstractView.js';
import Admin from '../controller/admin.js';

const admin = new Admin();

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('관리자 페이지');
  }

  controller() {
    admin.controller();
  }

  async getHtml() {
    const cE = super.createElement;
    const aC = super.appendChild;

    function getConAdminScrrenHTML() {
      const $scrren = cE('div', 'scrren');

      aC($scrren, cE('h1', null, '관리자 페이지'));

      const $admin = cE('div', 'admin');

      const $content = cE('section', 'content');

      aC($admin, $content);

      aC($scrren, $admin);

      return $scrren;
    }
    return getConAdminScrrenHTML().outerHTML;
  }
}
