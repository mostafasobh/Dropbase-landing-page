import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardsContainerPadding:{
        padding:'40px'
    }
  }));

export default function WideCards() {
    const classes = useStyles();
    React.useEffect(()=>{
        AOS.init({
            duration:1000
        })
    },[])
    const data={
        first:{
            title:'Spreadsheet view.',
            text:'See how your data looks as you process it.'
        },
        second:{
            title:'No-code functions.',
            text:' Easily process your data through UI.'
        },
        third:{
            title:'1-click exports.',
            text:' Turn your data into a database or REST APIs.'
        },
        fourth:{
            title:'Custom functions. ',
            text:'Apply complex processing steps.'
        },
        fifth:{
            title:'File compatibility. ',
            text:'Import from CSVs, Excel, XML, and JSON.'
        },
        sixth:{
            title:'Code exports. ',
            text:'Export code for any processing step.'
        },
        seventh:{
            title:'Multiple pipelines.',
            text:'Process the same data with different steps.'
        },
        eighteeth:{
            title:'Share data. ',
            text:'Generate endpoints and share with your data team.'
        },
        ninth:{
            title:'Manage databases. ',
            text:'Manage and databases and credentials.'
        },
    }
    let dataArray=Object.keys(data)
    let createCards= dataArray.map((key)=>(

        <Grid item xs={12} md={4} key={key}>
        <div className='wideCards-container' data-aos="fade-up">
    <h3>{data[key].title}<span className='shady-txt'>{data[key].text}</span></h3>
            </div>
        </Grid>
    )
        )
        
    return (
        <>
            <div className='btm-txt'>
            <p className='p-style'>Features</p>
            <h1>All Dropbase features</h1>
            </div>
            <div className='width-control'>
            <Grid container spacing={2} classes={{container:classes.cardsContainerPadding}}>
                {createCards}
                </Grid>
            </div>
        </>
    )
}
