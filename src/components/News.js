import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b8dd0378b39e4075b49a8d712e79334c";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles })

  }
  render() {
    console.log("render");
    return (
      <div className="container my-4">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 d-flex justify-content-center" key={element.url}>
                <NewsItem title={element.title} description={element.description} headline="Ritwick Raj Makhal" imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            )
          })}
        </div>
        <div className='d-flex justify-content-between my-2'>
          <button type="button" class="btn btn-dark">&larr; Previous</button>
          <button type="button" class="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
