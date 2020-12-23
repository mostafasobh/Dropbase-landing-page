import React from 'react'

import Grid from '@material-ui/core/Grid';




export default function NumberedCards() {
   
    const data ={
        first:{
            processName:'Import',
            details:'Bring CSV and Excel files to Dropbase'
        },
        second:{
            processName:'Process',
            details:'‍Apply processing steps to format data'
        },
        third:{
            processName:'Export',
            details:'‍1-click export to database'
        }
    }
    const dataKeys=Object.keys(data)
    const backgroundColors=['#41abc1','#612bab','#ff8104']
    let card=dataKeys.map((keyName,index)=>{
        return(
            (
            <Grid item xs={12}  md={6} lg={4}  key={index}>
            <div className='num-card'>
                <div className='number-container' style={{backgroundColor:backgroundColors[index]}}>
            <h2>{index+1}</h2>
                </div>
            <h2 style={{padding:'10px 0'}}>{data[keyName].processName}</h2>
            <h2 className='shady-txt' style={{padding:'10px 0'}}>{data[keyName].details}</h2>
            </div>
            </Grid>
            )
        )
    })
    return (
        <div className='num-cards-container'>
         <Grid container spacing={2} >
        {card}
      </Grid>
        </div>
    )
}
