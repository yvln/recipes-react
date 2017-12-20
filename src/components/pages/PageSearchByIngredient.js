import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import './PageSearchByIngredient.css';
import Title from '../elements/Title';
import Form from '../elements/Form';
import ViewListIngredients from '../views/ViewListIngredients';

class PageSearchByIngredient extends Component {
  render() {
    return (
      <div className="PageSearchByIngredient">
          this is the PAGE SEARCH BY INGREDIENT
          <Title 
            title='Looking for a recipe'/>
          <Form />
          <ViewListIngredients />
      </div>
    );
  }
}

export default PageSearchByIngredient;
