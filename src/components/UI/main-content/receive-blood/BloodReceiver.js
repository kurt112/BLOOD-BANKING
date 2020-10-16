import React, { Fragment, useEffect } from 'react'
import BloodReceiveNav from './receive-blood-nav/receive-blood-nav'
import BloodReceiveTable from './receive-blood-table/receive-blood-table'
import Loader from '../../loading/loading'
import * as actions from '../../../../store/actions'

import './BloodReceiver.css'
import { connect } from 'react-redux'
import Post from './receive-blood-post/receive-blood-post'
import PostFilter from './receive-blood-post-filter/receive-blood-post-filter'
const BloodReceiver = ({ dropDownChange, loadData, bloodReceiversData }) => {

    useEffect(() => {
        loadData();
    }, [])

    const Table = bloodReceiversData.tableLoading === true? (<Loader/>):  (
        <div className="Post-Content">
            <Post/>
            <PostFilter/>
        </div>
    )//<BloodReceiveTable receivers={bloodReceiversData.data}

    const elements = bloodReceiversData.loading === true ? (<Loader />) : (<Fragment>
        {/* <BloodReceiveNav
            change={dropDownChange}
            value={bloodReceiversData.currentBlood}
            bloods={bloodReceiversData.availBlood} /> */}
            {Table}
        {/* <div className="blood-receive-pagination">
            <ul className="pagination">
                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className="active"><a href="#!">1</a></li>
                <li className="waves-effect"><a href="#!">2</a></li>
                <li className="waves-effect"><a href="#!">3</a></li>
                <li className="waves-effect"><a href="#!">4</a></li>
                <li className="waves-effect"><a href="#!">5</a></li>
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
        </div> */}
    </Fragment>)


    return elements
}


const mapStateToProps = (state) => {
    return {
        bloodReceiversData: state.bloodReceivers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(actions.bloodReceiverLoadData()),
        dropDownChange: (event) => dispatch(actions.bloodReceiverDropdownChange(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloodReceiver)