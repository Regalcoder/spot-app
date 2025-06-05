// components/Header.jsx
import React from 'react';

function Header({ onCreateClick, onEditClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Spots App</h1>
        <div className="header-actions">
          <button onClick={onCreateClick} className="btn btn-primary">
            New Post
          </button>
          <button onClick={onEditClick} className="btn btn-secondary">
            Edit Post
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;