import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';
import { TableRowItem } from './TableRowItem.jsx';
import { PostsContext } from '../context/PostsContext';
import PostFinder from '../api/PostFinder';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginTop: '3rem',
  },
  title: {
    flexGrow: 1,
  },
}));

export const HomeContainer = () => {
  const isMounted = useRef(true);
  const [loading, setLoading] = useState(true);
  const { posts, setPosts } = useContext(PostsContext);

  const classes = useStyles();

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await PostFinder.get('/');
        if (isMounted.current) {
          setLoading(false);
          setPosts(response.data);
          console.log(loading);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setPosts]);

  return (
    <Paper className={classes.tableContainer}>
      <Toolbar className={classes.root}>
        <Typography variant="h5" className={classes.title}>
          Posts
        </Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Add new post
        </Button>
      </Toolbar>
      {loading ? (
        <Alert severity="info">Loading ...</Alert>
      ) : (
        <TableContainer>
          <Table aria-label="posts table" className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRowItem
                  key={post.id}
                  title={post.title}
                  postId={post.id}
                  setPosts={setPosts}
                  posts={posts}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};
