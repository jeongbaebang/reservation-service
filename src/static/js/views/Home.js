import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('니뽕내뽕');
  }

  async getHtml() {
    return `
    <div class="scrren">
      <div class="home">
        
      </div>

    <div class="menu-btn">
      <button data-link="/menu">메뉴보기</button>
    </div>
    <div class="reservation-btn">
      <button data-link="/reservation">예약하기</button>
    </div>
  </div>
`;
  }
}
