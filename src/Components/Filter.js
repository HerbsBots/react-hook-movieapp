import React from 'react';

function Filter({ title, rate, onTitleChange, onRateChange }) {
  return (
    <div className="filter">
      <input type="text" value={title} onChange={onTitleChange} placeholder="Filter by title..." />
      <select value={rate} onChange={onRateChange}>
        <option value="">Filter by rating...</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
    </div>
  );
}

export default Filter;
