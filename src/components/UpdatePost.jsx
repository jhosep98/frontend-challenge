import React, { useState, useEffect } from 'react';
import PostFinder from '../api/PostFinder';
import UpdateIcon from '@material-ui/icons/Update';
import { useHistory, useParams } from 'react-router-dom';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2rem auto',
    padding: '0 5rem',
  },
}));

export const UpdatePost = () => {
  const classes = useStyles();
  const { id } = useParams();
  let history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const fetchData = async () => {
    const response = await PostFinder.get(`/${id}`);

    setTitle(response.data.title);
    setBody(response.data.body);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await PostFinder.put(`${id}`, {
      title,
      body,
    });

    history.push('/');
  };

  return (
    <form
      autoComplete="off"
      className={classes.formContainer}
      onSubmit={handleSubmit}
    >
      <TextField
        id="title"
        label="title"
        name="title"
        required
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="body"
        label="body"
        name="body"
        required
        fullWidth
        margin="normal"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        disableElevation
        size="large"
        startIcon={<UpdateIcon />}
      >
        update
      </Button>
    </form>
  );
};
