import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const $H2 = document.createElement("h2");
    $H2.className = "donates-container__title";
    $H2.textContent = "Список донатов";

    const $DIV = document.createElement("div");
    $DIV.className = "donates-container__donates";

    this.$rootElement.append($H2, $DIV);

    this.$listContainer = $DIV;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}
