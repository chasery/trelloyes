import React from "react";
import Card from "./Card.js";
import "./List.css";

function List() {
  return (
    <section className="List">
      <header className="List-header">
        <h2>Second list</h2>
      </header>
      <div className="List-cards">
        <Card />
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
