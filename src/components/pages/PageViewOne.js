import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './PageViewOne.css';

import Title from '../elements/Title';
import OneRecipeDetails from '../../containers/OneRecipeDetails';
import RedirectButton from '../buttons/RedirectButton';

class PageViewOne extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="PageViewOne">
          <Title
            title='Recipe'/>
          <OneRecipeDetails
            id={match.params.id} />
          <div className='buttonsViewOne'>
              <RedirectButton
                mode='gobackresults'
                text='GO BACK TO THE RESULTS' />
              <RedirectButton
                mode='newsearch'
                text='MAKE A NEW SEARCH' />
          </div>
      </div>
    );
  }
}

export default PageViewOne;
