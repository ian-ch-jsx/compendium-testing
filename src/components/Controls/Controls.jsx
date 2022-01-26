import React from 'react';

export default function Controls({ order, setOrder }) {
  return (
    <span>
      <label htmlFor="release-date">Release Date: </label>
      <select name="order" value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">oldest</option>
        <option value="desc">newest</option>
      </select>
    </span>
  );
}
