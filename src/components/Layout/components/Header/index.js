import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import cx from 'classnames';

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
});

function NavBar(props) {
  const {
    classes,
    className,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    // mobileDrawerOpen,
    // selectedTab,
  } = props;
  const menuItems = [
    {
      link: '/',
      name: 'Home',
      icon: <HomeIcon className="text-white" />,
    },
    {
      name: 'Login',
      icon: <LockOpenIcon className="text-white" />,
    },
  ];
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography
            variant="h4"
            display="inline"
            color="primary"
          >
            Kerfuffle
          </Typography>
        </div>
        <div>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              onClick={handleMobileDrawerOpen}
              aria-label="Open Navigation"
            >
              <MenuIcon color="primary" />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            {menuItems.map((element) => {
              if (element.link) {
                return (
                  <Link
                    key={element.name}
                    to={element.link}
                    className={classes.noDecoration}
                    onClick={handleMobileDrawerClose}
                  >
                    <Button
                      color="secondary"
                      size="large"
                      classes={{ text: classes.menuButtonText }}
                    >
                      {element.name}
                    </Button>
                  </Link>
                );
              }
              return (
                <Button
                  color="secondary"
                  size="large"
                  onClick={element.onClick}
                  classes={{ text: classes.menuButtonText }}
                  key={element.name}
                >
                  {element.name}
                </Button>
              );
            })}
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles, { withTheme: true })(memo(NavBar));