import React from "react";
import List from "./components/List.js";
import "./App.css";

function createCardList(cardIds, allCards) {
  let cards = cardIds.map((i) => {
    return allCards[i];
  });
  return cards;
}

function App(props) {
  const allCards = props.store.allCards;
  const lists = props.store.lists.map((list) => {
    return (
      <List
        key={list.id}
        header={list.header}
        cards={createCardList(list.cardIds, allCards)}
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

export default App;
