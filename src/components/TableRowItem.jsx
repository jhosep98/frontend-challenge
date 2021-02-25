import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TableCell,
  TableRow,
  withStyles,
  makeStyles,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ColorButtonEdit = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  tableCell: {
    width: '60%',
  },
  tableButtons: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

export const TableRowItem = ({ title, postId }) => {
  const history = useHistory();

  const handleDetails = (id) => {
    history.push(`/${id}`);
  };

  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.tableCell}>{title}</TableCell>
      <TableCell align="right" className={classes.tableButtons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<VisibilityIcon />}
          onClick={() => handleDetails(postId)}
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
  );
};
