import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/BackDrop";


import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <NavBar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;