import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="container">
          {/* <Route path="/product" component={Product}/>
          <Route exact path="/" component={ProductList}/> */}
          <div className="row">
            {this.showContentMenus(routes)}
          </div>
        </div>
      </Router>
    )
  }
  showContentMenus = (routes) => {
    var result = null;
    result = routes.map((route, index) => {
      return <Route
        key={index}
        path={route.path}
        component={route.main}
        exact={route.exact}
      />
    })
    return <Switch>{result}</Switch>
  }
}




export default App;
