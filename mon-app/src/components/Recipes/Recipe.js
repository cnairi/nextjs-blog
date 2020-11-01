import React from 'react';
import '../../styles/App.scss';

import data    from '../../assets/json/recipe.json';

const Recipe = ({ match }) => {
    console.log('match', match);
    return (
        <div className="container">
            <div className="content">
                <p>{data.recipes[0].name}</p>
                <p>{data.recipes[0].quantity}</p>
                <p>{data.recipes[0].duration}</p>
                {data.recipes[0].ingredients.map((ingredient, index) => {
                return (
                    <div key={index}>
                    <p>{ingredient.name} - {ingredient.quantity}</p>
                    </div>
                )
                })}
                {data.recipes[0].instructions.map((step, index) => {
                return (
                    <div key={index}>
                    <p>{step.text}</p>
                    </div>
                )
                })}
                <div className="recipe-image-container">
                <img className="recipe-image" src="/images/recipes/pancakes/pancakes.jpg"></img>
                </div>
            </div>
        </div>
    );
}

export default Recipe;