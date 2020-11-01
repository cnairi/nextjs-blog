import React, { useState, useEffect, useRef } from 'react';
import { Parallax, Background }               from "react-parallax";
import { Link }                               from 'react-router-dom';

import '../../styles/components/Home/Intro.scss';

const Intro = ({ history }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMounted, setIfMounted] = useState(false);

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    setWindowHeight(window.innerHeight - 200);
    setIfMounted(true);
  });

  return (
    <div className={"intro__container"} style={{height: windowHeight + 'px'}}>
        <div className="intro__content">
          
          <div className={`intro__left-column ${isMounted && 'visible'}`}>

            <div className="intro__left-column-img-container">
              {/* <img src="/images/home/web_1.jpg"/> */}
              <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage="/images/home/web_1.jpg"
                bgImageAlt="the dog"
                strength={150}
              >
                {/* Blur transition from min to max */}
                <div className="test" />
              </Parallax>
            </div>

            <div className="intro__left-column-txt-container">
              <h2 className="intro__title"><i>home.</i></h2>
              <p>vegan.</p>
              <p>everyday life.</p>
              <p>simple.</p>
              <p>food.</p>
            </div>

          </div>

          <div className={`intro__middle-column ${isMounted && 'visible'}`}>
            <img src="/images/home/web_2.png"/>
          </div>
            
          <div className={`intro__right-column ${isMounted && 'visible'}`}>
            {/* <div className="intro__right-column-img-container"> */}
              {/* <img src="/images/home/web_3.jpg"/> */}
              <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage="/images/home/web_3.jpg"
                bgImageAlt="the dog"
                strength={-150}
                className="new"
                bgClassName="newtest"
              >
                {/* Blur transition from min to max */}
                <div className="test" />
              </Parallax>
            {/* </div> */}
          </div>
        </div>
    </div>
    // <div style={{width: '50%'}}>
    //   <Parallax
    //     blur={{ min: -15, max: 15 }}
    //     bgImage="/images/home/web_1.jpg"
    //     bgImageAlt="the dog"
    //     strength={600}
    // >
    //   {/* Blur transition from min to max */}
    //   <div style={{height: windowHeight + 'px'}} />
    // </Parallax>
    // </div>
  );
}

export default Intro;