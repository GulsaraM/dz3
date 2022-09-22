import React from 'react';

function Posts({postList}) {

    return (
        <ul>
            {
                postList.length > 0
                    ?
                    postList.map((post, key) => <li key={key}>{post}</li>)
                    :
                    <li>no news</li>
            }
        </ul>
    );
}

export default Posts;