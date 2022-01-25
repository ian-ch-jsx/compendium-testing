import React from 'react';

export default function Controls({ order, setOrder }) {
  return (
    <span>
      <label htmlFor="release-date">Release Date</label>
      <select name="order" value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </span>
  );
}
