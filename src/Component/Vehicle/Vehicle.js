import React from 'react';
import { Link } from 'react-router-dom';
import css from './Vehicle.css'
const Vehicle = (props) => {
    const { name, image, id } = props.data;

    return (
        <div className="col-md-3 all-vehicle">
            <Link to={`/vehicle/${id}`} style={{ textDecoration: 'none' }}>
                <div className="img-bg">
                    <img className="img-fluid vehicle-size" src={image} alt="" />
                    <h2 className="text-color">{name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Vehicle;