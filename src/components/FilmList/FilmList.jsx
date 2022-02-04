import React from 'react';
import './FilmList.css';
export default function FilmList({ films }) {
  return (
    <>
      <div className="film-container">
        {films.map((item) => (
          <div className="film-card" key={item.id}>
            <h3 alt="filmTitle">{item.title}</h3>
            <p>released {item.release_date}</p>
            <img src={item.image} alt="cover-art" />
          </div>
        ))}
      </div>
    </>
  );
}
