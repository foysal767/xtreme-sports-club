import React, { useEffect, useState } from 'react';
import './Info.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = (props) => {
    const {info} = props;
    let time = 0;
    for(const activity of info){
        time = time + activity.time;
    }
    const [count, setCount] = useState("");
    const handlerBreak = (e) =>{
        const newCount = e.target.innerHTML;
        setCount(newCount)
        localStorage.setItem('count', JSON.stringify(newCount))
    }
    const notify = () => toast("Congratulations You Completed all Activities!");
    useEffect(()=>{
        const getCount = JSON.parse(localStorage.getItem('count'))
        if(getCount){
            setCount(getCount)
        }
    },[])
    return (
        <div className='personal-info'>
            <h4>Mohammad Foysal Uddin</h4>
                <p>Web Developer</p>
                <h5>Add a Break</h5>
                <div className='break-container'>
                    <p onClick={handlerBreak}>15min</p>
                    <p onClick={handlerBreak}>30min</p>
                    <p onClick={handlerBreak}>45min</p>
                    <p onClick={handlerBreak}>60min</p>
                </div>
                <div className='exercise-details'>
                    <h4>Exercise Details</h4>
                    <div className='exercise-time'>Exercise time: <span>{time} mins</span> </div>
                    <div className='break-time'>Break Time:<span>{count}</span> </div>
                </div>
                <button onClick={notify} className='btn-activity'>Activity Completed</button>
                <ToastContainer />
        </div>
    );
};

export default Info;