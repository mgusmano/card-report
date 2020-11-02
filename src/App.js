import React, { useState } from 'react';

import { Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import queryString from 'query-string'

import { AuthContext } from "./context/auth";
import { useAuth } from "./context/auth";

import PrivateRoute from './PrivateRoute';
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Home from './pages/home/Home';
import CardReport from './CardReport';
import CovidReport from './pages/covidreport/CovidReport';
import Dashboard from './pages/benchmarkreport/Dashboard';

import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
import Separator from './layout/Separator'


var PartnerCNA = {
  PartnerID: 395,
  PartnerShort: 'CNA',
  PartnerName: 'CNA',
  PersonID: 275399,
  GroupID: 33582,
  ratingsources: '4' //ManagerRating
}


var PartnerGMIsb = {
  PartnerID: 434,
  PartnerShort: 'GMIsb',
  PartnerName: 'General Mills',
  PersonID: 281326,
  GroupID: 33931,
  ratingsources: '1000' //SelfRating
}

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  //const { authTokens } = useAuth();
  console.log(authTokens)

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <Vertical>
        {/* <Toolbar/> */}
        <Separator/>
        <Horizontal style={{width:'100%',background:'blue'}}>
          {/* <Menu/> */}
          <span style={{xwidth:'500px',height:'100%',background:'#f1f1f1'}}>
          <ul style={{paddingTop:'30px'}}>
            <li><Link to="/">Home</Link></li>

{authTokens === 'cna' &&
            <>
            <li><Link to="/cardcna">Card CNA</Link></li>
            <li><Link to="/benchmarkcna">Benchmark CNA</Link></li>
            <li><Link to="/covidcna">Covid CNA</Link></li>
            </>
}
{authTokens === 'gmi' &&
            <>
            <li><Link to="/cardgmi">Card GMI</Link></li>
            <li><Link to="/benchmarkgmisb">Benchmark GMIsb</Link></li>
            </>
}
            <li><Link to="/admin">Admin</Link></li>
          </ul>
          </span>
          <Splitter/>
          {/* <Center/> */}
          <Switch>
            <Route path="/" component={() => <Home/>} exact />
            <PrivateRoute path="/cardcna" component={() => <CardReport Partner={PartnerCNA} PartnerID='395'/>} />
            <PrivateRoute path="/cardgmi" component={() => <CardReport Partner={PartnerGMIsb} PartnerID='434'/>} />
            <PrivateRoute path="/benchmarkcna" component={() => <Dashboard Partner={PartnerCNA}/>}  />
            <PrivateRoute path="/benchmarkgmisb" component={() => <Dashboard Partner={PartnerGMIsb}/>}  />
            <PrivateRoute path="/covidcna" component={() => <CovidReport Partner={PartnerCNA}/>} />
            <PrivateRoute path="/loginx" component={() => <Login Partner={PartnerCNA}/>} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
          </Switch>
          {/* center */}
          {/* <Splitter/>
          <Context/> */}
        </Horizontal>
        {/* <Splitter/>
        <div>footer</div> */}
      </Vertical>
    </Router>
    </AuthContext.Provider>





  );
}

export default App;
