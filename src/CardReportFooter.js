import React, { useState, useEffect, useRef, useCallback } from 'react';

const CardReportFooter = () => {
  const [filteredpositions, setFilteredpositions] = useState([])
  const [filteredlocations, setFilteredlocations] = useState([])
  const cardRef = useRef(null);


  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    var type = e.detail.type
    var payload = e.detail.payload
    switch (type) {
      case 'fromcard':
        onChange(payload.filters)
        break;
      default:
        break;
    }
  }, [])

  useEffect(() => {
    console.log('useEffect CardReportFooter')
    //const card = cardRef.current
    //console.log('card', card)

    // card.addEventListener('mjg', onMessage)
    // return () => {
    //   card.removeEventListener('mjg', onMessage)
    // }

    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };


  }, [onMessage]);

  const onChange = (filterdata) => {
    //console.log('onChange',filterdata)
    //console.log('originalusers',cardRef.current.originalusers)

    setFilteredpositions(filterdata.filteredpositions)
    setFilteredlocations(filterdata.filteredlocations)

  };

  return (
    <div ref={cardRef} style={{xflex:'1',background:'white',color:'black',textAlign:'center',fontSize:'11px',padding:'20px'}}>
    Jobs: {filteredpositions.join()} &nbsp;&nbsp;&nbsp; Locations: {filteredlocations.join()}
    </div>
  )

}

export default CardReportFooter