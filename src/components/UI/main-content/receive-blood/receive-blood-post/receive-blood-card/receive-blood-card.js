import React from 'react'

import './receive-blood-card.css'
import profile from '../../../../../../assets/image/ako.jpg'
const Card = (props) => {

    return (
        <div className="card-user">
            <div className="card-head">
                <img src={profile} className='circle profile-pic' />
                <div className="card-head-user">
                    <p className="user-name">Kurt Lupin Orioque</p>
                    <p>A+</p>
                </div>
            </div>
            <div className="card-description">
                {props.description}
            </div>

            <div className="card-footer">
                <button class="btn waves-effect waves-light btn-flat card-button" type="submit" name="action">
                     Email
                <i class="material-icons left">email</i>
                </button>
                <button class="btn waves-effect waves-light btn-flat     card-button" type="submit" name="action">
                     Message
                <i class="material-icons left">sms</i>
                </button>
            </div>

        </div>
    )
}

export default Card