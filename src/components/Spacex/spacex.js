import React from 'react';
import Flights from "../../Flights/flights";
import {useEffect, useState} from "react";

const Spacex = () => {
    const [space, setSpacex] = useState( []);

    useEffect ( ()=> {
            fetch('https://api.spacexdata.com/v3/launches')
                .then(value => value.json())
                .then(value => setSpacex(value))
        }, [])

    return (

        <div>

            {space.map(value => <Flights key={value.flight_number} mission_name={value.mission_name}
                                          launch_year={value.launch_year} mission_patch_small={value.mission_patch_small}/>)}
            <div/>
            );

};

export default Spacex;