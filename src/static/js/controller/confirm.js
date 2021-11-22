import tools from '../tools/index.js';

export default class extends tools {
  controller() {
    const $form = document.forms.reservation;
    if (!$form) return;

    const cE = super.createElement;
    const aC = super.appendChild;
    const getId = super.getElementById;
    const storage = super.localStorage;
    const { parse } = super.JSON();

    const STORAGE_MENU_KEY = 'menuReservationInfo';
    const STORAGE_USER_KEY = 'userReservationInfo';

    const menu = storage(STORAGE_MENU_KEY).get();
    const user = storage(STORAGE_USER_KEY).get();

    function createItemList(itemName, itemText) {
      const $itemContent = cE('div', 'item-content');
      const $itemContentText = cE('div', 'text', `${itemName} : ${itemText}`);

      aC($itemContent, $itemContentText);

      return $itemContent;
    }

    function createTextArea(id) {
      const $target = getId(id);
      const $itemContent = cE('div', 'item-content');
      const $textara = cE('textarea');

      $textara.placeholder = '맵기조절등 원하는 요청이 있다면 적어주세요';
      aC($itemContent, $textara);

      aC($target, $itemContent);
    }

    function createItem(id, json) {
      const $target = getId(id);
      const $fragment = document.createDocumentFragment();
      const value = Object.entries(parse(json));

      value.forEach(v => {
        aC($fragment, createItemList(v[0], v[1]));
      });

      aC($target, $fragment);
    }

    createItem('confirm-personal', menu);
    createItem('confirm-menu', user);
    createTextArea('confirm-request');
  }
}
