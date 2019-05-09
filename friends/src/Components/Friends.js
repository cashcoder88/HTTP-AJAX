import React from 'react';
import './Components.css';

const Friends = (props) => {
    return (
        <div className='friends-container'>
            {props.friends.map((friend) => (
                <div className='friends' key={friend.id}>
                    <h1>Name: {friend.name}</h1>
                    <h3>Age: {friend.age}</h3>
                    <h3>Email Address: {friend.email}</h3>
                </div>
            ))}
        </div>
    )
}

export default Friends;
