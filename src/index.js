import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards'
import './index.css'
import Sdata from './Sdata';




ReactDOM.render(
    
    <>
    <h1 className="heading_style">List of top Five TV series in 2021</h1>
    <Cards 
    imgsrc= {Sdata[0].imgsrc}
    sname= {Sdata[0].sname}
    title= {Sdata[0].title}
    links= {Sdata[0].links }
    />
    <Cards 
    imgsrc= {Sdata[1].imgsrc}
    sname= {Sdata[1].sname}
    title= {Sdata[1].title}
    links= {Sdata[1].links }
    />
    <Cards 
    imgsrc= {Sdata[2].imgsrc}
    sname= {Sdata[2].sname}
    title= {Sdata[2].title}
    links= {Sdata[2].links }
    />
    <Cards 
    imgsrc= {Sdata[3].imgsrc}
    sname= {Sdata[3].sname}
    title= {Sdata[3].title}
    links= {Sdata[3].links }
    />
    <Cards 
    imgsrc= {Sdata[4].imgsrc}
    sname= {Sdata[4].sname}
    title= {Sdata[4].title}
    links= {Sdata[4].links }
    />
    </>,document.getElementById('root')
    )