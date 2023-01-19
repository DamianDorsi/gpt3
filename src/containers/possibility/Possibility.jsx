import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicite acceso anticipado para comenzar</h4>
      <h1 className="gradient__text">Las posibilidades están <br /> más allá de tu imaginación</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio orci, dapibus ut nulla eget, euismod bibendum felis. Donec elementum lorem ex, vel rhoncus elit malesuada vel. Fusce consequat diam.</p>
      <h4>Solicite acceso anticipado para comenzar</h4>
    </div>
  </div>
);

export default Possibility;
