import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './menu.css';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();


// import { Route, Switch, Link } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// import queryString from 'query-string'

// import { AuthContext } from "./context/auth";

// import PrivateRoute from './PrivateRoute';
// import Login from "./pages/login/Login";
// import Home from './pages/home/Home';
// import CardReport from './CardReport';
// import CovidReport from './pages/covidreport/CovidReport';
// import Dashboard from './pages/benchmarkreport/Dashboard';

// import Horizontal from './layout/Horizontal'
// import Vertical from './layout/Vertical'
// import Splitter from './layout/Splitter'
// import Separator from './layout/Separator'

// import Toolbar from './main/Toolbar'
//import Menu from './main/Menu'

//console.log(window.location.search);
//=> '?foo=bar'



// const parsed = queryString.parse(window.location.search);
// console.log('parsed',parsed);


//=> {foo: 'bar'}



//var type = 'cardreport'
//var type = 'covidreport'
//var type = 'allreport'


//var PartnerID; var PartnerName; var PersonID; var PartnerShort;
//var PartnerID = parsed.partnerid
//console.log(PartnerID)
// switch(PartnerID) {
//   case '434':
//     PartnerID = 434
//     PartnerShort = 'GMIsb'
//     PartnerName = 'General Mills';
//     PersonID = 281326;
//     break;
//   case '426':
//     PartnerID = 426
//     PartnerShort = 'GMI'
//     PartnerName = 'General Mills';
//     PersonID = 277356;
//     break;
//   case '395':
//     PartnerID = 395
//     PartnerShort = 'CNA'
//     PartnerName = 'CNA';
//     PersonID = 275399;
//     break;
//   default:
//     return (
//       <div>No partnerid or incorrect partnerid specified</div>
//     )
// }

// PartnerID = 395
// PartnerShort = 'CNA'
// PartnerName = 'CNA';
// PersonID = 275399;

// var PartnerCNA = {
//   PartnerID: 395,
//   PartnerShort: 'CNA',
//   PartnerName: 'CNA',
//   PersonID: 275399,
//   GroupID: 33582,
//   ratingsources: '4' //ManagerRating
// }


// var PartnerGMIsb = {
//   PartnerID: 434,
//   PartnerShort: 'GMIsb',
//   PartnerName: 'General Mills',
//   PersonID: 281326,
//   GroupID: 33931,
//   ratingsources: '1000' //SelfRating
// }




// var type = parsed.report
// switch (type) {
//   // case 'card':
//   //   ReactDOM.render(<CardReport PartnerID={PartnerID}/>,document.getElementById('root'));
//   //   break;
//   case 'covidcna':
//     ReactDOM.render(<CovidReport Partner={PartnerCNA}/>,document.getElementById('root'));
//     break;
//   case 'cardcna':
//     ReactDOM.render(<CardReport Partner={PartnerCNA} PartnerID='395'/>,document.getElementById('root'));
//       break;
//   case 'cardgmi':
//     ReactDOM.render(<CardReport Partner={PartnerGMIsb} PartnerID='434'/>,document.getElementById('root'));
//       break;
//     case 'benchmarkcna':
//       // PartnerID = 395
//       // PartnerShort = 'CNA'
//       // PartnerName = 'CNA';
//       // PersonID = 275399;
//       // var Partner = {
//       //   PartnerID: PartnerID,
//       //   PartnerShort: PartnerShort,
//       //   PartnerName: PartnerName,
//       //   PersonID: PersonID
//       // }
//       ReactDOM.render(<Dashboard Partner={PartnerCNA}/>,document.getElementById('root'));
//       break;
//   case 'benchmarkgmi':
//     // PartnerID = 434
//     // PartnerShort = 'GMIsb'
//     // PartnerName = 'General Mills';
//     // PersonID = 277356;
//     // var Partner = {
//     //   PartnerID: PartnerID,
//     //   PartnerShort: PartnerShort,
//     //   PartnerName: PartnerName,
//     //   PersonID: PersonID
//     // }
//     ReactDOM.render(<Dashboard Partner={PartnerGMIsb}/>,document.getElementById('root'));
//     break;
//   default:
//     ReactDOM.render(
//       <App/>,
//       // <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
//       // <Router>
//       //   <Vertical>
//       //     {/* <Toolbar/> */}
//       //     <Separator/>
//       //     <Horizontal style={{width:'100%',background:'blue'}}>
//       //       {/* <Menu/> */}
//       //       <span style={{xwidth:'500px',height:'100%',background:'#f1f1f1'}}>
//       //       <ul style={{paddingTop:'30px'}}>
//       //         <li><Link to="/">Home</Link></li>
//       //         <li><Link to="/cardcna">Card CNA</Link></li>
//       //         <li><Link to="/cardgmi">Card GMI</Link></li>
//       //         <li><Link to="/benchmarkcna">Benchmark CNA</Link></li>
//       //         <li><Link to="/benchmarkgmisb">Benchmark GMIsb</Link></li>
//       //         <li><Link to="/covidcna">Covid CNA</Link></li>
//       //       </ul>
//       //       </span>
//       //       <Splitter/>
//       //       {/* <Center/> */}
//       //       <Switch>
//       //         <Route path="/" component={() => <Home/>} exact />
//       //         <PrivateRoute path="/cardcna" component={() => <CardReport Partner={PartnerCNA} PartnerID='395'/>} />
//       //         <Route path="/cardgmi" component={() => <CardReport Partner={PartnerGMIsb} PartnerID='434'/>} />
//       //         <Route path="/benchmarkcna" component={() => <Dashboard Partner={PartnerCNA}/>}  />
//       //         <Route path="/benchmarkgmisb" component={() => <Dashboard Partner={PartnerGMIsb}/>}  />
//       //         <Route path="/covidcna" component={() => <CovidReport Partner={PartnerCNA}/>} />
//       //         <Route path="/login" component={() => <Login Partner={PartnerCNA}/>} />
//       //       </Switch>
//       //       {/* center */}
//       //       {/* <Splitter/>
//       //       <Context/> */}
//       //     </Horizontal>
//       //     {/* <Splitter/>
//       //     <div>footer</div> */}
//       //   </Vertical>
//       // </Router>
//       // </AuthContext.Provider>,
//       document.getElementById('root'));
//     break;
// }









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
