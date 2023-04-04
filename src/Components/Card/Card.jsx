import React, { useEffect, useState } from 'react'
import axios from "axios"

function Card() {

  const [news, setNews] = useState()

  const newsDataFetch = async () => {
    const { data } = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=05af86a9d5f7473ca489d930efaf74dc")
    setNews(data.articles)
  }


  useEffect(() => {
    newsDataFetch()
  }, [])

  return (
    <>
      <div class="container">
        <div class="row">
          <h2 className='mt-3'>News</h2>
          {news && news.map((news) => {
            return (
              <div className='posters col-lg-3 col-md-4 col-sm-12 mt-3' key={news.title}>
                <div className="card " >
                  <img src={news.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text"> {news.content}</p>
                    <div className='d-flex justify-content-center'>
                    <a href={news.url} target="_blank" className="btn bg-secondary text-white">View</a>
                    </div>
                    
                  </div>
                </div>
              </div>
            )
          })
          }

        </div>
      </div>
    </>

  )
}

export default Card