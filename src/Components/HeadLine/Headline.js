import React from 'react'
import './Headline.scss'
import Button from '../UI/Button/Button'
export default function Headline() {

    const [textData,setTextData]=React.useState()
//     const dataType=['offline','JSON','CSV','xlsx','G Sheet']
//     let index=0
//     const retypeText=()=>{

//   setTextData(dataType[index++ % dataType.length])
//     }

// typeWriter effect related code
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// the end of typeWriter related code

    return (
        <section className='headline-container'>
            <div className='txt-container'>
                <p className='p-style'>INTRODUCING DROPBASE</p>
                <h1>Turn.<span className='p-style typewrite' data-period="1000" data-type='[ "offline", "JSON", "CSV", "G_Sheet","xlsx" ]'></span>
                <br/>
                    files to live databases, instantly.</h1>
                    <h3>Centralize offline data.
 <span className='shady-txt'>Import files. Process and clean up data. Export to a live database with 1 click.</span></h3>
                <div className='signup-btn'>
            <Button variant="contained" color="primary" size='large' >Sign up for free</Button>
                </div>
            <p className='shady-txt center-txt'>Access will be immediately auto-approved for all users during our HackerNews launch.</p>
            </div>
            <div className='img-container full-width'>
            <img src='https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f3814ffc5c0fd83da5fd02b_Dropbase%20screenshot%203.png' alt='img' />
            </div>
            <div className='bottom-txt-container'>
            <h3>Streamline data workflows.
 <span className='shady-txt'>Centralize offline data and make it accessible to your team.</span></h3>
            </div>
        </section>
    )
}
