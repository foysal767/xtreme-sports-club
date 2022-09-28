import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect( () => {
        fetch("activities.json")
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div>
            <h1>This is Activities</h1>
            {
                activities.map(activity => <Cart
                activity={activity}></Cart>)
            }
        </div>
    );
};

export default Activities;