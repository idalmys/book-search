import React, { Component } from 'react'
import API from "../utils/API"

export default class BookSaved extends Component {
    state = {
        books: [],
        message: ""
    }

    componentDidMount = () => {
        API.getSavedBooks()
            .then(res => {

                this.setState({
                    books: res.data,

                })
            })
    }

    deleteBook = id => {
        API
            .deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err));
    }
  

    render() {

            return (
                <div className="container">
                    <h1 className="nodata mt-4"> DATA SAVED</h1>
                    {this.state.books.map(books => {
                        
                        let bookInfo = books;
                        return(
                            <div className="card mb-3 mt-4 container" key={books._id} >
                                <div className="card-header bg-info">
                                    <h5>{bookInfo.title}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={bookInfo.img}
                                                alt="Book" />
                                        </div>
                                        <div className="col-md-8">
                                            <p>{bookInfo.description}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>By : {(bookInfo.authors) ? bookInfo.authors.join("  ,  ") : "Annonymous"}</p>
                                    </div>
                                    <div className="row">

                                        <a href={bookInfo.link} target="_blank" rel="noopener noreferrer">
                                            <button className=" btn btn-info">
                                                View Book
                                            </button>
                                        </a>

                                        <button
                                            className="btn btn-secondary "
                                            id={books._id}
                                            onClick={() => this.deleteBook(books._id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                        })
                    }
                </div>
                    )

                }         
      
    }
