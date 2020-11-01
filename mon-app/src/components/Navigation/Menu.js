import React    from 'react';

import '../../styles/components/Navigation/Menu.scss';

import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu-container'>
        <Link className='menu-item' to='/'>Home</Link>
        <Link className='menu-item' to='/about'>About</Link>
        <Link className='menu-item' to='/recipes'>Recipes</Link>
    </div>
  );
}

export default Menu;