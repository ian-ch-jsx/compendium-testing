import React from 'react';

export default function FilmList({ films }) {
  return (
    <>
      <h3>film list</h3>
      <div className="film-container">
        {films.map((item) => (
          <div className="film-card" key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
