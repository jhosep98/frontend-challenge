import React from 'react';
import { AppBar, Link, Toolbar, makeStyles } from '@material-ui/core';

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
            component="button"
            variant="body2"
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
