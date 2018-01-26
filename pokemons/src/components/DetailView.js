import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprites, type } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprites} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>ID: {id} {name}</h1>
        <p className="data-char">Type: {type}</p>
      </div>
    </section>
  )
}

export default DetailView;