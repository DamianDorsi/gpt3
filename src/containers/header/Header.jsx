import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Construyamos algo fantastico con <br/> GPT-3 IA abierta</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio orci, dapibus ut nulla eget, euismod bibendum felis. Donec elementum lorem ex, vel rhoncus elit malesuada vel. Fusce consequat diam.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Direccion de mail" />
        <button type="button">Comenzar!</button>
      </div>

      <div className="gpt3__header-content__people">
        <img alt="people icons" src={people} />
        <p>1,600 personas nos visitan diariamente</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img alt="header img" src={ai} />
    </div>
  </div>
);

export default Header;
