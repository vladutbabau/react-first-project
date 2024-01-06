import React from 'react';

function PostItem({userId, id, title, body}){
    return(
        <div>
            <p>userId: {userId}</p>
            <p>idMessage: {id}</p>
            <h2>Subject: {title}</h2>
            <h3>{body}</h3>
        </div>
    );

}
export default PostItem;