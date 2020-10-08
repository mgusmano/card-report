import React, { useState, useEffect } from 'react';
import axios from "axios";
import './CardWidget.css'
import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
import Separator from '../../layout/Separator'
import Select from "react-select";

//http://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395
//http://skillnetpartnerpositionsapi.azurewebsites.net//api/PartnerPositions?partnerid=395
//https://skillnetusersapi.azurewebsites.net/api/users


const CardWidget = (props) => {
  //title:Card Report//title:
  //x:30//x:
  //y:30//y:
  //width:1000//width:
  //height:700//height:
  const [positions, setPositions] = useState(null)
  const [locations, setLocations] = useState(null)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    console.log('useEffect')


    axios
    .get('http://skillnetpartnerpositionsapi.azurewebsites.net//api/PartnerPositions?partnerid=395', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log(response.data)
      setPositions(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

    axios
    .get('http://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log(response.data)
      setLocations(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/users', {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      setUsers(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  }, []);

  return (
    <Horizontal>
      {/* column 1 */}
      <Vertical style={{flex:'auto'}}>
        <div style={{background:'white',color:'black',textAlign:'center',fontSize:'11px',padding:'20px'}}>Filters</div>

        <div style={{display:'flex',flexDirection:'row'}}>

          <div>
            Assessment Source
            <Select style={{zIndex:'50000'}}
              width="300px"
              xname="rating"
              value={0}
              xonChange={(e) => this.selectChangeHandler(e, "rating")}
              xclassName="search-select"
              xoptionalClassName="form-select-option"
              xsearchable
              xremoveSelected
              options={[1,2,3,4]}
              placeholder="Select Rating Source..."
              xclearable={false}
            />
          </div>

          <select>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Elephant">Elephant</option>
          </select>

          <div style={{width:'400px',marginLeft:'20px'}}>
            Assessment Source
            <Select
              //width="300px"
              name="rating"
              value={0}
              //onChange={(e) => this.selectChangeHandler(e, "rating")}
              //className="search-select"
              //optionalClassName="form-select-option"
              searchable
              //removeSelected
              options={['1','2','3','4']}
              placeholder="Select Rating Source..."
              //clearable={false}
            />
          </div>

        </div>

      <Splitter/>
      <div style={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex'}}>
        {users !== null &&
          users.map((user) => {
            return (
              <div key={user.PersonID} style={{display:'flex',flexDirection:'column',margin:'10px 10px 10px 10px',padding:'10px',width:'250px',height:'100px',border:'1px solid lightgray',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

                <div style={{display:'flex',flexDirection:'row',alignContent:'flex-end',justifyContent:'space-between'}}>

                  <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: `url(${user.Avatar})`}}></div>

                  <div style={{display:'flex',flexDirection:'column',alignContent:'flex-end'}}>
                    <div style={{fontSize:'11px',fontWeight:'bold',marginTop:'1px',textAlign:'right'}}>{user.BFirstName} {user.BLastName}</div>
                    <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.JobName}</div>
                    <div style={{fontSize:'11px',marginTop:'10px',textAlign:'right'}}></div>
                    <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>CNA</div>
                    <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Location}</div>
                  </div>

                </div>

                <div style={{marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                  <div style={{fontSize:'11px'}}>{user.Email}</div>
                </div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                  <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Profile</div>
                </div>

              </div>
            )
          })
        }




        </div>
      <Splitter/>
      <div style={{background:'white',color:'black',textAlign:'center',fontSize:'11px',padding:'20px'}}>Report Footer</div>
    </Vertical>
      <Splitter/>
      {/* column 2 */}
      <Vertical style={{width:'200px',height:'100%'}}>
        <div style={{flex:'1'}}>
          Positions
          <select>
          {positions !== null &&
            positions.map((position, index) => {
              return (
                <option key={position.name}>{position.name}</option>
              )
            })
          }
          </select>

          Locations
          <select>
          {locations !== null &&
            locations.map((location, index) => {
              return (
                <option key={location.name}>{location.name}</option>
              )
            })
          }
          </select>



          <Select style={{zIndex:'50000'}}
            width="300px"
            name="position"
            value={0}
            xonChange={(e) => this.selectChangeHandler(e, "rating")}
            xclassName="search-select"
            xoptionalClassName="form-select-option"
            xsearchable
            xremoveSelected
            options={[1,2,3,4]}
            placeholder="Select Position..."
            xclearable={false}
          />
        </div>
      </Vertical>
    </Horizontal>
  )

}

export default CardWidget


// <Vertical>
// <Horizontal style={{display:'flex',flex:'2',maxHeight:'100px'}}>
//   <div style={{height:'60px',padding:'10px'}}>filters here...</div>
// </Horizontal>
// <Splitter/>


// {/*

// <Horizontal>
// <div style={{display:'flex',flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between', overflow:'auto'}}>
  // {users !== null &&
  //   users.map((user) => {
  //     //var pic = `url(${user.Avatar})`
  //     console.log(user)
  //     return (
  //       <div key={user.PersonID} style={{display:'flex',flexDirection:'column',margin:'10px 10px 10px 10px',padding:'10px',width:'250px',height:'100px',border:'1px solid lightgray',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

  //         <div style={{display:'flex',flexDirection:'row',alignContent:'flex-end',justifyContent:'space-between'}}>
  //           {/* <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: 'url(./fonts/5.jpg)'}}></div> */}
  //           <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: `url(${user.Avatar})`}}></div>

  //           <div style={{display:'flex',flexDirection:'column',alignContent:'flex-end'}}>
  //             <div style={{fontSize:'11px',fontWeight:'bold',marginTop:'1px',textAlign:'right'}}>{user.BFirstName} {user.BLastName}</div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.JobName}</div>
  //             <div style={{fontSize:'11px',marginTop:'10px',textAlign:'right'}}></div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>CNA</div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Location}</div>
  //           </div>
  //         </div>


  //         <div style={{marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
  //           <div style={{fontSize:'11px'}}>{user.Email}</div>
  //         </div>


  //         <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
  //           <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Profile</div>
  //         </div>
  //       </div>
  //     )
  //   })
  // }
// </div>
// </Horizontal>

// </Vertical> */}
// )

//          renderer: v => <strong>{Number(parseFloat(v).toFixed(2)).toLocaleString('en')}</strong>},
