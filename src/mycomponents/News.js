import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


let mystyle = {
   fontSize:'39px',
   fontWeight:'Bold',
   fontFamily:'Lobster'
}
export class News extends Component {

    static defaultProps = {
      country:'in',
      pageSize: 9,
      category: 'general'
    }

    static propsTypes = {
      name: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }

    capatalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

      constructor(props)
      {
        super(props); // always right super into it
        console.log("hello i am contructor from news item");
        this.state = {
          articles:[],
          loading: false,
          page: 1
        }
        document.title = `${this.props.category==='general'?'Home':this.capatalizeFirstLetter(this.props.category)} - Turbo News`;
      }

      //this function will run after render runs 
      async componentDidMount()
      {
        console.log("cmd");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedata =await data.json();
        console.log( parsedata);
        this.setState({articles: parsedata.articles,
           totalResults:parsedata.totalResults, 
           loading:false})
      }

     
       handlePrevClick = async () =>{

         console.log("previous");

         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
         {this.setState({loading:true})};
         let data = await fetch(url);
         let parsedata =await data.json();
         console.log( parsedata);
        
         this.setState({
             page: this.state.page - 1,
             articles: parsedata.articles,
             loading: false
         })

      }

      handleNextClick = async () =>{

        console.log("next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
        {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          {this.setState({loading:true})};
          let data = await fetch(url);
          let parsedata =await data.json();
          console.log( parsedata);
         
          this.setState({
              page: this.state.page + 1,
              articles: parsedata.articles,
              loading: false
          })
        }
           
      }

      
    render() {
        return (
            <div className="container my-5"> 
                <h2 className="text-center" style={mystyle}>Turbo News - Top Headlines On <span id="cat">{this.capatalizeFirstLetter(this.props.category)}</span></h2>
                <br/>
            <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}><i className="fas fa-arrow-circle-left"></i> Previous</button>

                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next <i className="fas fa-arrow-circle-right"></i></button>
            </div>
            { this.state.loading && <Spinner/>}
            <div className="row my-4">
                { !this.state.loading && this.state.articles.map((element)=>{

                    return (<div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title?element.title.slice(0,90):""} description={element.description?element.description.slice(0,120):"read full article below"} imageUrl={element.urlToImage?element.urlToImage:"https://raw.githubusercontent.com/Shubham56-droid/Turbo-News-React-App/main/default/default_img.jpg"}
                    newsUrl={element.url?element.url:"/"}  author={element.author?element.author:"Unknown Author"} publishedAt={element.publishedAt?element.publishedAt:"today"} source={element.source.name?element.source.name:"Unknown Source"}
                    />
                    </div>
                    )
                })}
            </div>
            </div>
        )
    }
}

export default News
