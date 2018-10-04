import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList todos={["cucumbers", "kale", "onion", "carrot"]} />
  </div>
);

const GroceryList = props => (
  <ul>
    {props.todos.map((todo) => (
      <GroceryListItem todo={todo} key={todo}/>
    ))}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      bold: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemBold() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    const style = {
      textDecoration: this.state.done ? "line-through" : "none",
      fontWeight: this.state.bold ? "bold" : "normal"
    };

    return (
      <li
        style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseOver={this.onListItemBold.bind(this)}
        onMouseOut={this.onListItemBold.bind(this)}
      >
        {this.props.todo}
      </li>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
