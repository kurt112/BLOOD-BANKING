import React, { Fragment } from 'react'
import './login-form.css'
import * as actions from '../../../../store/actions'
import { connect } from 'react-redux'
const LoginForm = (props) => {

    return (
        <Fragment>
            <div className="login-text">
                <h1>By creating account you can save lives or your life can be save.</h1>
            </div>
            <div className="login-form">
                <form onSubmit={props.login.bind()}>
                    <input type='text' className='browser-default' value={props.auth.email} onChange={props.changeEmail.bind()} placeholder="Enter email" />
                    <input type='password' className='browser-default' value={props.auth.password} onChange={props.changePassword.bind()} placeholder="Enter Password" />
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                    <a href="#" className="forgot-password">forgot password?</a>
                </form>
                <hr />
                <button onClick={props.showRegister} className="create-account waves-effect waves-light btn-small">Create Account</button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        showRegister: state.ui.showRegister
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (event) => dispatch(actions.authLogin(event)),
        changeEmail: (event) => dispatch(actions.authChangeEmail(event)),
        changePassword: (event) => dispatch(actions.authChangePassword(event)),
        showRegister: () => dispatch(actions.registerClicked())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)