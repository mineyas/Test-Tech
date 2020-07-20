import React from "react";
import ToDo from "./components/ToDo";
import TodoContext from "./context/TodoContext";


class App extends React.Component {
  state = {
    items: [],
  };
  setItems = this.setItems.bind(this);

  setItems(items) {
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <TodoContext.Provider
          value={{
            items: items,
            setItems: this.setItems,
          }}
        >
          <ToDo />
        </TodoContext.Provider>
      </div>
    );
  }
}

export default App;
