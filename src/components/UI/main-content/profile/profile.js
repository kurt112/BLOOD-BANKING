import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import picture from '../../../../assets/image/ako.jpg'
import * as actions from '../../../../store/actions/'
import Loader from '../../loading/loading'
import './profile.css'

const Profile = props => {
    
     useEffect(() =>{
        props.profileClicked()
        return () =>{
            props.profileOut()
        }
    }, [])
    return props.profile === null ? <Loader /> : ((
        <div className="Profile">
            <div className="row">
                <div className="col m3 left">
                    <div className="picture_container">
                        <img src={picture} alt="" className="circle responsive-img" />
                    </div>
                    <hr />
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-google"></a>
                    <hr />
                    <br />
                    <p><b>Description:</b></p>
                    <br />
                    <p> {props.profile.info.description} </p>
                </div>
                <div className="col m9 s12 right">
                    <h4>{props.profile.info.name.first + ' ' +props.profile.info.name.last}<span> <a className="btn-floating  waves-effect waves-light red"><i className="material-icons">mode_edit</i></a>
                    </span></h4>
                    <hr />
                    <h5><b>Age:</b> {props.profile.info.age}</h5>
                    <hr />
                    <h5><b>Country:</b> {props.profile.info.country}</h5>
                    <hr />
                    <h5><b>City:</b>  {props.profile.info.city}</h5>
                    <hr />
                    <h5><b>Blood Type:</b> {props.profile.info.bloodType}</h5>
                    <hr />
                    <h5><b>Status:</b> {props.profile.info.status}</h5>
                    <hr />
                    <h5><b>Illness:</b> {props.profile.info.illness}</h5>
                    <hr />
                    <h5><b>Blood Span Need:</b> {props.profile.bloodReceiveStart}</h5>
                    <hr />

                </div>

            </div>
        </div>
    ))
}
const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const mapDisptachToProps = dispatch =>{
    return {
        profileClicked: () => dispatch(actions.profileClicked()),
        profileOut: () => dispatch(actions.profileOut())
    }
}

export default connect(mapStateToProps,mapDisptachToProps)(Profile)//React.memo()