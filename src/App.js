import './App.css';
import TableMain from './components/tableMain';
import Container from 'react-bootstrap/Container';
import React from 'react';

function App() {
  return (
    <Container>
      <header>Overwatch League Playersheet</header>
      <TableMain />
    </Container>
  );
}

export default App;
