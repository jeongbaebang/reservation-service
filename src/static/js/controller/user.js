import tools from '../tools/index.js';
import router from '../router/index.js';

export default class extends tools {
  controller() {
    const $reservationForm = document.forms.reservation;
    if (!$reservationForm) return;

    const { navigate } = router;
    const qS = super.querySelector;
    const tC = super.textContent;
    const { parse, stringify } = super.JSON();

    const $buttons = super.getElementById('js-people-buttons');
    const countValue = tC(qS($buttons, '.num'));

    // 카운터 활성화
    const count = super.countFunc(1);

    // 상태관리 활성화
    const localState = super.stateManagement();

    // 로컬스토리지 활성화
    const STORAGE_KEY = 'userReservationInfo';
    const storage = super.localStorage(STORAGE_KEY);
    const STORAGE_VALUE = storage.get();

    console.log(STORAGE_VALUE);
    if (STORAGE_VALUE !== null) {
      const { [STORAGE_KEY]: info } = parse(STORAGE_VALUE);
      console.log(info.time);
      $reservationForm.reservationTime.value = info.time;
    }

    const handlers = {
      click({ target: { type, className: cN, parentElement: pE } }) {
        if (type !== 'button') return;

        const $targetParent = qS(pE, '.num');
        const clickState = tC($targetParent);

        // 카운터 증가/감소
        count(cN, clickState);
      },
      submit(event) {
        event.preventDefault();
        localState.set(
          STORAGE_KEY,
          stringify({
            people: countValue.get(),
            time: $reservationForm.reservationTime.value,
            tel: $reservationForm.reservationTel.value
          })
        );
        console.log(localState.get());
        storage.set(stringify(localState.get()));
        // storage('set', STORAGE_KEY, stringify(reservationInfo));
        // console.log(storage('get', STORAGE_KEY));
        navigate('/menu_reservation');
      }
    };

    super.addEventListener($buttons, 'click', handlers.click);
    super.addEventListener($reservationForm, 'submit', handlers.submit);
  }
}
