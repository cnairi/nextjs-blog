// import React, { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import {TweenMax, Linear, TimelineMax} from 'gsap';
// import ReactDOM from 'react-dom';
// import {Konva, Layer, Rect as Test, Stage, Group} from 'react-konva';

// import '../../styles/components/Recipes.scss';

// const Recipes = () => {
  // const tl = useRef();
  // useEffect(() => {
    // tl.current = gsap.timeline({paused:true})

    // console.log("instantiating timeline")

    // TweenMax.set("#checkmarkIcon",{autoAlpha:0,  x: 500, scale: 0.7});
    // TweenMax.to("#checkmarkIcon", 3, {
    //   x: 500,
    //   scale: 0.8,
    //   ease: 'expo.out',
    //   duration: 0.5,
    //   autoAlpha:1,
    // });
//     var tl = new TimelineMax({repeat: -1,repeatDelay: 2});

// tl.to('#checkmarkIcon', 0.1, {skewX:70,ease: 'Power4.easeInOut'})
// .to('#checkmarkIcon', 0.04, {skewX:0,ease: 'Power4.easeInOut'})
// .to('#checkmarkIcon', 0.04, {opacity:0})
// .to('#checkmarkIcon', 0.04, {opacity:1})
// .to('#checkmarkIcon', 0.04, {x:-20})
// .to('#checkmarkIcon', 0.04, {x:0})
// .add("split", 0)
// .to('.top', 0.5, {x:-60,ease: 'Power4.easeInOut'},'split')
// .to('.bottom', 0.5, {x:60,ease: 'Power4.easeInOut'},'split')
// .to('#checkmarkIcon', 0.08, { className: '+=redShadow'},'split')

// .to('#txt', 0, { scale:1.1},'split')
// .to('#txt', 0, { scale:1}, "+=0.02")

// .to('#checkmarkIcon', 0.08, { className: '-=redShadow'}, "+=0.09")
// .to('#checkmarkIcon', 0.03,{ className: '+=greenShadow'},'split')
// .to('#checkmarkIcon', 0.03,{ className: '-=greenShadow'},"+=0.01")

// .to('.top', 0.2, {x:0,ease: 'Power4.easeInOut'})
// .to('.bottom', 0.2, {x:0,ease: 'Power4.easeInOut'})

// .to('#checkmarkIcon', 0.02, {scaleY:1.1,ease: "Power4.easeInOut"})
// .to('#checkmarkIcon', 0.04, {scaleY:1,ease: 'Power4.easeInOut'})
//   });
//   return (
//     <div className="images-wrapper">
//       {/* <div id='checkmarkIcon' style={{backgroundColor: 'red', height: '50px', width: '50px'}}></div> */}
//         {/* <img id='checkmarkIcon' src="/images/recipes/chili/IMG_0058.jpg" alt="picture 4" />  */}
//         {/* <img src="/images/recipes/pancakes/pancakes.jpg" alt="picture 1" /> 
//         <img src="/images/recipes/pies/IMG_0049.jpeg" alt="picture 2" /> 
//         <img src="/images/recipes/muffins/IMG_0044.jpg" alt="picture 3" />
//         <img src="/images/recipes/chili/IMG_0058.jpg" alt="picture 4" /> 
//         <img src="/images/recipes/pancakes/pancakes.jpg" alt="picture 1" /> 
//         <img src="/images/recipes/pies/IMG_0049.jpeg" alt="picture 2" /> 
//         <img src="/images/recipes/muffins/IMG_0044.jpg" alt="picture 3" />  */}
//         <div id='checkmarkIcon' style={{backgroundColor: 'red', width: '30%'}}>
//           <img style={{height: 'auto', width: '100%'}} src="/images/recipes/pancakes/pancakes.jpg" alt="picture 1" /> 
//         </div>
//     </div>
//   );
// }

// export default Recipes;

import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Star, Text } from 'react-konva';

class Test extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.scrollDiv = React.createRef();
    this.state = {
      top: 0,
      left: 0
    };
  }
  componentDidMount() {
    document.addEventListener('mousemove', (e) => {
      // this.setState({left: e.pageX, top: e.pageY});
      // window.scrollTo({
      //   top: e.pageY,
      //   left: e.pageX,
      //   behavior: 'smooth'
      // });
      this.scrollDiv.scrollY = e.pageY;
      this.scrollDiv.scrollX = e.pageX;
      // window.scrollY = e.pageY;
      // window.scrollX = e.pageX;
      // this.scrollDiv.scrollLeft = e.pageX;
      // this.scrollDiv.scrollTop = e.pageY;
      console.log('COUCOU LA SOURIS', e);
  });
  }
  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
  };

  render() {
    let {left, top} = this.state;
    return (
      <div ref={this.scrollDiv} style={{maxHeight: window.innerHeight - 200, maxWidth: window.innerWidth, overflow: 'scroll'}}
      onScroll={this.test}>
        <div ref={this.textInput} style={{height: 50, width: 50, backgroundColor: 'red', top: top, left: left, position: 'absolute'}}></div>
        <Stage width={window.innerWidth * 2} height={window.innerHeight}>
          <Layer>
            <Text text="Try to drag a star" />
            {[...Array(50)].map((_, i) => (
              <Star
                key={i}
                x={Math.random() * window.innerWidth * 2}
                y={Math.random() * window.innerHeight}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={Math.random() * 180}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Test;