import React from 'react'

const DonateBloodNav = ({ value, change, bloods }) => {
    return (
        <div className="nav-table">
            <div className="nav-table-items-left">
                <select className="browser-default" value={value} onChange={change.bind()}>
                    {
                        bloods.map((blood, index) => {
                            return <option
                                key={index}
                                value={blood}>{blood}
                            </option>
                        })
                    }
                </select>

            </div>
            <div className="nav-table-items-right">
                <input type="text" placeholder="Search Anything" className="browser-default" />
            </div>
        </div>
    )
}

export default DonateBloodNav