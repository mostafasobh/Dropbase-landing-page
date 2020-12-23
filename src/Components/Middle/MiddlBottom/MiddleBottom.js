import React from 'react'
import './MiddleBottom.scss'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '../../UI/Button/Button'
import Card from './Cards/Card'
import NumCard from './Cards/NumberedCards'
import CenterImages from './CenterImages'
import WideCards from './Cards/WideCards'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btnColor: {
    backgroundColor: 'rgba(255, 255, 255, 0.151)'
  }
}));
export default function MiddleBottom() {
  const [processType, setProcessType] = React.useState('migration')
  const [activenNum, setActivenNum] = React.useState(0)
  const classes = useStyles();
  const setProcess = (type) => {
    switch (type) {
      case ('migration'):
        setProcessType(type)
        break;
      case ('management'):
        setProcessType(type)
        break;
      case ('preparation'):
        setProcessType(type)
        break;
      default:
        setProcessType('migration')

    }
  }



  // button name and actions
  let buttonData = {
    firstButtonData: {
      name: 'Data Onboarding & Migration',
      action: 'migration'
    },
    secondButtonData: {
      name: 'Data Integration & Management',
      action: 'management'
    },
    thirdButtonData: {
      name: 'Data Cleaning & Preparation',
      action: 'preparation'
    }
  }

  console.log(activenNum)
  let CardButtons = Object.keys(buttonData).map((btn, i) => (

    <Grid item xs={12} md={3} sm={6} key={btn} >
      <Button id={i} state={activenNum} cls={classes.btnColor} tpy='large' clk={() => { setProcess(buttonData[btn].action); setActivenNum(i) }} >{buttonData[btn].name}</Button>
    </Grid>
  ))
  return (
    <div className=' middleBottom-container'>
      <div className='center'>
        <p className='p-style'>Use Cases</p>
        <h1 style={{ padding: '20px' }}>Why Dropbase?</h1>
      </div>
      <div className=' btn-container'>
        <Grid container spacing={1}>

          {CardButtons}

        </Grid>
        <div className='card-wrapper' >
          <Card name={processType} />
          <div className='btm-txt'>
            <p className='p-style'>A New Way to Process Offline Data</p>
            <h1>The Dropbase Experience</h1>
          </div>
        </div>
      </div>
      <NumCard />
      <CenterImages />
      <WideCards />
      <div className='btm-txt'>
        <h1 style={{ paddingBottom: '40px' }}>Get early access.</h1>
        <h2 style={{ paddingBottom: '40px' }}>Bring all your offline data online. <span className='shady-txt'>
          Import, transform, and{window.innerWidth > 729 ? <br /> : null} load your CSVs and spreadsheets to a live database.
      </span></h2>
        <Button variant="contained" color="primary" size='large' style={{ marginBottom: '20px' }} >Sign up for free</Button>
        <p className='shady-txt'>Access will be immediately auto-approved for all users during our Product Hunt launch.</p>
      </div>
    </div>
  )
}
