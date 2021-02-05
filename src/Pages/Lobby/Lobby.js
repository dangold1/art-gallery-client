import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import "./styles.css";
import { loadItems, loadCategories } from "../../apiClient/client";
import {
  itemsLoadedActionCreator,
  categoriesLoadedActionCreator
} from "./store/actions";

import GridLayout from "../../components/GridLayout/GridLayout";
import FiltersComponent from "../../components/FilterComponet/FilterComponet";
import { mapCategories } from "../../services/category.service";

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    };
  }

  componentDidMount() {
    // TODO: We need to load the category list!

    loadItems()
      .then(this.props.onItemsLoaded)
      .catch((err) => {
        // TODO: how do we make sure the user knows there is an error?
        this.openAlert(err);
        // TODO: Can we allow manual retries by the user?
        console.error(err.message);
      });

    loadCategories()
      .then(this.props.onCategoriesLoaded)
      .catch((err) => {
        // TODO: how do we make sure the user knows there is an error?
        this.openAlert(err);
        // TODO: Can we allow manual retries by the user?
        console.error(err.message);
      });
  }

  openAlert = (err) => {
    this.setState({ alert: err });
  };

  filterItems = () => {
    const { items, selectedCategory } = this.props;
    const { main, sub } = selectedCategory;
    return items.filter((item) => {
      const categories = mapCategories(item.categories);
      if (main === "All") return true;
      return categories?.[main]?.find((subC) => subC === sub);
    });
  };

  render() {
    const { alert } = this.state;
    const filterItems = this.filterItems();

    return (
      <div className="Lobby">
        {alert && (
          <div className="alert">
            <strong>{alert.message}, Please try again later.</strong>
          </div>
        )}
        {!alert && (
          <Fragment>
            <h2>The Items Lobby</h2>
            <h3>Categories</h3>
            <FiltersComponent />
            <h3>Items</h3>
            <GridLayout items={filterItems} />
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ lobby: { items, selectedCategory } }) => ({
  items,
  selectedCategory
});

const mapDispatchtoProps = {
  onItemsLoaded: itemsLoadedActionCreator,
  onCategoriesLoaded: categoriesLoadedActionCreator
};

export default connect(mapStateToProps, mapDispatchtoProps)(Lobby);
