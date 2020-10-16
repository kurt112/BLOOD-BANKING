import React, { Fragment } from 'react'
import './receive-blood-post-filter.css'
const Filter = () => {
    return (
        <div className="Filter">
            <p className="title">Filter Data: </p>
            <hr />
            <div className='filter-data-blood'>
                <p>Blood Type: </p>
                <select className="browser-default filter-select" value=''>
                    <option value='' disabled>All</option>
                </select>
            </div>
            <div className='filter-data-blood'>
                <p>Search Name: </p>
                <input type='text' placeholder='Search Name'></input>
                <button class="btn waves-effect waves-light" type="submit" name="action">Search<i class="material-icons right">search</i>
                </button>
            </div>
            <p className="title">Become Sponsor</p>
            <div className="sponsor-description">
                <p>
                    m Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includ
                </p>
                <a href='#' class="btn waves-effect waves-light" type="submit" name="action">Become Sponsor<i class="material-icons right">shopping_cart</i>
                </a>
            </div>
            <div className='copyright'>
                <p >This project is create by KLO</p>
            </div>
        </div>
    )
}

export default Filter;