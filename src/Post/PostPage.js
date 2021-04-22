import React from 'react'
import { useParams } from 'react-router'

function PostPage() {
    let {post_id} = useParams();
    return (
        <div>
            <h2>Post{post_id} 페이지 입니다.</h2>

            <container id="contain">
                Post{post_id} container
            </container>
        </div>
    )
}

export default PostPage
