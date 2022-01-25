import React from 'react';
import { useState, useEffect } from 'react';
import FilmList from '../../components/FilmList/FilmList';
import { getFilms } from '../../services/data';

export default function Compendium() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilms();
      setFilms(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <FilmList films={films} setFilms={setFilms} />
    </div>
  );
}
