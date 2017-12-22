import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ViewListIngredients.css';

import SearchButton from '../buttons/SearchButton';

class ViewListIngredients extends Component {

  renderListIngredient = () => {
    const { listIngredient, deleteFromListIngredient } = this.props;
    return listIngredient.map( (e,id) => {
      return <div className='oneIngredient' key={id}>{e}<span onClick={() => {deleteFromListIngredient(id)}} className='deleteIngredient'>x</span></div>
    })
  }

  render() {
    const { listIngredient } = this.props;
    return (
        <div className="ViewListIngredients">
        { listIngredient.length !== 0 &&
          <div className="ListIngredients">{this.renderListIngredient()}</div>
        }
        </div>
    );
  }
}

ViewListIngredients.propTypes = {
  listIngredient: PropTypes.array.isRequired,
  deleteFromListIngredient: PropTypes.func.isRequired,
};

export default ViewListIngredients;
