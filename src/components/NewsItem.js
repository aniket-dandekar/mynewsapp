import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, url, source, author, pubDate } = this.props;
        if (imageUrl && imageUrl.charAt(imageUrl.length - 1) === '/') {
            // console.log( imageUrl.charAt(imageUrl.length - 1))
            imageUrl = imageUrl.slice(0, imageUrl.length - 1)
        }
        return (
            <div className="p-3">
                <div className="card">
                    <span className="badge bg-info" style={{ position: "absolute", right: "0px", borderRadius: "0.25rem" }}>By {source}</span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div className="d-flex flex-row-reverse">
                            <small style={{ fontSize: "0.6rem" }} className="text-muted">Publised on {new Date(pubDate).toGMTString()}, by {author ? author : "unknown"}</small>
                        </div>
                        <p className="card-text">{desc}</p>

                        <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem