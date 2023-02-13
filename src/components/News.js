import React, { Component } from 'react'
// import BottomNav from './BottomNav';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        apikey: PropTypes.string,
        totArticls: PropTypes.number
    }
    static defaultProps = {
        country: 'in',
        category: 'general',
        apikey: 'f450353493e64eba9154ae9b7cd9bf7f',
        totArticls: 15
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalResults: null,
            totalPages: 1

        }
        document.title = `NewsBot AI - ${this.capitalizeFirstLetter(this.props.category)} Headlines`;
    }

    fetchNewsArticles = async (tPage) => {
        this.props.cProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${tPage}&pageSize=${this.props.totArticls}`;
        this.props.cProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.cProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            totalPages: Math.ceil(parsedData.totalResults / this.props.totArticls)
        })
        this.props.cProgress(100);

    }
    async componentDidMount() {
        this.fetchNewsArticles(this.state.page);
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.totArticls}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            // totalResults: parsedData.totalResults,
            page: this.state.page + 1,
            // totalPages: Math.ceil(parsedData.totalResults / this.props.totArticls)
        })
    }

    render() {
        return (
            <>
                <h1 className="text-center">Top {this.capitalizeFirstLetter(this.props.category)} headlines - NewsBot AI</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container my-3">

                        <div className="row my-2">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} url={element.url}
                                        source={element.source.name} author={element.author} pubDate={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
                {/* <BottomNav handlenav={this.handleBottomNav} page={this.state.page} lPage={this.state.totalPages} /> */}
            </>
        )
    }
}

export default News