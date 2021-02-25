import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { UpdatePost } from '../components/UpdatePost.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '3rem',
  },
  paper: {
    padding: '2rem',
  },
}));

export const UpdatePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h4" align="center" color="primary">
          Update post
        </Typography>
        <UpdatePost />
      </Paper>
    </div>
  );
};
