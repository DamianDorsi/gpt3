import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">¿Quieres dar un paso hacia el futuro antes que los demás?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar acceso anticipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>Buenos Aires, Argentina <br /> Todos los derechos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Sitios</p>
        <p>Redes Sociales</p>
        <p>Nosotros</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Terminos y Condiciones </p>
        <p>Politica de Privacidad</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Datos Personales</h4>
        <p>Buenos Aires, Argentina</p>
        <p>1137738387</p>
        <p>damian.dorsi@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022. Todos los Derechos Reservados.</p>
    </div>
  </div>
);

export default Footer;
