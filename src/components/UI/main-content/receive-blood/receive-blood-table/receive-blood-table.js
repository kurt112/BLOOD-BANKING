import React from 'react'
import './receive-blood-table.css'
const ReceiveBloodTable = ({ receivers }) => {
    console.log(receivers === null)
    return (
        <div className="ReceiveBloodTable">

            <table>
                <thead>
                    {receivers !== null ?
                        (
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Age</th>
                                <th>Blood Type</th>
                                <th>Illness</th >
                                <th>Country</th>
                                <th>City</th>
                                <th>Date Need</th>
                                <th >Date Duration</th>
                                <th style={{ minWidth: '150px', width: '150px' }}></th>
                            </tr>
                        )
                        :<tr><th style={{textAlign: 'center', fontSize:'15px'}}>No Data Available</th></tr>
                    }
                </thead>

                <tbody>
                    {receivers !== null ? (
                        Object.keys(receivers).map((index) => {
                            return (
                                <tr key={index}>
                                    <td>{receivers[index].info.name.last}</td>
                                    <td>{receivers[index].info.name.first}</td>
                                    <td>{receivers[index].info.age}</td>
                                    <td>{receivers[index].info.bloodType}</td>
                                    <td>{receivers[index].info.illness === 'Empty' ? 'NAN' : receivers.info.illness}</td>
                                    <td>{receivers[index].info.country}</td>
                                    <td>{receivers[index].info.city}</td>
                                    <td>{receivers[index].bloodReceiveStart}</td>
                                    <td>{receivers[index].bloodReceiveEnd}</td>
                                    <td style={{ textAlign: 'center' }}> <a className="waves-effect waves-success btn"><i className="material-icons left">clean_hands</i>Donate</a></td>
                                </tr>
                            )
                        })
                    ) : null}
                </tbody>
            </table>

        </div>

    )
}

export default ReceiveBloodTable