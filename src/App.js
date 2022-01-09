import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import NavTop from './components/NavTop';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Merge from './pages/Merge';
import Split from './pages/Split';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <NavTop />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merge" element={<Merge />} />
          <Route path="/split" element={<Split />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
