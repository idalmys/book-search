import React, { Component } from 'react'
import API from "../utils/API";
import SearchForm from "../components/SearchForm"
export default class BookSearch extends Component {


    state = {

        searchField: "",
        books: [],
        message: ""
    }
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({ searchField: event.target.value })
    }

    handleSearch = (event) => {
        event.preventDefault();

        let title = this.state.searchField;
        API.getNewBooks(title)
            .then(res => {

                console.log(res.data.items);

                this.setState({

                    books: res.data.items,
                    searchField: ""
                });

            })
            .catch(err => console.log(err));


    }

    handleBtnSaved = (event) => {
        event.preventDefault()
        let saveBook = this.state.books.filter(book => book.id === event.target.id)
        const BookInfo = saveBook[0].volumeInfo
        const newbook = {
            title: BookInfo.title,
            authors: BookInfo.authors,
            description: BookInfo.description,
            img: BookInfo.imageLinks.smallThumbnail,
            link: BookInfo.canonicalVolumeLink
        }
        console.log(newbook)


        API.saveBook(newbook)
            .then(
                this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    handleSearch={this.handleSearch}
                    searchField={this.state.searchField}
                />
                {
                    this.state.books.map(books => {
                        const bookInfo = books.volumeInfo;
                        console.log("Result", bookInfo)
                        return (
                            <div className="card mb-3 mt-2 container" key={books.id} >
                                <div className="card-header bg-info">
                                    <h5>{bookInfo.title}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            {(bookInfo.imageLinks.smallThumbnail) ?

                                                <img src={
                                                    // if smallthubmail exists on this.props.img use that else if thumbnail exists on this.props.img use that else leave src empty
                                                    (bookInfo.imageLinks.smallThumbnail) ? bookInfo.imageLinks.smallThumbnail :
                                                        (bookInfo.imageLinks.thumbnail) ? bookInfo.imageLinks.thumbnail : ""
                                                } alt="book cover" /> : <img src="" alt="No images founded"/>
                                            }

                                        </div>
                                        <div className="col-md-8">
                                            <p>{bookInfo.description}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>By : {(bookInfo.authors) ? bookInfo.authors.join("  ,  ") : "Annonymous"}</p>
                                    </div>
                                    <div className="row">

                                        <a href={bookInfo.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">
                                            <button className=" btn btn-info">
                                                View Book
                                        </button>
                                        </a>

                                        <button
                                            className="btn btn-secondary "
                                            id={books.id}
                                            onClick={this.handleBtnSaved}>Saved
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
