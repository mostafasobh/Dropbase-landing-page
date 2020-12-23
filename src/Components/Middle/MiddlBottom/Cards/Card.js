import React from 'react'

export default function Card(props) {

    
    const [data]=React.useState({
        migration:{
            head:'Data Onboarding & Migration',
            processHead:'Onboard data where you need it.',
            process:' Combine and process datasets to fit the desired format or data model.',
            details:'Most people start working on spreadsheets due to their simplicity. As operations mature, you need to combine files and move them to a specialized system, such as CRMs, BI tools, or custom web applications.',
            moreDetails:'Dropbase simplifies this workflow, helping you combine, join, or blend various data sources to fit the format required by your target application.'
        },
        management:{
            head:'Data Integration and Management',
            processHead:'Bring data to 1 place.',
            process:' Move offline files to a central location and easily share it with teams.',
            details:'Having a single place for data scientists and analysts reduces errors and improves quality of data. Stop emailing CSVs and Excel files around.',
            moreDetails:'Dropbase lets you import data files and enable access to ready-to-consume data to teammates. All from a single location.'
        },
        preparation:{
            head:'Data Cleaning & Preparation',
            processHead:'Get your data ready for insights.',
            process:' Spend less time cleaning and preparing data.',
            details:'Preparing data for analytics and machine learning takes time. It means less time to work on generating insights from the data.',
            moreDetails:'With Dropbase, prepare and clean data with a few clicks. And when you\'re done, save or share your processing steps.'
        }
    })
    const coordsRef= React.useRef()

    const showRef =()=>{
        let windowHeight = window.pageYOffset
        let elementHeight = coordsRef.current.offsetTop
        let checkPoint = coordsRef.current.offsetTop +coordsRef.current.offsetHeight
        let opacity ;
  
        if(windowHeight <= elementHeight){
          opacity =  windowHeight / elementHeight - .2
          console.log('window scroll is :', windowHeight , 'element scroll is : ', elementHeight, `sub is : ${windowHeight/elementHeight}`)
      }else{
        opacity = 1
      }
      coordsRef.current.style.opacity = opacity
      }
      
      React.useEffect(()=>{
  
        window.addEventListener('scroll',()=>{
          showRef()
        })
      },[])


    let card=null;
    const test=(type)=>{
        card=(
            <div className='card-container' ref={coordsRef}>
            <p className='orange'>{type.head}</p>
        <h3 className='txt-large'>{type.processHead}
        <span className='shady-txt'>{type.process}</span></h3>
        <p className='txt-medium shady-txt'>{type.details}</p>
        <p className='txt-medium shady-txt'>{type.moreDetails}</p>
            </div>
        )
    }
    switch(props.name){
        case('migration'):
        test(data.migration)
        break;
        case('management'):
        test(data.management)
        break;
        case('preparation'):
        test(data.preparation)
    }
    return (
        <>
        {card}
        </>
    )
}
