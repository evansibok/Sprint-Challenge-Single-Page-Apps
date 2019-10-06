import React from "react";

export default function SearchForm() {

  const changeHandler = e => {
    setSearchValue(e.target.value)
    console.log(e.target.value)
  }

 
  return (
    <section className="search-form">
      <input className="newStyle" type="search" placeholder="Search..." onChange={e => changeHandler(e)}/>
    </section>
  );
}
