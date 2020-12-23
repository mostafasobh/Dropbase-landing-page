import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'inherit'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(4),
  },
  menuIcon: {
    padding: '0'
  },
  appBar: {
    backgroundColor: 'inherit',
    width: '95%',
    left: '2.5%'
  },
  outlineButton: {
    color: 'inherit',
    borderColor: 'inherit'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'end',
    position: 'absolute',
    right: '20px'
  }
}));

export default function ButtonAppBar() {
  const [menuButton, setMenuButton] = React.useState(false)
  const [hideNavBtns, setHideNavBtns] = React.useState(true)
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
  const classes = useStyles();
  const sizing = () => {
    setScreenWidth(window.innerWidth)
  }
  window.onresize = () => { sizing() }

  React.useEffect(() => {
    window.innerWidth < 900 ? setMenuButton(true) : setMenuButton(false)
    window.innerWidth < 820 ? setHideNavBtns(true) : setHideNavBtns(false)
  }, [screenWidth])


  let navButton = (menuButton ?
    (<IconButton edge="end" className={classes.menuButton} classes={{ root: classes.menuIcon }} color="inherit" aria-label="menu">
      <MenuIcon fontSize='large' />
    </IconButton>)
    : null)
  let navButtons = (
    <>
      <Button className={classes.menuButton} style={{ color: 'white' }} size='large'>
        <Search />Search
  </Button>
      <Button classes={{ outlined: classes.outlineButton }} className={classes.menuButton} variant="outlined" color="primary" size='large'>
        Sign in
  </Button>
      <Button className={classes.menuButton} variant="contained" color="primary" size='large'>
        Sign up for free
  </Button>
    </>
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" classes={{ root: classes.appBar }} color='primary'>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <img className='logo' src='https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2cba1a0c6f6818eff4cec1_Dropbase%20logo%20transparent-p-800.png' />
          </Typography>
          {!menuButton ?
            <>
              <Typography variant="h6" className={classes.menuButton}>
                Pricing
          </Typography>
              <Typography variant="h6" className={classes.menuButton}>
                Blog
          </Typography>
            </>
            : null}
          <div className={classes.buttonContainer}>
            {!hideNavBtns ? navButtons : null}
            {navButton}
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
