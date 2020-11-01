import React  from 'react';
import '../../styles/components/Navigation/Header.scss';

import generic from '../../assets/json/generic.json';

import Menu from './Menu';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__main-title'>{generic.name}</h1>
        </header>
    );
}

export default Header;