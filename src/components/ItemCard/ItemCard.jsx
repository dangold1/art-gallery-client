import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faLightbulb
} from "@fortawesome/fontawesome-free-solid";
import { mapCategories } from "../../services/category.service";

const ItemCard = ({ data }) => {
  const {
    titleImage,
    logoImage,
    name,
    location,
    spacesCount,
    itemsCount
  } = data;

  const categories = mapCategories(data.categories);

  return (
    <div className="card">
      <img className="card-image" src={titleImage} alt="titleImage"></img>
      <img className="card-logo" src={logoImage} alt="logoImage"></img>
      <div className="card-details">
        <h3 className="name">{name}</h3>
        <h5 className="location">{location}</h5>
        <div className="card-subcategories">
          {categories &&
            Object.values(categories).map((subCategories, i) => (
              <div key={i} className="card-subcategory">
                {subCategories}
              </div>
            ))}
        </div>
      </div>
      <hr className="css-baseline" />
      <div className="counts">
        <div>
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          Spaces {spacesCount}
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faLightbulb} />
          Items {itemsCount}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
