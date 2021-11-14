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
      <section class="content"></section>
    </div>

    <div class="menu">
      <button data-link="/menu">메뉴보기</button>
    </div>
    <div class="reservation">
      <button data-link="/menu">예약하기</button>
    </div>
  </div>
`;
  }
}
