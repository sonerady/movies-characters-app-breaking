import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <h1>Yükleniyor...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} /> // CharacterItem'a props ettim.
      ))}
    </section>
  );
};

export default CharacterGrid;
