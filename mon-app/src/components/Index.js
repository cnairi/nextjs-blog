import React    from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Home/Index.scss';

import Intro        from './Home/Intro.js';
import Presentation from './Home/Presentation.js';
import RecipesGrid  from './Home/RecipesGrid.js';

const Home = ({ history }) => {
  return (
    <div className="home__container">
      <Intro />
      <RecipesGrid />
      <Presentation />
        {/* <p>Home</p>
        <Link to='/recipes'>Recipes</Link>
        <Link to='/about'>About</Link>
        <button
          onClick={() => {
            //api call
            // change to the about page
            history.push('/about')
          }}
        >
          click me to go to about
        </button> */}
    </div>
  );
}

export default Home;