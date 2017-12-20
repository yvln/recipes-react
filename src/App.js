import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import PageSearchByIngredient from './components/pages/PageSearchByIngredient';
import PageRecipesResults from './components/pages/PageRecipesResults';
import PageFavourites from './components/pages/PageFavourites';
import PageViewOne from './components/pages/PageViewOne';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        
         <Route path="/"
              render={() => (
                <PageSearchByIngredient /> 
              )} />
             
         <Route path="/recipes"
                render={() => (
                  <PageRecipesResults /> 
                )} />
               
         <Route path="/favourites"
                render={() => (
                  <PageFavourites /> 
                )} />
                
         <Route path="/recipe"
                render={() => (
                  <PageViewOne /> 
                )} />
        
        </div>
      </Router>
    );
  }
}

export default App;
