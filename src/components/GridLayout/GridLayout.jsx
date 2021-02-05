import React from "react";
import "./styles.css";
import ItemCard from "../ItemCard/ItemCard";

const GridLayout = ({ items }) => {
  return (
    <div className="grid-container">
      {items.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default GridLayout;
