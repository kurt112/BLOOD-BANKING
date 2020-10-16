import * as actionTypes from '../actionType'

export const profileClicked = (users) => {
    return {
        type: actionTypes.PROFILE_CLICKED,
        users:users
    }
}

export const profileOut = () =>{
    return{
        type: actionTypes.PROFILE_OUT
    }
}

export const profileAuth = () => {
    return {
        type: actionTypes.PROFILE_AUTH
    }
}

export const profileRegister = (event) =>{
    return {
        type: actionTypes.PROFILE_SIGN_UP,
        event,
    }
}

// **************************************************** change handler in register form  ************************************

export const profileChangeFirstName = (event) =>{
    return {
        type: actionTypes.PROFILE_CHANGE_FIRSTNAME,
        event
    }
}

export const profileChangeLast = (event) =>{
    return {
        type: actionTypes.PROFILE_CHANGE_LASTNAME,
        event
    }
}

export const profileChangeCountry = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_COUNTRY,
        event
    }
}

export const profileChangeCity = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_CITY,
        event
    }
}

export const profileChangeBloodType = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_BLOODTYPE,
        event
    }
}

export const profileChangeStatus = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_STATUS,
        event
    }
}
export const profileChangeAction = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_ACTION,
        event
    }
}

export const profileChangeIllness = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_ILLNESS,
        event
    }
}

export const profileChangeDescription= (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_DESCRIPTION,
        event
    }
}

export const profileChangePhoneNumber = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_PHONENUMBER,
        event
    }
}

export const profileChangeBirthDate = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_BIRTHDATE,
        event
    }
}

export const profileChangeGender = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_GENDER,
        event
    }
}

export const profileChangeBloodReceiveStart = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_BLOOD_RECEIVE_START,
        event
    }
}

export const profileChangeBloodReceiveEnd = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_BLOOD_RECEIVE_END,
        event
    }
}
export const profileChangeLinkFacebook = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_LINK_FACEBOOK,
        event
    }
}

export const profileChangeLinkTwitter = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_LINK_TWITTER,
        event
    }
}
export const profileChangeLinkInstagram = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_LINK_INSTAGRAM,
        event
    }
}

export const profileChangeLinkLinkedIn = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_LINK_LINKEDIN,
        event
    }
}

export const profileChangeLinkGoogle = (event) =>{
    return{
        type: actionTypes.PROFILE_CHANGE_LINK_GOOGLE,
        event
    }
}
