import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import './PageViewOne.css';
import Title from '../elements/Title';
import ViewListRecipes from '../views/ViewListRecipes';

class PageViewOne extends Component {
  render() {
    return (
      <div className="PageViewOne">
          this is PAGE VIEW ONE
          <Title 
            title='One Recipe'/>
          <ViewListRecipes />
      </div>
    );
  }
}

export default PageViewOne;
