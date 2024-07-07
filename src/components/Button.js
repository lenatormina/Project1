import { Component } from "../core/Component";

export class Button extends Component {
  setup(props) {
    this.$rootElement = document.createElement("button");
    // props.text содержит текст 'Увеличить счетчик'
    this.$rootElement.textContent = props.text;
    // props.onClick содержит метод handleClick() родительского компонента
    this.$rootElement.addEventListener("click", props.onClick);
  }
}
