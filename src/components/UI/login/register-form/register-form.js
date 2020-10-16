import React from 'react'
import { connect } from 'react-redux'
import './register-form.css'
import * as actions from  '../../../../store/actions'
const RegisterForm = props => {
    
    const bloodType = ['O+', 'O-', 'B+', 'B-', 'A+', 'A-', 'AB+', 'AB-']
    const types =['Donor', 'Receiver','Nuetral']
    const genders = ['Male', 'Female', 'Custom']

    return (
        <div className="register-form">
            <form onSubmit={props.clickedSubmit.bind()}>
                <input 
                 type='text' className='browser-default' 
                 value={props.profile.info.name.first}
                 onChange={props.changeFirstName.bind()} placeholder='first name' />
                <input type='text' className='browser-default'
                 value={props.profile.info.name.last}
                 onChange={props.changeLastName.bind()} placeholder='last name' />
                <input type='email' className='browser-default' onChange={props.changeEmail} value={props.auth.email} placeholder='email' />
                <input type='password' className='browser-default' onChange={props.changePassword} value={props.auth.password} placeholder='password' />
                <input type='password' className='browser-default' placeholder='Repeat Password' />
                <select className="browser-default" value={props.profile.info.gender} onChange={props.changeGender.bind()}>
                   <option value='' disabled> Gender</option>
                   {
                       genders.map((gender, index) => {
                           return <option key={index} value={gender}>{gender}</option>
                       })
                   }
                </select>
                <input type='text' className='browser-default' placeholder='Birthdate' />
                <select className='browser-default' value={props.profile.info.bloodType} onChange={props.changeBloodType.bind()}>
                    <option value='' disabled>Bloodtype</option>
                    {
                        bloodType.map((bloods, index) =>{
                            return <option key={index} value={bloods}>{bloods} </option>
                        })
                    }
                </select>
                <select className="browser-default" value={props.profile.info.action} onChange={props.changeAction.bind()}>
                    <option value='' disabled>Action</option>
                    {
                        types.map((type,index) => {
                            return <option key={index} value={type}>{type}</option>
                        })
                    }
                </select>
                <button className="btn waves-effect waves-light" type="submit" name="action">Create Account</button>

            </form>
            <hr />
            <button onClick={props.loginBack} className="create-account waves-effect waves-light btn-small">Go to Login</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        profile: state.profile,
        auth: state.auth,
        showRegister:  state.ui.showRegister

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        clickedSubmit: (event) => dispatch(actions.profileRegister(event)),
        changeFirstName: (event) =>  dispatch(actions.profileChangeFirstName(event)),
        changeLastName: (event) => dispatch(actions.profileChangeLast(event)),
        changeAction: (event) => dispatch(actions.profileChangeAction(event)),
        changeBirthDate:(event) => dispatch(actions.profileChangeBirthDate(event)),
        changeBloodType: (event) => dispatch(actions.profileChangeBloodType(event)),
        changeGender: (event) => dispatch(actions.profileChangeGender(event)),
        changeEmail: (event) => dispatch(actions.authChangeEmail(event)),
        changePassword: (event) => dispatch(actions.authChangePassword(event)),
        loginBack: () => dispatch(actions.loginBackClicked())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)