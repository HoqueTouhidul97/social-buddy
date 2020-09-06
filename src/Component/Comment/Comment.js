import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core';

const Comment = (props) => {
    const {email, body} = props.comment;
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => setUser(data.results[0].picture))
    },[]);
    const img = user.large;

    const imgStyle = {
        borderRadius:'40%', 
        width:'75px', 
        float:'left', 
        margin:'25px'
    }
    return (
        <div>
                <img style={imgStyle} src={img} alt=""/>
            <Card  variant="outlined">
                <CardActionArea >
                    <CardContent>
                    <Typography gutterBottom variant="h6" >
                        {email}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Comment;