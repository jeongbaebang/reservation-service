import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('예약');
  }

  functionActivation() {
    const $reservationForm = document.forms.reservation;
    if (!$reservationForm) return;

    const storage = super.localStorage;
    const $buttons = super.getElementById('js-people-buttons');
    const $count = super.querySelector($buttons, '.num');

    function countFunc() {
      let state = 1;

      const changeCount = num => {
        $count.textContent = num;
      };

      const increase = () => {
        state += 1;
        changeCount(state);
      };

      const decrease = () => {
        if (Number($count.textContent) <= 1) {
          changeCount(1);
        } else {
          state -= 1;
          changeCount(state);
        }
      };

      return function _closure(className) {
        return className === 'increase' ? increase() : decrease();
      };
    }

    const count = countFunc();

    const handlers = {
      click({ target: { type, className } }) {
        if (type === 'button') count(className);
      },
      submit(event) {
        event.preventDefault();
        const reservationInfo = {
          people: $count.textContent,
          time: $reservationForm.reservationTime.value,
          tel: $reservationForm.reservationTel.value
        };
        storage('set', 'reservationInfo', JSON.stringify(reservationInfo));
        console.log(storage('get', 'reservationInfo'));
      }
    };

    super.addEventListener($buttons, 'click', handlers.click);
    super.addEventListener($reservationForm, 'submit', handlers.submit);
  }

  async getHtml() {
    return `
    <div class="scrren">
    <form name="reservation">
      <div class="reservation-card">
        <section class="content">
          <h1>*예약정보*</h1>
          <div class="progress"><p>1/3</p></div>
          <div class="reservation-people">
            <div>
              <h2>몇분이세요?</h2>
            </div>

            <div class="people-button" id="js-people-buttons">
              <button type="button" class="increase" data-increase="+">
                +
              </button>
              <div class="num">1</div>
              <button type="button" class="decrease" data-increase="-">
                -
              </button>
            </div>
          </div>

          <div class="reservation-time">
            <div>
              <h2>언제 방문 예정이신가요?</h2>
            </div>
            <div class="time">
              <input
                type="time"
                min="11:00"
                max="22:00"
                name="reservationTime"
                required
              />
            </div>
          </div>

          <div class="reservation-tel">
            <div>
              <h2>번호를 입력해주세요</h2>
              <p>*개인 정보는 안전하게 제거됩니다.</p>
            </div>
            <div class="tel">
              <input
                type="tel"
                pattern="[0-1]{3}[0-9]{4}[0-9]{4}"
                maxlength="11"
                placeholder="01012345678"
                name="reservationTel"
                required
              />
            </div>
          </div>
        </section>
      </div>
      <div class="reservation-btn">
        <button type="submit">메뉴 고르러 가기</button>
      </div>
    </form>
  </div>
`;
  }
}
