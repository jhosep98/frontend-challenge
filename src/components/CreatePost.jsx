import React, { useContext } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { PostsContext } from '../context/PostsContext';
import { useForm } from '../hooks/useForm';
import PostFinder from '../api/PostFinder';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2rem auto',
    padding: '0 5rem',
  },
}));

export const CreatePost = () => {
  const { addNewPost } = useContext(PostsContext);
  const classes = useStyles();
  let history = useHistory();
  const initialForm = {
    title: '',
    body: '',
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  const { title, body } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await PostFinder.post('/', formValues);
    const { data } = response;
    console.log(data);
    addNewPost(data);

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
        onChange={handleInputChange}
      />
      <TextField
        id="body"
        label="body"
        name="body"
        required
        fullWidth
        margin="normal"
        value={body}
        onChange={handleInputChange}
      />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        disableElevation
        size="large"
        startIcon={<AddCircleIcon />}
      >
        create
      </Button>
    </form>
  );
};
