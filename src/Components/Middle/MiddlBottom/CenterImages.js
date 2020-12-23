import React from 'react'

export default function CenterImages() {

    const centerImgData={
        img1:{
            link:'https://cf-simple-s3-origin-cloudfrontfors3-355320424519.s3.amazonaws.com/dropbase-website-assets/Dropbase+UI+processing+step.mp4',
            title:'No code.',
            text:'Process your data pipelines using a spreadsheet interface. Track every step.'
        },
        img2:{
            link:'https://cf-simple-s3-origin-cloudfrontfors3-355320424519.s3.amazonaws.com/dropbase-website-assets/Dropbase+sidebar+processing+step.mp4',
            title:'Flexible.',
            text:'Use a library of pre-built processing functions. Or write your own.'
        },
        img3:{
            link:'https://cf-simple-s3-origin-cloudfrontfors3-355320424519.s3.amazonaws.com/dropbase-website-assets/Dropbase+export+to+database.mp4',
            title:'1-click exports.',
            text:'Export to database or generate endpoints with 1 click.'
        }
    }

    let dataArray=Object.keys(centerImgData)
    let centerImages =dataArray.map((key)=>{

        return(
            <div className='centerImages-container' key={key}>
            <h1>{centerImgData[key].title}
                <span className='shady-txt'>
                {centerImgData[key].text}
                </span></h1>
                <video playsInline autoPlay muted loop width='100%'>
                    <source src={centerImgData[key].link}
                    type='video/mp4'
                     />
                </video>
       </div>
        )
    })
    return (
        <>
        {centerImages}
        </>
    )
}
