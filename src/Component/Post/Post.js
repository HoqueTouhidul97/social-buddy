import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Link } from '@material-ui/core';

const Post = (props) => {
    const {title,id} = props.post;

    const history = useHistory();
    const handleClick = () => {
        history.push(`/post/${id}`)
    };
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() =>handleClick(id)} size='medium' color='primary' variant='contained'>
                    Explore Details
                </Button>
                {/* <p><Link>   to={`/friend/${id}`}>Show Detail of {id}</Link></p> */}
                {/* <Link to={`/postDetails/${id}`}><Button variant="contained" color="primary" size="small">Learn More</Button></Link> */}
            </CardActions>

        </Card>
    );
};

export default Post;