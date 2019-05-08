import React from 'react';

const Friends = (props) => {
    return (
        <div className='friends-container'>
            {props.array.map((friend) => {
                <div className='friends' key={friend.id}>
                    <h1>Name: {friend.name}</h1>
                    <h3>Age: {friend.age}</h3>
                    <h3>Email Address: {friend.email}</h3>
                </div>
            })}
        </div>
    )
}

export default Friends;

// import React from 'react';
// import './StarWars.css';

// const Chars = (props) => {
//     return (
//     <div className="containerDiv">
//         {props.array.map((char) => (
//           <div className="character" key={char.url}>
//             <h1 className="name">{char.name}</h1>
//             <p className="height">Height: {char.height}cm</p>
//             <p className="weight">Weight: {char.mass}kg</p>
//             <p className="birth_year">Birth Year: {char.birth_year}</p>
//           </div>
//         ))}
//     </div>
//     )
// }


// export default Chars;