import React from 'react'
import './Footer.scss'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

export default function Footer() {
    const classes = useStyles()

    const navLinksData = {
        blog: {
            link: 'https://www.dropbase.io/blog',
            id: 1
        },
        pricing: {
            link: 'https://www.dropbase.io/pricing',
            id: 2
        },
        contacts: {
            link: 'https://www.dropbase.io/contacts',
            id: 3
        }

    }
    const navLinks = Object.keys(navLinksData).map((navElement) => (

        <a href={navLinksData[navElement].link} key={navLinksData[navElement].id}>{navElement}</a>

    ))
    return (
        <section id='footer'>

            <div className='footer-container'>
                <img className='logo' src='https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2cba1a0c6f6818eff4cec1_Dropbase%20logo%20transparent-p-800.png' />
                <h3 className='shady-txt' style={{ paddingBottom: '20px' }}>Turn CSV files to live databases, instantly.</h3>

                <div className='clone-rights'>
                    <h3>Cloned By:</h3>
                    <h1>Mostafa Sobh</h1>
                </div>

            </div>
        </section>
    )
}
