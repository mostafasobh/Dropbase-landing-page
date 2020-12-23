import React from 'react'
import './Button.scss'
import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Btn from '@material-ui/core/Button';
// import Search from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'inherit'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    padding: '20px'
  },
  largeBtn: {
    backgroundColor: 'blue'
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
  },
  bg: {
    backgroundColor: '#777a73'
  },
  activeBtn: {
    backgroundColor: '#465fad'
  }
}));
export default function Button(props) {
  const classes = useStyles();
  let btn = null;
  switch (props.tpy) {
    case ('large'):
      btn = <Btn size='large' className={`${classes.bg} ${props.state === props.id ? classes.activeBtn : null}`} onClick={props.clk} {...props}>{props.children}</Btn>
      break;
    default:
      btn = <Btn className={classes.menuButton}{...props} >{props.children}</Btn>
  }
  return (
    <>
      {btn}
    </>
  )
}
