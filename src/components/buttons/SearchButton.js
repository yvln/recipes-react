import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './Button1.css';

class SearchButton extends Component {
  render() {
    const { listIngredient, searchRecipes } = this.props;
    return (
      <div className='Button1Container'>
        <Link to='/recipes'>
          <button className='Button1' onClick={() => {searchRecipes(listIngredient)}}>
            SEARCH RECIPES
          </button>
        </Link>
      </div>
    );
  }
}

SearchButton.propTypes = {
  listIngredient: PropTypes.array.isRequired,
  searchRecipes: PropTypes.func.isRequired,
};

export default SearchButton;
