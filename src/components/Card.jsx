import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({ img, lang, fcolor, scolor }) => {
  return (
    <div
      className='card'
      style={{ background: `linear-gradient(to left, ${fcolor}, ${scolor})` }}
    >
      <img src={img} alt='lang.svg' />
      <h3>{lang}</h3>
    </div>
  );
};

Card.propTypes = {
  lang: PropTypes.string,
  img: PropTypes.string,
  fcolor: PropTypes.string,
  scolor: PropTypes.string,
};
