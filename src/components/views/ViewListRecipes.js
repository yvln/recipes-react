import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ViewListRecipes.css';

import RecipeBox from '../elements/RecipeBox';
import NewSearchButton from '../buttons/NewSearchButton';

class ViewListRecipes extends Component {
  
  renderRecipeBox = () => {
    const { listResults, addToFavourite } = this.props;
    return listResults.map( (e, id) => {
      return <RecipeBox
        key={id}
        image_url={e.image_url}
        title={e.title}
        source_url={e.source_url}
        publisher={e.publisher}
        social_rank={e.social_rank}
        />
    })
  }
  
  render() {
    return (
      <div className='ViewListRecipes'>
        <div className='recipesBoxes'>{this.renderRecipeBox()}</div>
        <NewSearchButton />
      </div>
    );
  }
  
}

ViewListRecipes.propTypes = {
  listResults: PropTypes.array.isRequired,
  addToFavourite: PropTypes.func.isRequired,
};

export default ViewListRecipes;
