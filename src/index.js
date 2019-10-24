import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';

// import css 
import './index.css';

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import redux store
import store from './store';

// import layout components
import Header from "./pages/layouts/Header";

// import pages
import ListPage from "./pages/views/ListPage";
import DetailPage from "./pages/views/DetailPage";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
      <Router history={hist}>
        <div className="container">
          <Header/>
          <Switch>
            <Route path='/' exact component={ListPage}/>
            <Route path='/detail/:taskId' exact component={DetailPage}/>
          </Switch>
        </div>
      </Router>
  </Provider>,  
  document.getElementById("root")
);
