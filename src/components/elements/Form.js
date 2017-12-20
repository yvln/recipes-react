import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './Form.css';

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
          <input autoComplete='off' name='new-ingredient' type='text' onChange={this.handleChange} />
          <input type='submit' value='Add to the list'/>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addToListIngredient: PropTypes.func.isRequired,
};

export default Form;
