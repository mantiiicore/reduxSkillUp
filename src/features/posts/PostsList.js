import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {PostAuthor} from "./PostAuthor";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";

export const PostsList = () => {
    const posts = useSelector(state => state.posts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p><PostAuthor userId={post.user}/></p>
            <TimeAgo timestamp={post.date}/>
            <p>{post.content.substring(0, 30)}...</p>
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
            <ReactionButtons post={post}/>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}