import React, { useState, useEffect } from 'react';
import { showService } from '../../services/showService';

const SingleShow = (props) => {
    console.log('props :', props.match.params.showId);

    const [show, setShow] = useState(null)

    useEffect(() => {
        showService.fetchShow(props.match.params.showId).then((show) => {
            setShow(show)
            console.log('show**** :', show);
        })
    }, [])

    if (!show) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="row">
            <div className="col s12 m6">
                <img src={show.image.original} style={{ width: "90%" }} />
            </div>
            <div className="col s12 m6">
                <h1>{show.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            </div>
        </div>
    );
};

export default SingleShow;