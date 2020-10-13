import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// InfoWindow component
const InfoWindow = (props) => {
  const { place, text } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 88,
    left: '-95px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>
        {text}
      </div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: 'grey' }}>
          {place.rating}
          {' '}
        </span>
        <span style={{ color: 'orange' }}>
          {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
        </span>
        <span style={{ color: 'lightgrey' }}>
          {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
        </span>
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {place.types[0]}
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {'$'.repeat(place.price_level)}
      </div>
      <div style={{ fontSize: 14, color: 'green' }}>
        {place.opening_hours.open_now ? 'Open' : 'Closed'}
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 18px;
  background-color: #000;
  border: 4px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const place = {
  types: [
    'sample hover box'
  ],
  opening_hours:{
    open_now: true
  }
}

const Marker = ({ text, onClick, show, num }) => (
  <>
  <Wrapper
    style={{display:'flex',alignItems:'center',justifyContent:'center'}}
    title={text}
    alt={text}
    onClick={onClick}
  >
    <div style={{color:'white'}}>{num}</div>
  </Wrapper>
  {show === true &&
    <InfoWindow place={place} text={text} />
  }
  </>
)

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
