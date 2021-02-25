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
  withStyles,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';

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
  button: {
    margin: theme.spacing(1),
  },
  tableCell: {
    width: '60%',
  },
  title: {
    flexGrow: 1,
  },
}));

const ColorButtonEdit = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}))(Button);

export const HomeContainer = () => {
  const classes = useStyles();
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
      <TableContainer>
        <Table aria-label="posts table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                adipisci architecto repellat doloribus culpa harum, esse
                commodi! Ut modi voluptatum obcaecati fugiat repellat
                consectetur placeat officiis, at necessitatibus doloribus
                reprehenderit!
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<VisibilityIcon />}
                >
                  View
                </Button>
                <ColorButtonEdit
                  variant="contained"
                  className={classes.button}
                  startIcon={<EditIcon />}
                >
                  Edit
                </ColorButtonEdit>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
