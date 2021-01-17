import React from 'react'
import './App'
import Counter from './CustomHooks/Counter';
import Section1 from './CustomHooks/Section1';
import TypingGame from './SpeedType/TypingGame';
import TodoList from './TodoList/TodoList';
import ThemeSwitcher from './UseContext/ThemeSwitcher';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './RouterChallenge/Home';
import About from './ReactRouter/About';
import Login from './ReactRouter/Login';
import Profile from './ReactRouter/Profile/Profile';
import Info from './ReactRouter/Profile/Info'
import Settings from './ReactRouter/Profile/Settings'
import Header from './ReactRouter/components/Header'
import ServiceList from './Services/ServiceList';
import ServiceDetail from './Services/ServiceDetail';
import { Redirect } from 'react-router-dom'
import Products from './RouterChallenge/Products';
import ProductDetails from './RouterChallenge/ProductDetails';


function App() {

  const NAME = "Karl"

  return (
    <div>
      {/* <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch> */}

      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
