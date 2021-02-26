import React from 'react';
import { CreatePost } from '../components/CreatePost.jsx';
import { makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '3rem',
  },
  paper: {
    padding: '2rem',
  },
}));

export const CreatePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h4" align="center" color="primary">
          Create post
        </Typography>
        <CreatePost />
      </Paper>
    </div>
  );
};
