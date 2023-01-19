import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Texto de ejemplo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lorem turpis. Cras sed justo fermentum, vehicula ex aliquet, iaculis.',
  },
  {
    title: 'Texto de ejemplo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lorem turpis. Cras sed justo fermentum, vehicula ex aliquet, iaculis.',
  },
  {
    title: 'Texto de ejemplo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lorem turpis. Cras sed justo fermentum, vehicula ex aliquet, iaculis.',
  },
  {
    title: 'Texto de ejemplo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lorem turpis. Cras sed justo fermentum, vehicula ex aliquet, iaculis.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">El futuro es ahora y solo necesitas darte cuenta. Da un paso hacia el futuro hoy. & Haz que suceda.</h1>
      <p>Solicite acceso anticipado para comenzar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
