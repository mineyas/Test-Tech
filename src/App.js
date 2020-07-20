import React from "react";
import ToDo from "./components/ToDo";
import Context from './components/context/context'

class App extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };
  handleInput = this.handleInput.bind(this);
  addItem = this.addItem.bind(this);
  deleteItem = this.deleteItem.bind(this);
  setUpdate = this.setUpdate.bind(this);

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log(newItem)
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      this.setState({
        items: items,
      });
    });
  }

  render() {
  return (
    <div>
      <Context.Provider>
      <ToDo items={this.state.items} currentItem={this.state.currentItem} setUpdate={this.setUpdate} deleteItem={this.deleteItem} addItem={this.addItem} handleInput={this.handleInput}/>
      </Context.Provider>
    </div>
  );
}
}

export default App
