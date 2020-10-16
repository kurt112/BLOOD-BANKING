import React, { Fragment, useEffect } from 'react'
import DonateBloodNav from './donate-blood-nav/donate-blood-nav'
import DonateBloodTable from './donate-blood-table/donate-blood-table'
import './BloodDonor.css'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions'
import Loader from '../../loading/loading'
const BloodDonor = ({ dropDownChange, loadData, bloodDonorsData }) => {

    useEffect(() => {
        loadData(bloodDonorsData.currentBlood)
    }, [])

    const Table =  bloodDonorsData.tableLoading === true ? (<Loader/>): (<DonateBloodTable donors={bloodDonorsData.data} />)

    const element = bloodDonorsData.loading === true ? (<Loader />) : (<Fragment>
        <DonateBloodNav
            value ={bloodDonorsData.currentBlood}
            change={dropDownChange}
            bloods={bloodDonorsData.availBlood} />
            {Table}
            {Table}
        <div className="blood-donor-pagination">
            <ul className="pagination">
                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className="active"><a href="#!">1</a></li>
                <li className="waves-effect"><a href="#!">2</a></li>
                <li className="waves-effect"><a href="#!">3</a></li>
                <li className="waves-effect"><a href="#!">4</a></li>
                <li className="waves-effect"><a href="#!">5</a></li>
                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
    </Fragment>)

    return element
}

const mapStateToProps = (state) => {
    return {
        bloodDonorsData: state.bloodDonors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (data) => dispatch(actions.bloodDonorLoadData(data)),
        dropDownChange: (event) => dispatch(actions.bloodDonorDropdownChange(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloodDonor)