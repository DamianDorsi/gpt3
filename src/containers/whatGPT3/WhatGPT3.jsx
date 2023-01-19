import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Que es GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus, ante efficitur iaculis varius, augue mauris hendrerit nisl, et eleifend metus lorem in quam. Curabitur a sapien euismod, molestie purus tempus, condimentum nibh. dolor sit amet, consectetur" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Las posibilidades están más allá de tu imaginación</h1>
      <p>Explora nuestras noticias</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Curabitur rhoncus, ante efficitur iaculis varius augue mauris." />
      <Feature title="Base de Datos" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus, ante efficitur iaculis varius dolor sit" />
      <Feature title="Educacion" text="Nam imperdiet quam a fringilla ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, pe" />
    </div>
  </div>
);

export default WhatGPT3;
