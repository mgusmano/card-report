import React from 'react'
import { useGlobalState } from '../globalstate/GlobalStateProvider';
import { useHistory } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
//import { Link } from 'react-router-dom';

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

const Nav = (props) => {
  //const [{selectedIndex}, dispatch] = useGlobalState();
  //const { handleListItemClick, handleRouteClick } = props;
  const history = useHistory();

  const handleRouteClick = (which, index) => {
    history.push("/" + which);
    //dispatch({type: 'selectedIndex', payload: index});
  };


  const handleListItemClick = (fileName, index) => {
    // if (!isAuthenticated && index !== 0) {
    //   setShowSnackBar(true);
    //   return
    // }
    history.push('/');
    dispatch({type: 'selectedIndex', payload: index});
    // axios
    // .get('assets/data/' + fileName + '.json')
    //   .then(({ data }) => {
    //     dispatch({type: 'layout', payload: data});
    //     // dispatch({type: 'NEW_LAYOUT', payload: {
    //     //   selectedIndex: index,
    //     //   layout: layout
    //     // }});
    //   })
  };

  var selectedIndex = 1
  return (
    <div style={{flex:'auto'}}>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">


        {/* <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick('layout', 0)}
        >
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="All Widgets" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick('layout1', 1)}
        >
          <ListItemIcon style={{color:'white'}}><DraftsIcon /></ListItemIcon>
          <ListItemText primary="Sencha Grid" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick('layout2', 2)}
        >
          <ListItemIcon><DraftsIcon /></ListItemIcon>
          <ListItemText primary="FusionChart" ></ListItemText>
        </ListItem> */}

        {/* <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleRouteClick('shop', 3)}
        >
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Shop" ></ListItemText>
        </ListItem> */}


        {/* <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleRouteClick('about', 4)}
        >
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="About" ></ListItemText>
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleRouteClick('dashboard', 5)}
        >
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Dashboard" ></ListItemText>
        </ListItem> */}

        <ListItem button selected={selectedIndex === 5} onClick={(event) => handleRouteClick('floorplan', 5)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Floorplan" ></ListItemText>
        </ListItem>

        <ListItem button selected={selectedIndex === 5} onClick={(event) => handleRouteClick('cardreport', 5)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Card Report" ></ListItemText>
        </ListItem>

        <ListItem button selected={selectedIndex === 5} onClick={(event) => handleRouteClick('cardmap', 5)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Card Report" ></ListItemText>
        </ListItem>


        <ListItem button selected={selectedIndex === 5} onClick={(event) => handleRouteClick('', 5)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Skills" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Goals" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="PDP" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Tasks" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Certs" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Library" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Team" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Safe Return" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Survey" ></ListItemText>
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleRouteClick('about', 4)}>
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Site Map" ></ListItemText>
        </ListItem>

        {/* <ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleRouteClick('gridlayout', 6)}
        >
          <ListItemIcon><DraftsIcon/></ListItemIcon>
          <ListItemText primary="Grid Layout" ></ListItemText>
        </ListItem> */}

      </List>

    </div>
  )
}

export default Nav
