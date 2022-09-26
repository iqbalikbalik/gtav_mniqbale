import React from 'react';
import { useNavigate } from "react-router-dom";
import { RiSearch2Line, RiSkull2Fill } from "react-icons/ri";


const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useNavigate;
  const onSubmit = (e) => {
    // history.push(`?s=${searchQuery}`);
    history.push(`${searchQuery}`);
    e.preventDefault();
  };

  return (
    <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <div className="eyefind__header-bottom_input">
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search Eyefind"
          name="s"
        />
        <RiSearch2Line />
      </div>
      <div className="eyefind__header-bottom_button">
          <button type="submit">
            <p>Random</p>
            <RiSkull2Fill />
          </button>
        </div>
    </form>
  );
};

export default SearchBar;
