import './App.css';
import SampleNextArrow from './SampleNextArrow'
// import React, { Component } from "react";
// import Slider from "react-slick";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };
function App() {
  return (
    <div className="App">
        {/* <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
      <SampleNextArrow/>
    </div>
  );
}

export default App;
