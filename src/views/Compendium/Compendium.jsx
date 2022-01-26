import React from 'react';
import { useState, useEffect } from 'react';
import FilmList from '../../components/FilmList/FilmList';
import Controls from '../../components/Controls/Controls';
import { filmDesc, getFilms } from '../../services/data';

export default function Compendium() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (order === 'desc') {
        data = await filmDesc();
      } else {
        data = await getFilms();
      }
      setFilms(data);
      setLoading(false);
    };
    fetchData();
  }, [order]);

  if (loading) return <h1>loading...</h1>;
  return (
    <div>
      <Controls order={order} setOrder={setOrder} />
      <FilmList films={films} setFilms={setFilms} order={order} />
    </div>
  );
}
