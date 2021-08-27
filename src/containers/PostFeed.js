import React from 'react'
import { connect } from 'react-redux';
import InputField from '../components/InputField';
import Post from '../components/Post';

const PostFeed = (props) => {
    const followedIds = props.followed.map ( user => user.id )
    const followedPosts = props.posts.filter( post => {
        return followedIds.includes(post.user_id) || post.user_id === props.user.id
    })
    const chronologicalPosts = followedPosts.reverse()
    const postsJSX = chronologicalPosts.map(post => {
        return <Post key={post.id} userId={post.user_id} content={post.content} user={post.user}/>
    })

    return (
        <div className="ui large feed">
            < InputField />
            { props.loggedIn ? 
            postsJSX : 
            props.history.push('/')
            }
        </div>
    )
}

const mapStateToProps = state => {
    return ({user: state.users.currentUser,
            followed: state.users.followed, 
            loggedIn: state.users.loggedIn,
            posts: state.posts.posts
    })
}

export default connect(mapStateToProps)(PostFeed)