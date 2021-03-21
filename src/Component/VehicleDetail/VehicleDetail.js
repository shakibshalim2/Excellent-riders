import React, { useState } from 'react';
import { useParams } from 'react-router';
import FakeData from '../../FakeData/data.json'
import css from './VehicleDetail.css'
import icon from '../../media/peopleicon.png'
import { Link } from 'react-router-dom';
const VehicleDetail = () => {
    const [destination, setDestination] = useState(false)
    const { vehicleid } = useParams()

    const vehicle = FakeData.find(pd => pd.id == vehicleid)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div id='form-hide' className='booking-form'>
                        <form>
                            <label for="origin">Origin</label>
                            <input className='w-100' type="text" name="origin" required />
                            <label for="destination">Destination</label>
                            <input className='w-100' type="text" name="destination" required />
                            <label for="form">Form</label>
                            <input type="date" name="date" required />
                            <label for="to">To</label>
                            <input type="date" name="to" required />
                            <Link>
                                <input onClick={() => {
                                    setDestination(!destination);
                                    document.getElementById('form-hide').style.display = 'none';
                                }} type="submit" value="Set Scheduled Date" />
                            </Link>
                        </form>
                    </div>
                    {destination ? <div className='shadow'>
                        <div className='column'>
                            <div className='image-txt-container mb-4'>
                                <img style={{ width: '25%' }} src={vehicle.image} alt="" />
                                <p className='vehicle-name'>{vehicle.name}</p>
                                <img className='icon-size' src={icon} alt="" />
                                <p className='seat'>4</p>
                                <p className='charge'>$67</p>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='image-txt-container mb-4'>
                                <img style={{ width: '25%' }} src={vehicle.image} alt="" />
                                <p className='vehicle-name'>{vehicle.name}</p>
                                <img className='icon-size' src={icon} alt="" />
                                <p className='seat'>4</p>
                                <p className='charge'>$67</p>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='image-txt-container mb-4'>
                                <img style={{ width: '25%' }} src={vehicle.image} alt="" />
                                <p className='vehicle-name'>{vehicle.name}</p>
                                <img className='icon-size' src={icon} alt="" />
                                <p className='seat'>4</p>
                                <p className='charge'>$67</p>
                            </div>

                        </div>
                    </div> : null
                    }
                </div>
                <div className='col-md-6 mb-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d302756.5197571992!2d91.91167331815753!3d21.263065882257482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb13b426bade6ac8b!2sCox&#39;s%20Bazar%20Airport.!5e0!3m2!1sen!2sbd!4v1601008669297!5m2!1sen!2sbd" frameborder="0" style={{ border: '0', width: '500px', height: '600px' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                </div>
            </div>
        </div >
    );
};

export default VehicleDetail;