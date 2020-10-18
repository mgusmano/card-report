import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, useLocation, useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import queryString from 'query-string'

import './index.css';
import './menu.css';

import CardReport from './CardReport';
import CovidReport from './pages/covidreport/CovidReport';

import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
import Separator from './layout/Separator'

// import Toolbar from './main/Toolbar'
import Menu from './main/Menu'

console.log(window.location.search);
//=> '?foo=bar'

const parsed = queryString.parse(window.location.search);
console.log(parsed.report);
//=> {foo: 'bar'}



//var type = 'cardreport'
//var type = 'covidreport'
//var type = 'allreport'
var type = parsed.report
switch (type) {
  case 'card':
    ReactDOM.render(<CardReport />,document.getElementById('root'));
    break;
  case 'covid':
    ReactDOM.render(<CovidReport />,document.getElementById('root'));
    break;
  default:
    ReactDOM.render(
      <Router>
        <Vertical>
          {/* <Toolbar/> */}
          <Separator/>
          <Horizontal style={{width:'100%',background:'blue'}}>
            {/* <Menu/> */}
            <ul style={{paddingTop:'30px'}}>
              <li>
                <Link to="/">CardReport</Link>
              </li>
              <li>
                <Link className="xactive" to="/covidreport">Covid Report</Link>
              </li>
            </ul>
            <Splitter/>
            {/* <Center/> */}
            <Switch>
              <Route path="/" component={() => <CardReport/>} exact />
              <Route path="/covidreport" component={() => {return <CovidReport/>}} />
            </Switch>
            {/* center */}
            {/* <Splitter/>
            <Context/> */}
          </Horizontal>
          {/* <Splitter/>
          <div>footer</div> */}
        </Vertical>
      </Router>,
      document.getElementById('root'));
    break;
}









// ReactDOM.render(
//   <React.StrictMode>
//     <CardReport />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
