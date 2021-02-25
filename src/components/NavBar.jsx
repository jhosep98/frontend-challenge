import React from 'react';
import { AppBar, Link, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuLink: {
    marginRight: theme.spacing(2),
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            className={classes.menuLink}
            color="inherit"
            component={NavLink}
            variant="body2"
            exact
            to="/"
          >
            Home
          </Link>
          <Link color="inherit" component="button" variant="body2">
            Edit
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
