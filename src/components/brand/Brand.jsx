import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img alt="google icon" src={google} />
    </div>
    <div>
      <img alt="slack icon" src={slack} />
    </div>
    <div>
      <img alt="atlassian icon" src={atlassian} />
    </div>
    <div>
      <img alt="dropbox icon" src={dropbox} />
    </div>
    <div>
      <img alt="shopify icon" src={shopify} />
    </div>
  </div>
);

export default Brand;
