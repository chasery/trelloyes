import React from "react";
import List from "./components/List.js";
import STORE from "./store.js";
import "./App.css";

class App extends React.Component {
  state = {
    store: STORE,
  };

  handleAddCard = () => {
    console.log("add");
  };

  handleDeleteCard = () => {
    console.log("delete");
  };

  render() {
    const { store } = this.state;
    const lists = store.lists.map((list) => {
      return (
        <List
          key={list.id}
          header={list.header}
          cards={list.cardIds.map((id) => store.allCards[id])}
          onAddCard={this.handleAddCard}
          onDeleteCard={this.handleDeleteCard}
        />
      );
    });
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">{lists}</div>
      </main>
    );
  }
}

export default App;
