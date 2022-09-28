import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Activities.css";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect( () => {
        fetch("activities.json")
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className='page-container'>
            <div className='activities-container'>
            {
                activities.map(activity => <Cart
                key={activity.id}
                activity={activity}></Cart>)
            }
            </div>
            <div className='personal-info'>
                <h4>Mohammad Foysal Uddin</h4>
                <p>Web Developer</p>
                <h5>Add a Break</h5>
                <div className='break-container'>
                    <p>15min</p>
                    <p>30min</p>
                    <p>45min</p>
                    <p>60min</p>
                </div>
            </div>
        </div>
    );
};

export default Activities;