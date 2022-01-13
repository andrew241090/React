import React from 'react';
import  Spacex from './Spacex/spacex';

const Flights = (pro) => {
    const {flight_number, mission_name,launch_year,mission_patch_small} = pro;
            return (
            <div>
                <div>flight_number: {flight_number}</div>
                <div>mission_name: {mission_name}</div>
                <div>launch_year: {launch_year}</div>
                <div>mission_patch_small: {mission_patch_small}</div>
            </div>
            );
            };
export default Flights;