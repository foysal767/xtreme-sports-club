import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    const {name, image, time} = props.activity;
    const {handleAddToList} = props;
    return (
        <div className='activity'>
            <img src={image} alt="" />
            <div className='activity-info'>
                <h3 className='activity-name'>{name}</h3>
                <p>Times: {time} min</p>
            </div>
            <button onClick={() =>handleAddToList(props.activity)} className='btn-cart'>Add to List</button>
        </div>
    );
};

export default Cart;