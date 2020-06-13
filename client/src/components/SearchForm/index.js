import React from 'react'
import  "./search.css";

export default function SearchForm(props) {
    return (
        <div className="mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <form>
                                <h4 className="text-center">Enter  book's name</h4>
                                <input
                                value={props.searchField}
                                name="searchField" 
                                type="text" 
                                className="form-control"
                                onChange={props.handleInputChange}
                                
                                ></input>
                                <br></br>
                                <button 
                                className="btn btn-info btn-block"
                                onClick={props.handleSearch}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}
