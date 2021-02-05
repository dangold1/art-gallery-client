import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryActionCreator } from "../../Pages/Lobby/store/actions";
import "./styles.css";
import "../Popup/styles.css";
import Popup from "../Popup/Popup";

const FiltersComponent = () => {
  const lobbyState = useSelector((state) => state.lobby);
  const { categories, selectedCategory } = lobbyState;
  const dispatch = useDispatch();

  const handleCategoryClick = (category, subCategory) => {
    dispatch(setCategoryActionCreator(category, subCategory));
  };

  return (
    <div className="filters-container">
      {Object.keys(categories).map((category) => {
        const isSelected = selectedCategory.main === category ? "active" : "";
        if (category === "All") {
          return (
            <button
              className="popup-button all"
              onClick={() =>
                handleCategoryClick(category, categories[category])
              }
            >
              {category}
            </button>
          );
        }
        return (
          <Popup
            key={category}
            className="filter-btn"
            isSelected={isSelected}
            popupBtn={category}
          >
            {categories[category].map((subCategory) => (
              <button
                className="popup-button"
                onClick={() => handleCategoryClick(category, subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </Popup>
        );
      })}
    </div>
  );
};

export default FiltersComponent;
