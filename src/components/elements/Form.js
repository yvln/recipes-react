import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class Form extends Component {

  valueInput = '';

  handleChange = event => {
    this.valueInput = event.target.value;
  };

  render() {
    const { addToListIngredient } = this.props;
    return (
      <div className='Form'>
        <form id='new-ingredient'
              onSubmit={event => {
                event.preventDefault();
                event.target.reset();
                addToListIngredient(this.valueInput)}}>
          <input className='addIngredientInput' autoComplete='off' name='new-ingredient' type='text' onChange={this.handleChange} />
          <button className='addIngredientSubmit' type='submit'>ADD</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addToListIngredient: PropTypes.func.isRequired,
};

export default Form;
