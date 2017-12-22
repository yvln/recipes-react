import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

// import './PageSearchByIngredient.css';

import Title from '../elements/Title';
import Form from '../elements/Form';
import ViewListIngredients from '../views/ViewListIngredients';

class PageSearchByIngredient extends Component {
  render() {
    const { addToListIngredient, listIngredient } = this.props;
    return (
      <div className="PageSearchByIngredient">
          <Form
            addToListIngredient={addToListIngredient} />
          <ViewListIngredients
            listIngredient={listIngredient} />
      </div>
    );
  }
}

PageSearchByIngredient.propTypes = {
  addToListIngredient: PropTypes.func.isRequired,
  listIngredient: PropTypes.array.isRequired,
};

export default PageSearchByIngredient;
