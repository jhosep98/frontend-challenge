import React from 'react';
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
import { useFetch } from '../hooks/useFetch';
import { TableRowItem } from './TableRowItem.jsx';

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
  const classes = useStyles();
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { loading, data } = useFetch(url);
  const posts = !!data && data;

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
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};
