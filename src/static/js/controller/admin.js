import tools from '../tools/index.js';

export default class extends tools {
  controller() {
    const addEventListener = super.addEventListener;
    const cE = super.createElement;
    const aC = super.appendChild;
    const qS = super.querySelector;
    const { getFirestore, collection, query, orderBy, onSnapshot } =
      super.fireStore();

    const db = getFirestore();

    const $content = qS(document, '.content');

    function createItem({ user, menu, request, time: generationTime }) {
      const gT = generationTime.toDate();
      const { headCount, time, phoneNum } = JSON.parse(user);
      const menus = Object.entries(JSON.parse(menu)).flat().join(' ');

      const $item = cE('div', 'item');

      const $itemTitle = cE('div', 'item-title');
      new Date().getHours();
      const $itemTitleText = cE(
        'div',
        'text',
        `${gT.getDate()}일 - ${gT.getHours()}:${gT.getMinutes()}분 예약손님`
      );

      aC($itemTitle, $itemTitleText);

      const $itemContent = cE('div', 'item-content');
      const $itemContentTime = cE('div', 'text', `방문예정시간 : ${time}분`);
      const $itemContentHeadCount = cE(
        'div',
        'text',
        `인원수 : ${headCount}명`
      );
      const $itemContentPhoneNum = cE('div', 'text', `전화번호 : ${phoneNum}`);
      const $itemContentMenu = cE('div', 'text', `메뉴 : ${menus}`);

      const $itemContentRequset = cE('div', 'text', `요청사항 : ${request}`);

      aC($itemContent, [
        $itemContentTime,
        $itemContentHeadCount,
        $itemContentPhoneNum,
        $itemContentMenu,
        $itemContentRequset
      ]);

      aC($item, [$itemTitle, $itemContent]);

      return $item;
    }

    async function init() {
      const q = query(collection(db, 'users'), orderBy('time', 'asc'));

      const unsub = await onSnapshot(q, snapshot => {
        snapshot.docChanges().forEach(change => {
          $content.insertBefore(
            createItem(change.doc.data()),
            $content.firstElementChild
          );
        });
      });

      addEventListener(globalThis, 'offline', () => {
        unsub();
      });
      addEventListener(globalThis, 'beforeunload', () => {
        unsub();
      });
    }

    init();
  }
}
