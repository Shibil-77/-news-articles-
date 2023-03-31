import React from 'react'
import './Banner.css'

function Banner() {
     
    
     
  return (
    <>
     <div
     style={{backgroundImage:`url(${"https://www.pngitem.com/pimgs/m/527-5272454_white-bbc-news-logo-png-transparent-png.png"})`}} className='Banner'>
      <div className='content'>
        <h1 className='title'>hello worl</h1>
        <div className='Banner_btn'>
            <button type="" className='btn'>Play</button>
            <button type="" className='btn'>My List</button>
        </div>
        <h1 className='discription'>hello</h1>
      </div>
      <div className='fade-bottom'></div>
    </div>
    </>
  )
}

export default Banner