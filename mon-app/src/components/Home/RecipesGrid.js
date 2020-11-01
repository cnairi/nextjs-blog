import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/components/Home/Grid.scss';

const RecipesGrid = ({ history }) => {
  
  const onHover = (e) => {
    console.log('coucou les boys', e.target.id);
  }

  return (
    <div className="grid__container">
      <h2 className="grid__title"><i>recipes.</i></h2>
      <div className="grid__content">
        <div className="grid__content-left-col">
            <div className="grid__content-img-container">
              <img
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                id="4"
                src="/images/home/web_4.jpg"
              />
            </div>

            <div className="grid__content-img-container">
              <img src="/images/home/web_5.jpg"/>
            </div>

            <div className="grid__content-img-container">
              <img src="/images/home/web_6.jpg"/>
            </div>
          </div>

          <div className="grid__content-right-col">
            <div className="grid__content-img-container">
              <img src="/images/home/web_7.jpg"/>
            </div>

            <div className="grid__content-img-container">
              <img src="/images/home/web_8.jpg"/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default RecipesGrid;