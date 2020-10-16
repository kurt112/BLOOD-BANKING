import * as actions from '../../actionType'
import { updateObject } from '../../utility/store/updateObject'

const init_state = {
    startPage: 1,
    endPage: 1,
    data: {},
    availBlood: [],
    currentBlood: '',
    loading: true,
    tableLoading: true
}

const loadData = (state) => {
    
    return state;
}

const setLoading = (state) => {
    return updateObject(state,{tableLoading: true})
}

const loadDataSuccess = (state, action) =>{
    state = updateObject(state, {tableLoading: false})
    state = updateObject(state, {loading: false})
    state = updateObject(state, {data: action.data})
    return state
}

const loadDataFail = (state, action) =>{
    return state
}

const loadAvailBlood = (state,action) => {
    state = updateObject(state, {currentBlood: action.data[0]})
    return updateObject(state,{availBlood: action.data});
}

const currentBloodChange = (state,action) =>{
    
    return updateObject(state,{currentBlood: action.event.target.value})
    
}

const reducer = (state = init_state, action) => {
    switch(action.type){
        case actions.BLOOD_DONOR_TABLE_LOAD: return loadData(state)
        case actions.BLOOD_DONOR_TABLE_LOAD_SUCCESS: return loadDataSuccess(state,action)
        case actions.BLOOD_DONOR_TABLE_LOAD_FAIL: return loadDataFail(state,action)
        case actions.BLOOD_DONOR_TABLE_LOAD_DROPDOWN: return loadAvailBlood(state,action)
        case actions.BLOOD_DONOR_TABLE_CHANGE_DROPDOWN: return currentBloodChange(state,action)
        case actions.BLOOD_DONOR_TABLE_LOADING: return setLoading(state)
        default: return state
    }
}


export default reducer