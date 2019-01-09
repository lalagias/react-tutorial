import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">about</Link>
    </header>
  )
}

// Styling
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px'
}

export default Header;
