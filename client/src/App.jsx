import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import PetDetail from './Components/PetDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cards from './Components/Cards';

const App = () => {
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    axios.get(`/api/pets`).then(response => {
      const data = response.data;
      // console.log(data);
    });
  };
  return (
    <Router>
      <Nav />
      <Switch>
        {/* <Route path="/dogs">
          <Dogs />
        </Route>
        <Route path="/cats">
          <Cats />
        </Route>
        <Route path="/rabbits">
          <Rabbits />
        </Route>
        <Route path="/rodents">
          <Rodents />
        </Route>
        <Route path="/ferrets">
          <Ferrets />
        </Route>
        <Route path="/birds">
          <Birds />
        </Route>
        <Route path="/reptiles">
          <Reptiles />
        </Route>
        <Route path="/fish">
          <Fish />
        </Route> */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/adoptme">
          <Cards />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

// class App extends React.Component {
//   state = { serverMessage: '' };

//   render() {

export default App;
