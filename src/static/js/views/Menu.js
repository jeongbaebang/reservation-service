import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('메뉴');
  }

  async getHtml() {
    const cE = super.createElement;
    const aC = super.appendChild;

    function createItemList({ name, text, img }) {
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

      aC($item, [$itemTitle, $itemContent]);

      return $item;
    }

    function getMenuScrrenHTML(info) {
      const $scrren = cE('div', 'scrren');
      const $menuCard = cE('div', 'menu-card');

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
          aC($content, createItemList(element));
        });

        aC($menuCard, $content);
      });

      aC($scrren, $menuCard);

      const $reservation = cE('div', 'reservation-btn');

      const $button = cE('button', null, '예약하기');
      $button.dataset.link = '/user_reservation';

      aC($reservation, $button);
      aC($scrren, $reservation);

      return $scrren;
    }

    return getMenuScrrenHTML(this.info).outerHTML;
  }
}
