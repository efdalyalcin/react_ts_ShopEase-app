import React from 'react';

import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
  return (
    <header className="header">
      <div>Brand</div>
      <SearchBar />
      <div>COntrols</div>
    </header>
  );
}
