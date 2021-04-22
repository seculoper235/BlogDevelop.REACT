import React from 'react'

function PostPreview({postId}) {

    return (
        <div>
            <h3>포스트 {postId}</h3>
            <b>
                포스트 {postId}입니다.
            </b>
            <p>작성자: 핑핑</p>
        </div>
    )
}

export default PostPreview
