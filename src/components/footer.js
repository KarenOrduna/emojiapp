import React from 'react';
import './footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer-div'>
      <h1>Copyright {currentYear}</h1>
    </div>
  );
};

export default Footer;
