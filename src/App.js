import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import FormSearch from './containers/FormSearch';
import ListIngredients from './containers/ListIngredients';
import RecipesSearch from './containers/RecipesSearch';
import PageRecipesResults from './components/pages/PageRecipesResults';
import PageFavourites from './components/pages/PageFavourites';

import PageViewOne from './components/pages/PageViewOne';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>

          <h1 className='App-title'>Recipes</h1>

          <div className='Nav'>
              <Link className='NavLinks' to='/'>Look for a new recipe</Link>
              <Link className='NavLinks' to='/recipes'>Recipes</Link>
              <Link className='NavLinks' to='/favourites'>Favourites</Link>
              <Link className='NavLinks' to='/create'>Create your recipe</Link>
          </div>


         <Route exact path='/'
              render={() => (
                <div className="FormView">
                  <FormSearch />
                  <ListIngredients />
                  <RecipesSearch />
                </div>
              )} />

         <Route exact path='/recipes'
                render={() => (
                  <PageRecipesResults />
                )} />

         <Route exact path='/favourites'
                render={() => (
                  <PageFavourites />
                )} />

         <Route exact path='/recipe/:id'
                render={(props) => (
                  <PageViewOne {...props} />
                )} />
        </div>
      </Router>
    );
  }
}

export default App;
