import React from 'react';
import UserItem from './UserItem';

function UserList(props){
    const {users} = props;
    
    return(
        <div>
            {
                users.map((user, index) => {
                    return  <UserItem 
                        key={index}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        isGoldClient={user.isGoldClient}
                    />
                   
                })
            }
        </div>
    );
}

export default UserList;