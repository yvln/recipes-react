import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import FormSearch from './containers/FormSearch';
import ListIngredients from './containers/ListIngredients';
import RecipesSearch from './containers/RecipesSearch';
import RecipesResults from './containers/RecipesResults';
import RecipesFavourites from './containers/RecipesFavourites';

import PageViewOne from './components/pages/PageViewOne';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <ul>
              <li><Link to="/">Look for a new recipe</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/favourites">Favourites</Link></li>
              <li><Link to="/recipe">One Recipe</Link></li>
          </ul>


         <Route exact path="/"
              render={() => (
                <div>
                  <FormSearch />
                  <ListIngredients />
                  <RecipesSearch />
                </div>
              )} />

         <Route exact path="/recipes"
                render={() => (
                  <RecipesResults />
                )} />

         <Route exact path="/favourites"
                render={() => (
                  <RecipesFavourites />
                )} />

         <Route exact path="/recipe"
                render={() => (
                  <PageViewOne />
                )} />

        </div>
      </Router>
    );
  }
}

export default App;
