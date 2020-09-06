import React, { useState, useEffect} from 'react';

import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core';
import Comment from '../Comment/Comment';
import { useParams } from 'react-router-dom';


const PostDetails = () => {
    const {postId} = useParams();
    
    const [details, setDetails] = useState([]);
    const [comments, setComments] = useState([]);

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setDetails(data))
},[])
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json())
    .then(data => setComments(data))
},[])
  

    const {title, body} = details
    return (
        <div>
            <Typography variant="h5"  gutterBottom>
                    Post Details
            </Typography>
            <Card  variant="outlined">
                <CardActionArea >
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Typography variant="h6" gutterBottom>
                        Comments
            </Typography>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }

            
        </div>
    );
};

export default PostDetails;