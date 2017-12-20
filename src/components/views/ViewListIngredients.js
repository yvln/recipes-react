import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './ViewListIngredients.css';

import SearchButton from '../buttons/SearchButton';

class ViewListIngredients extends Component {
  
  renderListIngredient = () => {
    const { listIngredient } = this.props;
    return listIngredient.map( (e,id) => {
      return <li key={id}>{e}</li>
    })
  }
  
  render() {
    return (
      <div className="ViewListIngredients">
        <ul>{this.renderListIngredient()}</ul>
      </div>
    );
  }
  
}

ViewListIngredients.propTypes = {
  listIngredient: PropTypes.array.isRequired,
};

export default ViewListIngredients;
