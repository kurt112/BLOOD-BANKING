import React from 'react'
const ReceiveBloodNav = ({value,change ,bloods }) => {
    console.log(bloods)
    return (
        <div className="nav-table">
            <div className="nav-table-items-left">
                <select className="browser-default" value={value} onChange={change.bind()}>
                    {
                        bloods.map((blood, index) => {
                            return <option key={index} value={blood}>{blood}</option>
                        })
                    }
                </select>
            </div>
            <div className="nav-table-items-right">
                <input type="text" placeholder="Search Anything" className="browser-default" />

                {/* <input type="text" placeholder="Search Name" className="browser-default" /> */}

                {/* <button className="waves-effect waves-light btn" >dasdas<i className="material-icons left">cloud</i></button> */}

            </div>
        </div>
    )
}

export default ReceiveBloodNav