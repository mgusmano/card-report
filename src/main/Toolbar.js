import React from 'react';
//import { useGlobalState } from '../globalstate/GlobalStateProvider';
import { useModal } from "react-modal-hook";
// import Util from '../../src/Util'

//import TestDialog from '../dialog/TestDialog'
import AddWidgetDialog from '../dialog/AddWidgetDialog'
import WidgetRecordDialog from '../dialog/WidgetRecordDialog'
import ImportDashboardDialog from '../dialog/ImportDashboardDialog'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Toolbar.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import Grid from '@material-ui/core/Grid';

const Toolbar = (props) => {
    //const [{userName,dashboardData,widgetData, widgets}, dispatch] = useGlobalState();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [showModalAddWidget, hideModalAddWidget] = useModal(({ in: open, onExited }) => (
      <AddWidgetDialog showModal={showModalAddWidget} hideModal={hideModalAddWidget} onExited={onExited} open={open}/>
    ));

    const [showModalWidgetRecord, hideModalWidgetRecord] = useModal(({ in: open, onExited }) => (
      <WidgetRecordDialog hideModal={hideModalWidgetRecord} onExited={onExited} open={open}/>
    ));

    const [showModalImportDashboard, hideModalImportDashboard] = useModal(({ in: open, onExited }) => (
      <ImportDashboardDialog hideModal={hideModalImportDashboard} onExited={onExited} open={open}/>
    ));


  // const onTileClick = (e, widgets) => {
  //   var columns = 3
  //   var a = document.getElementById('absolute')
  //   var length = widgets.length
  //   var rows = length / columns
  //   rows = Math.ceil(rows)
  //   if (length % columns > 1) {
  //     rows = rows + 1
  //   }
  //   var space = 20
  //   var w = a.clientWidth - space
  //   var h = a.clientHeight - space
  //   var newWidth = w/columns
  //   var newHeight = h/rows
  //   var left = 0
  //   var width = newWidth - space
  //   var currentCol = 1
  //   var currentRow = 1
  //   var newY = 0
  //   widgets.forEach(widget => {
  //     var index = widgets.map(item => item.id).indexOf(widget.id);
  //     if (index !== -1) {
  //       if (currentCol > columns) {
  //         left = 0
  //         currentRow = currentRow + 1
  //         newY = newY + newHeight
  //         currentCol = 1
  //       }
  //       window.dispatchEvent(new CustomEvent("message",{
  //         detail:{
  //           type: 'tile',
  //           id: widget.id,
  //           box: {
  //             left: left,
  //             top: newY,
  //             width: width,
  //             height: newHeight - space,
  //           }
  //         }
  //       }));
  //       left = width + left + space
  //       currentCol = currentCol + 1
  //     }
  //   })
  // }


  //   const onTileClick2 = (e) => {
  //     //dispatch({type: 'TILE_WIDGETS', payload: {}});

  //     console.log(widgets)

  //     {widgets !== undefined &&
  //       //console.log(widgetData)
  //       widgets.map((widgetRecord, index) => {
  //         window.dispatchEvent(new CustomEvent("message",{
  //           detail:{
  //             type: 'tile',
  //             id: widgetRecord.id,
  //             box: {
  //               left: index*100,
  //               top: 10,
  //               width: 100,
  //               height: 100,
  //             }
  //           }
  //         }));
  //       })
  //     }
  //   };

    const onClearClick = (e) => {
      //dispatch({type: 'CLEAR_WIDGETS', payload: {}});
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (event, who) => {
      setAnchorEl(null);
      if (who == 'dev') {
        showModalWidgetRecord()
      }
    };

    return (
      <div className="toolbar" style={{display:'flex',flexDirection:'rows',justifyContent:'space-between',alignItems:'center'}}>
        {/* <div style={{padding:'10px 0 0 10px'}}>{dashboardData.appTitle}</div> */}
        <div style={{padding:'0 0 0 10px'}}>Welcome Marc Gusmano</div>

        {/* <div style={{padding:'5px 0 5px 0',display:'flex',flexDirection:'row'}}>
          <Button onClick={showModalAddWidget} style={{width:'100px',fontSize:'11px',background:'green',color:'white'}} >Add Widget</Button>
          <Divider orientation="vertical" flexItem />
          <Button onClick={() => Util.TileIt(widgets)} style={{width:'100px',margin:'0 0 0 10px',fontSize:'11px',background:'gray',color:'white'}} >Tile</Button>
          <Button onClick={onClearClick} style={{width:'100px',margin:'0 0 0 10px',fontSize:'11px',background:'gray',color:'white'}} >Clear</Button>
        </div> */}

        {/* <div style={{padding:'1px 10px 0 0'}}>
          <Grid style={{padding:'8px 5px 0 5px'}} container alignItems="center">
            <FormatAlignLeftIcon style={{padding:'0 10px 0 0'}}>text</FormatAlignLeftIcon>
            <Divider orientation="vertical" flexItem />
            <MoreVertIcon style={{cursor:'pointer',padding:'0 0 0 10px'}} onClick={handleClick}/>
          </Grid>

          <Menu
            style={{zIndex:'3000'}}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><div style={{fontSize:'11px'}}>Another</div></MenuItem>
            <MenuItem onClick={handleClose}><div style={{fontSize:'11px'}}>Another</div></MenuItem>
            <Divider light />
            <MenuItem onClick={(event) => handleClose(event, 'dev')}><div style={{fontSize:'11px'}}>DEV</div></MenuItem>
          </Menu>
        </div> */}

      </div>
    );
}

export default Toolbar
