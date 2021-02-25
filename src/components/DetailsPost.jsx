import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Card,
  Container,
  makeStyles,
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PostFinder from '../api/PostFinder';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '3rem',
  },
}));

export const DetailsPost = () => {
  const classes = useStyles();
  const { id } = useParams();
  let history = useHistory();

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const fetchData = async () => {
    const response = await PostFinder.get(`/${id}`);
    console.log(response.data);
    setUserId(response.data.userId);
    setTitle(response.data.title);
    setBody(response.data.body);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Container className={classes.root}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" align="center" color="primary">
            Post[{id}]
          </Typography>
          <Typography variant="h6">userId:</Typography>
          <Typography variant="body1">{userId}</Typography>
          <Typography variant="h6">id:</Typography>
          <Typography variant="body1">{id}</Typography>
          <Typography variant="h6">title:</Typography>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="h6">body:</Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={handleClick}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
