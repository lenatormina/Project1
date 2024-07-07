import { Component } from "../core/Component";

export class Form extends Component {
  constructor(props = {}) {
    super(props, props);
    this.props = props;
  }

  setup(props) {
    this.state = {
      amount: "",
    };

    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    const $LABEL = document.createElement("label");
    $LABEL.className = "donate-form__input-label";
    $LABEL.textContent = "Введите сумму в $";

    const $INPUT = document.createElement("input");
    $INPUT.className = "donate-form__donate-input";
    $INPUT.name = "amount";
    $INPUT.type = "number";
    $INPUT.max = "100";
    $INPUT.min = "1";

    $LABEL.append($INPUT);

    const $BUTTON = document.createElement("button");
    $BUTTON.className = "donate-form__submit-button";
    $BUTTON.type = "submit";
    $BUTTON.textContent = "Задонатить";

    this.$rootElement.append($LABEL, $BUTTON);

    this.$input = $INPUT;
    this.$button = $BUTTON;

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  get isValid() {
    const amount = Number(this.state.amount);
    return !isNaN(amount) && amount >= 1 && amount <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$input.value = "";
    }
  }
}
