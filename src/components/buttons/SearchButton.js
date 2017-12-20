import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// import "./SearchButton.css";

class SearchButton extends Component {
  render() {
    const { listIngredient, searchRecipes } = this.props;
    return (
      <div className="SearchButton">
        <button onClick={() => {searchRecipes(listIngredient)}}>
          <Link to="/recipes">
            SEARCH RECIPES FROM THIS LIST OF INGREDIENTS
          </Link>
        </button>
      </div>
    );
  }
}

SearchButton.propTypes = {
  listIngredient: PropTypes.array.isRequired,
  searchRecipes: PropTypes.func.isRequired,
};

export default SearchButton;
