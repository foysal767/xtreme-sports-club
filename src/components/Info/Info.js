import React, { useState } from 'react';
import './Info.css'

const Info = (props) => {
    const {info} = props;
    let time = 0;
    for(const activity of info){
        time = time + activity.time;
    }
    // const [break, setBreak] = useState([]);
    const handlerBreak = (e) =>{
        console.log(e)
        // newBreak = [...break, e]
        // setBreak(newBreak)
    }
    return (
        <div className='personal-info'>
            <h4>Mohammad Foysal Uddin</h4>
                <p>Web Developer</p>
                <h5>Add a Break</h5>
                <div className='break-container'>
                    <p onClick={()=>handlerBreak()}>15min</p>
                    <p onClick={handlerBreak}>30min</p>
                    <p onClick={handlerBreak}>45min</p>
                    <p onClick={handlerBreak}>60min</p>
                </div>
                <div className='exercise-details'>
                    <h4>Exercise Details</h4>
                    <div className='exercise-time'>Exercise time: <span>{time} mins</span> </div>
                    <div className='break-time'>Break Time: <span></span> </div>
                </div>
                <button className='btn-activity'>Activity Completed</button>
        </div>
    );
};

export default Info;