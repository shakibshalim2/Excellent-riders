import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FakeData from '../../FakeData/data.json'
import Vehicle from '../Vehicle/Vehicle';
const Home = () => {
    const [vehicle, setVehicle] = useState([])
    useEffect(() => {
        setVehicle(FakeData)
    }, [])


    return (
        <div className="container">
            <div className="row">
                {
                    vehicle.map(data => <Vehicle data={data} key={data.id} ></Vehicle>)

                }
            </div>

        </div>
    );
};

export default Home;