import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import './PageViewOne.css';
import Title from '../elements/Title';
import ViewOneRecipe from '../views/ViewOneRecipe';
import NewSearchButton from '../buttons/NewSearchButton';

class PageViewOne extends Component {
  render() {
    return (
      <div className="PageViewOne">
          this is the PAGE VIEW ONE
          <Title 
            title='Recipe'/>
          <ViewOneRecipe />
          <NewSearchButton />
      </div>
    );
  }
}

export default PageViewOne;