import React from 'react'
import { Link } from 'react-router-dom'

const ShowCard = ({ show }) => {
    return (

        <div className="col s12 m3">
            <Link to={`/show/${show.id}`}>
                <div className="card">
                    <div className="card-image">
                        <img src={show.image.medium} />
                        {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
                    </div>
                    <div className="card-content">
                        <p className="card-title">{show.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ShowCard
