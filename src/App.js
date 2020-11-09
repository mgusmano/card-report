import React, { useState } from 'react';

import Top from './Top';
import Header from './Header';

import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import SideMenu from 'react-sidemenu';

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

import './side-menu.css'



var PartnerCNA = {
  PartnerID: 395,
  PartnerShort: 'CNA',
  PartnerName: 'CNA',
  PersonID: 275399,
  GroupID: 33582,
  showratings: false,
  ratingsources: '4' //ManagerRating
}


var PartnerGMIsb = {
  PartnerID: 434,
  PartnerShort: 'GMIsb',
  PartnerName: 'General Mills',
  PersonID: 281326,
  GroupID: 33931,
  showratings: true,
  ratingsources: '1000' //SelfRating
}

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  const [activemenu, setActivemenu] = useState('/');

  const items = [
    {label: 'Logout', value: '/admin', icon: 'fa-anchor'}


    // {label: 'item 1', value: 'item1', icon: 'fa-search',
    // children: [
    //   {divider: true, label: 'Main navigation', value: 'main-nav'},
    // ]
    // },
  ];

  switch (authTokens) {
    case 'cnasme':
      items.push({label: 'Risk Control SME', value: '/cardcnasme', icon: 'fa-anchor'})
      //setActivemenu('/cardcnasme')
      break;
    case 'cna':
      items.push({label: 'Card Report - CNA', value: '/cardcna', icon: 'fa-anchor'})
      items.push({label: 'Benchmark - CNA', value: '/benchmarkcna', icon: 'fa-anchor'})
      items.push({label: 'Covid - CNA', value: '/covidcna', icon: 'fa-anchor'})
      //setActivemenu('/cardcna')
      break;
    case 'gmi':
      items.push({label: 'Card Report - GMI', value: '/cardgmi', icon: 'fa-anchor'})
      items.push({label: 'Benchmark - GMI', value: '/benchmarkgmi', icon: 'fa-anchor'})
      //setActivemenu('/cardgmi')
      break;
    default:
      break;
  }



  const history = useHistory();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  const onMenuItemClick = (value) => {
    //alert("You just clicked me:" + value)
    //let history = useHistory();
    history.push(value);
  }

  //const { authTokens } = useAuth();
  //console.log(authTokens)

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>

      <Vertical>
        <Top/>
        <Header/>
        {/* <Separator/> */}
        <Horizontal style={{width:'100%',background:'blue'}}>
          {/* <Menu/> */}

<Vertical style={{height:'100%',background:'black'}}>

<div style={{height:'50px'}}></div>




          <SideMenu
            items={items}
            onMenuItemClick={onMenuItemClick}
            activeItem={'/card'+authTokens}
          />

</Vertical>
          <Splitter/>
          {/* <Center/> */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/login" default component={Login} />
            {/* <Route path="/" component={() => <Home/>} exact /> */}
            <PrivateRoute path="/cardcnasme" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' SMEOnly={true} showlob={false}/>} />
            <PrivateRoute path="/cardcna" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' showlob={true}/>} />
            <PrivateRoute path="/cardgmi" component={() => <CardReport Partner={PartnerGMIsb} PartnerID='434' showlob={false}/>} />
            <PrivateRoute path="/benchmarkcna" component={() => <Dashboard Partner={PartnerCNA}/>}  />
            <PrivateRoute path="/benchmarkgmisb" component={() => <Dashboard Partner={PartnerGMIsb}/>}  />
            <PrivateRoute path="/covidcna" component={() => <CovidReport Partner={PartnerCNA}/>} />
            <PrivateRoute path="/loginx" component={() => <Login Partner={PartnerCNA}/>} />
            <PrivateRoute path="/admin" component={Admin} />

          </Switch>


          {/* center */}
          {/* <Splitter/>
          <Context/> */}
        </Horizontal>








        {/* <Splitter/>
        <div>footer</div> */}
      </Vertical>

    </AuthContext.Provider>





  );
}

export default App;



// {/* <span style={{xwidth:'500px',height:'100%',background:'#f1f1f1'}}>
// <ul style={{paddingTop:'30px'}}>
//   {/* <li><Link to="/">Home</Link></li> */}

// {authTokens === 'cnasme' &&
//   <>
//   <li><Link to="/cardcnasme">Risk Control SME</Link></li>
//   </>
// }

// {authTokens === 'cna' &&
//   <>
//   <li><Link to="/cardcna">Card CNA</Link></li>
//   <li><Link to="/benchmarkcna">Benchmark CNA</Link></li>
//   <li><Link to="/covidcna">Covid CNA</Link></li>
//   </>
// }
// {authTokens === 'gmi' &&
//   <>
//   <li><Link to="/cardgmi">Card GMI</Link></li>
//   <li><Link to="/benchmarkgmisb">Benchmark GMIsb</Link></li>
//   </>
// }
//   <li><Link to="/admin">Logout</Link></li>
// </ul>
// </span> */}
