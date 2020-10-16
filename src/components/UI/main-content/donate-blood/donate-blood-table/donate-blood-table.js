import React from 'react'
import './donate-blood-table.css'

const DonateBloodTable = ({ donors }) => {

    return (
        <div className="DonateBloodTable">
            <table>
                <thead>
                    {donors !== null ?
                        (
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Age</th>
                                <th>Blood Type</th>
                                <th>Country</th>
                                <th>City</th>
                                <th style={{ minWidth: '150px', width: '150px' }}></th>
                            </tr>) :
                        (
                            <tr><th style={{ textAlign: 'center', fontSize: '15px' }}>No Data Available</th></tr>
                        )
                    }
                </thead>

                <tbody>
                    {
                        donors !== null ?
                            (
                                Object.keys(donors).map((index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{donors[index].info.name.last}</td>
                                            <td>{donors[index].info.name.first}</td>
                                            <td>{donors[index].info.age}</td>
                                            <td>{donors[index].info.bloodType}</td>
                                            <td>{donors[index].info.country}</td>
                                            <td>{donors[index].info.city}</td>
                                            <td> <a className="waves-effect waves-success btn"><i className="material-icons left">clean_hands</i>Request</a></td>
                                        </tr>
                                    )})
                            ) : null
                    }

                </tbody>
            </table >

        </div >

    )
}

export default DonateBloodTable