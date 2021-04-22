import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route, useParams} from 'react-router-dom';
import PostPage from '../Post/PostPage';
import cart from './cat.module.css'
import PostPreview from './PostPreview';
import cat from './cat.module.css';

function CategoryPage() {
    let {cat_id} = useParams();
    const name = '전체 포스트';
    return (
        <Router>
            <article>
                <h2>{cat_id==null?name:cat_id}</h2>
                <div>
                    <ul className={cat.post_list}>
                        <li className={cat.post_item}>
                            <Link to="post/1">
                                <PostPreview postId={1} />
                            </Link>
                        </li>
                        <li>
                            <Link to="post/2">
                                <PostPreview postId={2} />
                            </Link>
                        </li>
                        <li>
                            <Link to="post/3">
                                <PostPreview postId={3} />
                            </Link>
                        </li>
                        <li className={cat.post_item}>
                            <Link to="post/1">
                                <PostPreview postId={1} />
                            </Link>
                        </li>
                        <li>
                            <Link to="post/2">
                                <PostPreview postId={2} />
                            </Link>
                        </li>
                        <li>
                            <Link to="post/3">
                                <PostPreview postId={3} />
                            </Link>
                        </li>
                        <li className={cat.post_item}>
                            <Link to="post/1">
                                <PostPreview postId={1} />
                            </Link>
                        </li>
                        <li>
                            <Link to="post/2">
                                <PostPreview postId={2} />
                            </Link>
                        </li>
                        <li>
                            <Link to="post/3">
                                <PostPreview postId={3} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <postMessage />

                <Switch>
                    <Route exact path="post/:post_id">
                        <PostPage />
                    </Route>
                </Switch>
            </article>
        </Router>
    )
}

export default CategoryPage
