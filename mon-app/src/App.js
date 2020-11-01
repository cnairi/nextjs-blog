import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home    from './components/Index';
import About   from './components/About';
import Header  from './components/Navigation/Header';
import Recipe  from './components/Recipes/Recipe';
import Recipes from './components/Recipes';

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/recipes' exact component={Recipes} />
        <Route path='/recipe/:name' exact component={Recipe} />
        <Route path='/about' exact component={About} />
        <Route path='/' render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
