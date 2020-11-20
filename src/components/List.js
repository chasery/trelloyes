import React from "react";
import "./List.css";
import Card from "./Card.js";

function List(props) {
  const cards = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        title={card.title}
        content={card.content}
        onDeleteCard={props.onDeleteCard}
      />
    );
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.onAddCard(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
