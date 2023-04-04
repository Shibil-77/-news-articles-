import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from "axios"


function Banner() {
  const [news, setNews] = useState()

  const bannerDataFetch = async () => {
    const { data } = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=05af86a9d5f7473ca489d930efaf74dc")
    setNews(data.articles[Math.round(Math.random() * data.articles.length)])
    console.log(data.articles);
  }

  useEffect(() => {
    bannerDataFetch()
  }, [])

  return (
    <>
      {news &&
        <div
          style={{ backgroundImage: `url(${news.urlToImage})` }} className='Banner'>
          <div className='content'>
            <h1 className='title'>{news.title}</h1>
            <div className='Banner_btn'>
             <a href={news.url} target="_blank">
                <button type="" className='btn'>View</button>
                </a>
            </div>
            <h1 className='description'>{news.content}</h1>
          </div>
        </div>}
    </>
  )
}

export default Banner