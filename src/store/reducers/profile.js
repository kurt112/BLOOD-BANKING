import * as actionType from '../actionType'
import { updateObject } from '../utility/store/updateObject'

const initState = {
    info: {
        uid: '',
        name: {
            first: '',
            last: ''
        },
        age: 0,
        country: 'Empty',
        city: 'Empty',
        bloodType: '',
        action: '',
        illness: 'Empty',
        description: 'Empty',
        phoneNumber: 'Empty',
        birthDate: 'Empty',
        gender: '',
        status: 'Empty',
    },
    bloodReceiveStart: 'Empty',
    bloodReceiveEnd: 'Empty',
    bloodReceives: {
        id: ['']
    },
    bloodGive: {
        id: ['']
    },
    link: {
        facebookLink: 'Empty',
        twitterLink: 'Empty',
        instagramLink: 'Empty',
        linkedIn: 'Empty',
        googleLink: 'Empty',
    },
}

const registerProfile = (state, action) => {
    action.event.preventDefault();
    return state
}

const setProfile = (state, action, id) => {

    return updateObject(state, {
        id: id,
        info: {
            name: {
                first: action.info.name.first,
                last: action.info.name.last
            },
            age: action.info.age,
            country: action.info.country,
            city: action.info.city,
            bloodType: action.info.bloodType,
            action: action.info.action,
            illness: action.info.illness,
            description: action.info.description,
            phoneNumber: action.info.phoneNumber,
            birthDate: action.info.birthDate,
            gender: action.info.gender,
            status: action.info.status
        },
        bloodReceiveStart: action.bloodReceiveStart,
        bloodReceiveEnd: action.bloodReceiveEnd,
        bloodReceives: {
            id: action.bloodReceives.id
        },
        bloodGive: {
            id: action.bloodGive.id
        },
        link: {
            facebookLink: action.facebookLink,
            twitterLink: action.twitterLink,
            instagramLink: action.instagramLink,
            linkedIn: action.linkedIn,
            googleLink: action.googleLink,
        },
    })
}

// ==================================================== change handler 

const setFirstName = (state, action) => {
    const name = updateObject(state.info.name, {first:action.event.target.value})
    const info = updateObject(state.info, {name})
    return updateObject(state, {info})
}

const setLastName = (state, action) => {
    const name = updateObject(state.info.name, {last: action.event.target.value})
    const info = updateObject(state.info, {name})
    return updateObject(state, {info})
}

const setCountry = (state, action) => {
    const info = updateObject(state.info, {country: action.event.target.value})
    return updateObject(state, {info})
}

const setCity = (state, action) => {
    const info = updateObject(state.info, {city: action.event.target.value})
    return updateObject(state, {info})
}

const setBloodType = (state, action) => {
    const info = updateObject(state.info, {bloodType: action.event.target.value})
  
    return updateObject(state, {info})
}

const setStatus = (state, action) => {
    const info = updateObject(state.info, {status: action.event.target.value})
    return updateObject(state, {info})
}
const setAction = (state, action) => {
    const info = updateObject(state.info, {action: action.event.target.value})
    return updateObject(state, {info})
}

const setIllness = (state, action) => {
    const info = updateObject(state.info, {illness: action.event.target.value})
    return updateObject(state, {info})
}

const setDescription = (state, action) => {
    const info = updateObject(state.info, {description: action.event.target.value})
    return updateObject(state, {info})
}

const setPhoneNumber = (state, action) => {
    const info = updateObject(state.info, {phoneNumber: action.event.target.value})
    return updateObject(state, {info})
}

const setBirthDate = (state, action) => {
    const info = updateObject(state.info, {birthDate: action.event.target.value})
    return updateObject(state, {info})
}

const setGender = (state, action) => {
    const info = updateObject(state.info, {gender: action.event.target.value})
    return updateObject(state, {info})
}

const setBloodReceiveStart = (state, action) => {
    const updatedState = updateObject(state, {bloodReceiveStart: action.event.target.value})
    return updateObject(state, {updatedState})
}

const setBloodReceiveEnd = (state, action) => {
    const updatedState = updateObject(state.info, {bloodReceiveEnd: action.event.target.value})
    return updateObject(state, {updatedState})
}

// not finish links
const setLinkFacebook = (state, action) => {
    const link = updateObject(state.link, {illness: action.event.target.value})
    return updateObject(state, {})
}

const setLinkTwitter = (state, action) => {
    const link = updateObject(state.link, {illness: action.event.target.value})
    return updateObject(state, {})
}

const setLinkInstagram = (state, action) => {
    const link = updateObject(state.link, {illness: action.event.target.value})
    return updateObject(state, {})
}

const setLinkedin = (state, action) => {
    const link = updateObject(state.link, {illness: action.event.target.value})
    return updateObject(state, {})
}

const setGoogle = (state, action) => {
    const link = updateObject(state.link, {googleLink: action.event.target.value})
    return updateObject(state, {link})
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.PROFILE_CLICKED:
            return action.users === undefined ? state : setProfile(state, action.users['-MHgVEdqOBy2Jc1bkbTQ'], '-MHgVEdqOBy2Jc1bkbTQ')
        case actionType.PROFILE_OUT: return null
        case actionType.PROFILE_SIGN_UP: {
            // console.log("the action ") 
            // console.log(action)
            return registerProfile(state, action)
        }

        // change handler single
        case actionType.PROFILE_CHANGE_FIRSTNAME: return setFirstName(state, action)
        case actionType.PROFILE_CHANGE_LASTNAME: return setLastName(state, action)
        case actionType.PROFILE_CHANGE_COUNTRY: return setCountry(state, action)
        case actionType.PROFILE_CHANGE_CITY: return setCountry(state, action)
        case actionType.PROFILE_CHANGE_BLOODTYPE: return setBloodType(state, action)
        case actionType.PROFILE_CHANGE_STATUS: return setStatus(state, action)
        case actionType.PROFILE_CHANGE_ILLNESS: return setIllness(state, action)
        case actionType.PROFILE_CHANGE_DESCRIPTION: return setDescription(state, action)
        case actionType.PROFILE_CHANGE_PHONENUMBER: return setPhoneNumber(state, action)
        case actionType.PROFILE_CHANGE_BIRTHDATE: return setBirthDate(state, action)
        case actionType.PROFILE_CHANGE_GENDER: return setGender(state, action)
        case actionType.PROFILE_CHANGE_ACTION: return setAction(state,action)
        case actionType.PROFILE_CHANGE_BLOOD_RECEIVE_START: return setBloodReceiveStart(state, action)
        case actionType.PROFILE_CHANGE_BLOOD_RECEIVE_END: return setBloodReceiveEnd(state, action)
        case actionType.PROFILE_CHANGE_LINK_FACEBOOK: return setLinkFacebook(state, action)
        case actionType.PROFILE_CHANGE_LINK_TWITTER: return setLinkTwitter(state, action)
        case actionType.PROFILE_CHANGE_LINK_INSTAGRAM: return setLinkInstagram(state, action)
        case actionType.PROFILE_CHANGE_LINK_LINKEDIN: return setLinkedin(state, action)
        case actionType.PROFILE_CHANGE_LINK_GOOGLE: return setGoogle(state, action)
        case actionType.PROFILE_CHANGE_CITY: return setCity(state, action)
        default: return state
    }
}

export default reducer


// blood data db

 