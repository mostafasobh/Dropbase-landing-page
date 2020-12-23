import React from 'react'
import './Middle.scss'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridContainer: {
        padding: '100px'
    },
    bottomPadding: {
        marginBottom: '100px'
    }
}));

export default function Middle() {
    const classes = useStyles();

    return (
        <div className='middle-container full-width'>

            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} md={6} >
                        <div className='addPadding '>
                            <p className='p-style'>Import</p>
                            <h3>Bring offline files to Dropbase.</h3>
                            <h3 className='shady-txt'>Multiple formats. Any way you like.</h3>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} classes={{ root: classes.bottomPadding }}>
                        <div className='img-container img-control '>
                            <img src='https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f383786bba6e96897e099e6_Import-p-500.png' alt='img' />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className='addPadding '>
                            <p className='p-style'>Process</p>
                            <h3>Process and format data. </h3>
                            <h3 className='shady-txt'>Add, edit, re-order, and delete processing steps.</h3>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} classes={{ root: classes.bottomPadding }}>
                        <div className='img-container img-control '>
                            <img src='https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f382f67ac18ff2912ec04d6_Reorder%20steps-p-800.png' alt='img' />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className='addPadding '>
                            <p className='p-style'>Export</p>
                            <h3>1-click exports.</h3>
                            <h3 className='shady-txt'>Export to database, endpoints, or download code with 1 click.</h3>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} classes={{ root: classes.bottomPadding }}>
                        <div className='img-container img-control' >
                            <img src='https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f38368e39ae7419f3ee25c4_Generate%20endpoint.png' alt='img' />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className='addPadding '>
                            <p className='p-style'>REST API</p>
                            <h3>Instant REST API access.</h3>
                            <h3 className='shady-txt'>Query Dropbase data securely with REST API access keys.</h3>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} classes={{ root: classes.bottomPadding }}>
                        <div className='img-container img-control '>
                            <img src='https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f3836a6e7bab88c88bc9dc5_Database%20REST%20API%202-p-500.png' alt='img' />
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}