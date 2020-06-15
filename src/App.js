import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "../src/pages/home/homepage.component";
import ShopPage from "../src/components/shop/shop.component.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
