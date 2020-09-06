import React, { useState, useEffect } from 'react';
import {Typography} from '@material-ui/core';
import Post from '../Post/Post';


const Interface = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
        <Typography variant="h5" gutterBottom>
            Social Buddy
        </Typography>   
        {
            posts.map(post => <Post post={post}></Post>)
        } 
        </div>
    );
};

export default Interface;