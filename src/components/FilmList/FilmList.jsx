import React from 'react';
import './FilmList.css';
export default function FilmList({ films }) {
  return (
    <>
      <div className="film-container">
        {films.map((item) => (
          <div className="film-card" key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </>
  );
}