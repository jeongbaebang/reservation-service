import AbstractView from './AbstractView';
import Menu from '../controller/menu';

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

    function createItem({ name, text, img, price }) {
      const $item = cE('div', 'item');
      const $itemTitle = cE('div', 'item-title');
      const $itemTitleText = cE('div', 'text', name);

      aC($itemTitle, $itemTitleText);

      const $itemContent = cE('div', 'item-content');
      const $itemContentText = cE('div', 'text', text);

      aC($itemContent, $itemContentText);

      if (img) {
        const $img = cE('img', 'img');
        $img.src = img;
        $img.alt = name;

        aC($itemContent, $img);
      }

      const $itemUserSelection = cE('div', 'item-userSelection');

      const $price = cE('div', 'price', price);

      const $quantity = cE('div', 'quantity');

      const $quantityButtons = cE('div', 'quantity-buttons');

      const $increaseButton = cE('button', 'increase', '+');
      $increaseButton.type = 'button';

      const $num = cE('div', 'num', '0');

      const $decreaseButton = cE('button', 'decrease', '-');
      $decreaseButton.type = 'button';

      aC($quantityButtons, [$decreaseButton, $num, $increaseButton]);

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

      const $progress = cE('div', 'progress');

      aC($progress, cE('p', null, '2/3'));

      aC($menuReservation, [cE('h1', null, '메뉴선택'), $progress]);

      const $title = [
        '면종류',
        '리조또',
        '피자',
        '에이드 1L/500ML',
        '사이드'
      ].map(title => cE('h2', null, title));

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
