import React from 'react';

const Friends = (props) => {
    return (
        <div className='friends-container'>
            {props.friends.map((friend) => (
                <div className='friends' key={friend.id}>
                    <h1>Name: {friend.name}</h1>
                    <h3>Age: {friend.age}</h3>
                    <h3>Email Address: {friend.email}</h3>
                    <h1>Testing</h1>
                </div>
            ))}
        </div>
    )
}

export default Friends;
