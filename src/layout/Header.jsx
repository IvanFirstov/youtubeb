// // src/layout/Header.js
// import React from 'react';

// const Header = () => {
//   return (
//     <header className='header'>
//       <h1><a href="">YouTube</a></h1>
//     </header>
//   );
// };

// export default Header;

// src/layout/Header.js
import React from 'react';
import SearchBar from '../components/SearchBar';

const Header = ({ onSearchSubmit }) => {
  return (
    <header>
      <h1>YouTube </h1>
      <div className='search'>
      <SearchBar  onFormSubmit={onSearchSubmit} />
      </div>
    </header>
  );
};

export default Header;
