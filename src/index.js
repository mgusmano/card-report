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
console.log(parsed);
//=> {foo: 'bar'}



//var type = 'cardreport'
//var type = 'covidreport'
//var type = 'allreport'
var type = parsed.report
var PartnerID = parsed.partnerid
console.log(PartnerID)
switch (type) {
  case 'card':
    ReactDOM.render(<CardReport PartnerID={PartnerID}/>,document.getElementById('root'));
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
            <span style={{xwidth:'100%',height:'100%'}}>
            <ul style={{paddingTop:'30px'}}>
              <li>
                <Link to="/">Covid Report</Link>
              </li>
              <li>
                <Link to="/cardreportcna">CardReport CNA</Link>
              </li>
              <li>
                <Link to="/cardreportgmi">CardReport GMI</Link>
              </li>
            </ul>
            </span>
            <Splitter/>
            {/* <Center/> */}
            <Switch>
              <Route path="/" component={() => <CovidReport PartnerID={PartnerID}/>} exact />
              <Route path="/cardreportcna" component={() => <CardReport PartnerID='395'/>}  />
              <Route path="/cardreportgmi" component={() => <CardReport PartnerID='434'/>}  />
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
