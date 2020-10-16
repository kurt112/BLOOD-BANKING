import React from 'react'
import Header from '../../UI/header/Header'
import MainContent from '../../UI/main-content/main-content'
import './content.css'
const Content = () => {
    return (
        <div className='content'>
            <Header />
            <MainContent />
        </div>

    )
}

export default React.memo(Content)