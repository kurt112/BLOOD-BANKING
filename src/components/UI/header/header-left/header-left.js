import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../../store/actions/index'



import HamBurger from '../../../utility/hamburger/Hamburger'
import './header-left.css'
const HeaderLeft = props => {
    return (
        <div className="Left">
            <HamBurger clicked={props.onHamburgerClicked}/>
            {/* <input type='text'/> */}
            {/* <input type='text' placeholder="Search"></input> */}
        </div>
    )
}

const mapStateToProps = state => {
     return{
         hamburgerState: state.ui.sideBarShow
     }
}

const mapDispatchToProps = dispatch => {
    return {
        onHamburgerClicked: () => dispatch(actions.hamburgerClicked())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderLeft)