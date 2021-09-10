import React from "react";
import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter>
      <Header />
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
      <Footer />
    </HashRouter>
  );
}

export default App;
