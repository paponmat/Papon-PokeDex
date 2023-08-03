import React from "react";

const SearchBox = ( { searchChange } ) => {
    return (
        <div className="pa2">
            <input 
                className="tc pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search Pokémon"
                onChange={searchChange}
            />
            <br/>
            <p id='searchBoxText'>Search by name or Poké ID</p>
        </div>
        
    );
}

export default SearchBox;