import React, { useState, useEffect } from 'react'
import { showService } from '../../services/showService'
import ShowCard from './ShowCard';

const ShowsGrid = () => {

    const [shows, setShows] = useState([])

    useEffect(() => {
        showService.fetchShows().then((shows) => {
            setShows(shows)
        })
    }, [])

    return (
        <div className="row">
            {
                shows.map(show => (
                    <ShowCard key={show.id} show={show} />
                ))
            }
        </div>
    )
}

export default ShowsGrid
