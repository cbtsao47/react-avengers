import React from 'react';
import PropTypes from 'prop-types';


const AvengersList =(props) =>{
    return (
        <div>
            {props.avengers.map((avengers,i) => <li key ={i} avenger = {avengers}>{avengers}</li>)}
        </div>
    );
}

AvengersList.propTypes = {
    avengers: PropTypes.arrayOf(PropTypes.string)
}
export default AvengersList;