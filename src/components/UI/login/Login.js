import React from 'react'
import './Login.css'
import LoginForm from './login-form/login-form'
import RegisterForm from './register-form/register-form'
import { connect } from 'react-redux'
const Login = ({showRegister}) =>{
  
    return (
        <div className="login">
            <div className="login-container">
              
                {showRegister === false? 
                
                <LoginForm/>: 
                
                <RegisterForm/>}
            </div>
        </div>

    )
}

const mapStateToProps = (state) =>{
    return {
        showRegister:  state.ui.showRegister
    }
}


export default connect(mapStateToProps)(Login)