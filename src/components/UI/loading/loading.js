import React from 'react'
import './loading.css'

const Loader = () => (
    <div className="parent-loading">
        <div className="loader">Loading...</div>
        <p>Fetcing Data from database ...</p>
    </div>
)

export default Loader