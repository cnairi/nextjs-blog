import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/components/Home/Presentation.scss';

const Presentation = ({ history }) => {
  return (
    <div className="presentation__container">
        <h2 className="presentation__title"><i>about.</i></h2>
        <p className="presentation__text">
            <span className="presentation__text-highlight">Vegan </span> for a few years now, I love cooking but I’ve been kind of scared at first when I saw sOoOoOo much ingredients in vegan recipes.
        </p>
        <p className="presentation__text">
            That’s why I’ve started trying <span className="presentation__text-highlight">easy and simple</span> recipes, with  <span className="presentation__text-highlight">everyday life</span> products that you can find at the grocery store.
        </p>
        <p className="presentation__text">
            20 pounds later (lmao, I love food a little bit too much), I’ve decided to rethink my way of eating, with the help of the Weight Watchers program (yeah yeah, I was thinking too that it was an old ladies program).
        </p>
        <p className="presentation__text">
            Wasn’t easy at the beginning, since I was used to eat too much, too fat and too sweet. Soooo, I’ve decided to share <span className="presentation__text-highlight">vegan AND healthy AND delicious</span> recipes.
        </p>
        <p className="presentation__text">
            I have a full-time job and not much time to cook. Also, you will only find here recipes inspired by other people, and I will always publish the link to the original recipe so you can discover other nice cooking websites. It is not about beautiful and distinguised setups, but all about <span className="presentation__text-highlight">good and simple</span> food that ANYONE can do at home after work. 
        </p>
    </div>
  );
}

export default Presentation;