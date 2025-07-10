import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppSection.css';

const WhatsAppSection = () => {
  return (
    <div className="whatsapp-wrapper">
      <a
        href="https://wa.me/155
 "
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        onMouseEnter={e => e.currentTarget.querySelector('.hover-text').style.display = 'inline'}
        onMouseLeave={e => e.currentTarget.querySelector('.hover-text').style.display = 'none'}
      >
        <FaWhatsapp size={40} />
       
        <span className="hover-text" style={{ display: 'none', marginLeft: 8 }}>
         Bize Mesaj Atın
        </span>
      </a>
    </div>
  );
};

export default WhatsAppSection;
