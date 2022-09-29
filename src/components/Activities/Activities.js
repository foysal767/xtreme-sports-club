import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Info from '../Info/Info';
import Qa from '../QA/Qa';
import "./Activities.css";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect( () => {
        fetch("activities.json")
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    const handleAddToList = (activity) => {
        const newInfo = [...info, activity]
        setInfo(newInfo)
    }
    return (
        <div>
            <div className='page-container'>
                <div>
                    <nav className='menu'>
                        <img src="https://p.kindpng.com/picc/s/22-229918_night-club-logo-png-images-club-logo-png.png" alt="" />
                        <h2>Xtreme Sporte Club</h2>
                    </nav>
                    
                <div className='activities-container'>
                {
                    activities.map(activity => <Cart
                    key={activity.id}
                    activity={activity}
                    handleAddToList={handleAddToList}></Cart>)
                }
                </div>
                </div>
                <div className='personal-info'>
                    <Info info={info}></Info>
                </div>
            </div>
            <div>
                <Qa></Qa>
            </div>
        </div>
    );
};

export default Activities;