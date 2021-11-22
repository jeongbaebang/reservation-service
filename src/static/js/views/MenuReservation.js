import AbstractView from './AbstractView.js';
import Menu from '../controller/menu.js';

const menu = new Menu();

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('메뉴선택');
  }

  controller() {
    menu.controller();
  }

  async getHtml() {
    const cE = super.createElement;
    const aC = super.appendChild;

    function createItem({ name, text }) {
      const $item = cE('div', 'item');
      const $itemTitle = cE('div', 'item-title');
      const $itemTitleText = cE('div', 'text', name);

      aC($itemTitle, $itemTitleText);

      const $itemContent = cE('div', 'item-content');
      const $itemContentText = cE('div', 'text', text);

      aC($itemContent, $itemContentText);

      const $itemUserSelection = cE('div', 'item-userSelection');

      const $price = cE('div', 'price', '9.0');

      const $quantity = cE('div', 'quantity');

      const $quantityButtons = cE('div', 'quantity-buttons');

      const $increaseButton = cE('button', 'increase', '+');
      $increaseButton.type = 'button';

      const $num = cE('div', 'num', '0');

      const $decreaseButton = cE('button', 'decrease', '-');
      $decreaseButton.type = 'button';

      aC($quantityButtons, [$increaseButton, $num, $decreaseButton]);

      aC($quantity, $quantityButtons);
      aC($itemUserSelection, [$price, $quantity]);

      aC($item, [$itemTitle, $itemContent, $itemUserSelection]);

      return $item;
    }

    function getMenuScrrenHTML(info) {
      const $scrren = cE('div', 'scrren');

      const $form = cE('form');
      $form.name = 'reservation';

      aC($scrren, $form);

      const $menuReservation = cE('div', 'menu-reservation');

      aC($menuReservation, [
        cE('h1', null, '*메뉴선택*'),
        cE('div', 'progress', '2/3')
      ]);

      const $title = ['면종류', '리조또', '피자', '에이드'].map(title =>
        cE('h2', null, title)
      );

      Object.values(info).forEach((infoArr = [], i) => {
        const $content = cE('section', 'content');
        aC($content, $title[i]);

        infoArr.forEach(element => {
          aC($content, createItem(element));
        });

        aC($menuReservation, $content);
      });
      aC($form, $menuReservation);

      aC($scrren, $form);

      const $reservation = cE('div', 'reservation-btn');

      const $button = cE('button', null, '예약 하러 가기');
      $button.type = 'submit';

      aC($reservation, $button);
      aC($form, $reservation);

      return $scrren;
    }

    return getMenuScrrenHTML(this.info).outerHTML;
  }
}
