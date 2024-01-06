import React from 'react';
import PostItem from './PostItem';

function PostList({posts}){
    return(
        <div>
            {
                posts.map((post,index) => {
                    return <PostItem
                        key={index}
                        userId={post.userId}
                        title={post.title}
                        body={post.body}
                        />

                })
            }

        </div>
    );
}

export default PostList;