import React from 'react';

const Info = (props) => {
    const {info} = props;
    console.log(info);
    let time = 0;
    for(const activity of info){
        time = time + activity.time;
    }
    return (
        <div>
            <h4>Mohammad Foysal Uddin</h4>
                <p>Web Developer</p>
                <h5>Add a Break</h5>
                <div className='break-container'>
                    <p>15min</p>
                    <p>30min</p>
                    <p>45min</p>
                    <p>60min</p>
                </div>
                <div className='exercise-details'>
                    <h4>Exercise Details</h4>
                    <div className='exercise-time'>Exercise time: {time}</div>
                    <div className='break-time'>Break Time: </div>
                </div>
                <button className='btn-activity'>Activity Completed</button>
        </div>
    );
};

export default Info;