import tools from '../tools/index';
import router from '../router/index';

export default class extends tools {
  controller() {
    const $form = document.forms.reservation;
    if (!$form) return;

    const qS = super.querySelector;
    const tC = super.textContent;
    const fE = super.findElementByClassName;
    const { stringify } = super.JSON();
    const { navigate } = router;

    const $contents = qS($form, '.menu-reservation');

    // 카운터 활성화
    const count = super.countFunc(0);

    // 상태관리 활성화
    const localState = super.stateManagement();

    // 로컬스토리지 활성화
    const STORAGE_KEY = 'menuReservationInfo';
    const storage = super.localStorage(STORAGE_KEY);

    let result = {};

    function filterToZero(value) {
      const arr = Object.entries(value).filter(v => v[1] !== '0');
      const obj = Object.fromEntries(arr);

      return {
        toArr() {
          return arr;
        },
        toObj() {
          return obj;
        }
      };
    }

    const handlers = {
      click({ target: { type, className: cN, parentElement: pE } }) {
        if (type !== 'button') return;

        const $targetParent = qS(pE, '.num');
        const clickNum = tC($targetParent);
        const clickName = tC(qS(fE($targetParent, 'item'), '.item-title'));

        // 카운터 증가/감소
        count(cN, clickNum);

        localState.set(clickName.get(), clickNum.get());

        // 카운터 0 값 제외기능
        result = filterToZero(localState.get()).toObj();
      },

      submit(event) {
        event.preventDefault();
        storage.set(stringify(result));
        navigate('/confirm');
      }
    };

    super.addEventListener($contents, 'click', handlers.click);
    super.addEventListener($form, 'submit', handlers.submit);
  }
}
