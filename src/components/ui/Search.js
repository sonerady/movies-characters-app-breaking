import { getSuggestedQuery } from "@testing-library/dom";
import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          value={text}
          placeholder="Oyuncu İsmi Giriniz..."
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
