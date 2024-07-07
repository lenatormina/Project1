import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    const $H1 = document.createElement("h1");
    $H1.className = "total-amount";
    $H1.textContent = "Итого: $";

    const $SPAN = document.createElement("span");
    $SPAN.textContent = this.state.total;

    $H1.append($SPAN);
    this.$rootElement.appendChild($H1);

    this.$total = $SPAN;

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });

    this.$rootElement.appendChild(donateForm.$rootElement);

    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount, onDelete: this.onItemDelete.bind(this) });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += Number(amount);
    this.$total.textContent = `${this.state.total}`;
  }

  onItemDelete(amount) {
    this.state.total -= Number(amount);
    this.$total.textContent = `${this.state.total}`;
  }
}
