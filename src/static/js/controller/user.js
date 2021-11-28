import tools from '../tools/index';
import router from '../router/index';

export default class extends tools {
  controller() {
    const $reservationForm = document.forms.reservation;
    if (!$reservationForm) return;

    const { navigate } = router;
    const qS = super.querySelector;
    const tC = super.textContent;
    const { stringify } = super.JSON();

    const $buttons = super.getElementById('js-people-buttons');
    const countValue = tC(qS($buttons, '.num'));

    // 카운터 활성화
    const count = super.countFunc(1);

    // 로컬스토리지 활성화
    const STORAGE_KEY = 'userReservationInfo';
    const storage = super.localStorage(STORAGE_KEY);

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

        storage.set(
          stringify({
            headCount: countValue.get(),
            time: $reservationForm.reservationTime.value,
            phoneNum: $reservationForm.reservationTel.value
          })
        );

        navigate('/menu_reservation');
      }
    };

    super.addEventListener($buttons, 'click', handlers.click);
    super.addEventListener($reservationForm, 'submit', handlers.submit);
  }
}
