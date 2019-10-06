import React from "react";

export default function SearchForm({ placeholder, handleChange }) {
 
  return (
    <section className="search-form">
      <input 
      className="newStyle" 
      type="search" 
      placeholder={placeholder} 
      onChange={handleChange}
      />
    </section>
  );
}
