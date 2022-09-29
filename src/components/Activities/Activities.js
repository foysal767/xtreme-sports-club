import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Info from '../Info/Info';
import "./Activities.css";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [info, setInfo] = useState([])
    useEffect( () => {
        fetch("activities.json")
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    const handleAddToList = (activity) => {
        console.log(activity)
        const newInfo = [...info, activity]
        setInfo(newInfo)
    }
    return (
        <div className='page-container'>
            <div className='activities-container'>
            {
                activities.map(activity => <Cart
                key={activity.id}
                activity={activity}
                handleAddToList={handleAddToList}></Cart>)
            }
            </div>
            <div className='personal-info'>
                <Info info={info}></Info>
            </div>
        </div>
    );
};

export default Activities;