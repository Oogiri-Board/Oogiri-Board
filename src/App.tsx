import React from 'react';
import './assets/style.css';
import Router from './Router';
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Router />
      </main>
    </>
  );
}

export default App;
