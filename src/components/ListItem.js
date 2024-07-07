import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: this.props.amount,
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";

    this.$rootElement.innerHTML = `${this.state.date.toLocaleString()} - <b>$${
      this.state.amount
    }</b>`;

    const $deliteButton = document.createElement("button");
    $deliteButton.className = "delete-button";
    $deliteButton.textContent = "Удалить";

    this.$rootElement.append($deliteButton);

    this.$deliteButton = $deliteButton;

    this.$deliteButton.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(event) {
    event.preventDefault();
    this.$rootElement.remove();
    this.props.onDelete(this.state.amount);
  }
}
