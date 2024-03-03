import React from 'react';
import "./Course.css";
import {MultiActionAreaCard}  from "../../component/Card/MultiActionAreaCard";

export const Course = () => {
  return (
    <div>
    <div class='search'>
      <form onsubmit="event.preventDefault();" role= "search">
    <label for="search">Search for stuff</label>
    <input id="search" type="search" placeholder="Search..." autofocus required />
    <button type="submit">Go</button>     
  </form></div>
  <div>
        <MultiActionAreaCard />
      </div>
  </div>
  );
}
