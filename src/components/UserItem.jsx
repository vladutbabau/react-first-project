import React from 'react';

function UserItem(props){
    
    const {id, imgUrl, name, salary, email, isGoldClient} = props;

    return (
        <div>
            <h4>ID:{id}</h4>
            <h3>{name}</h3>
            <img src = {imgUrl} alt = {`${name}'s avatar`} />
            <p>{salary}</p>
            <p>{email}</p>
            <p>Client GOLD: 
                {isGoldClient 
                      ? "Da" 
                      : "Nu"}
            </p>
            <button>Sterge user</button>
        </div>
    );
}

export default UserItem;