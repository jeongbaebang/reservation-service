import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('메뉴');
  }

  async getHtml() {
    const createElement = super.createElement;
    const appendChild = super.appendChild;

    function createItemList({ name, text }) {
      const $item = createElement('div', 'item');
      const $itemTitle = createElement('div', 'item-title');
      const $itemTitleText = createElement('div', 'text', name);

      appendChild($itemTitle, $itemTitleText);

      const $itemContent = createElement('div', 'item-content');
      const $itemContentText = createElement('div', 'text', text);

      appendChild($itemContent, $itemContentText);
      appendChild($item, [$itemTitle, $itemContent]);

      return $item;
    }

    function getMenuScrrenHTML(info) {
      const $scrren = createElement('div', 'scrren');
      const $menuCard = createElement('div', 'menu-card');

      const $title = ['면종류', '리조또', '피자', '에이드'].map(title =>
        createElement('h2', null, title)
      );

      Object.values(info).forEach((infoArr = [], i) => {
        const $content = createElement('section', 'content');
        appendChild($content, $title[i]);

        infoArr.forEach(element => {
          appendChild($content, createItemList(element));
        });

        appendChild($menuCard, $content);
      });

      appendChild($scrren, $menuCard);

      const $reservation = createElement('div', 'reservation-btn');

      const $button = createElement('button', null, '예약하기');
      $button.dataset.link = '/user_reservation';

      appendChild($reservation, $button);
      appendChild($scrren, $reservation);

      return $scrren;
    }

    return getMenuScrrenHTML(this.info).outerHTML;
  }
}
