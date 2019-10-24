import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router'

import ShowsGrid from './ShowsGrid'
import SingleShow from './SingleShow'
import AboutPage from '../components/AboutPage'

const ShowsPage = () => {
    return (
        <main className="container" >
            <Switch>
                <Route path="/about" component={AboutPage} />
                <Route path="/show/:showId" component={SingleShow} />
                <Route exact path="/" component={ShowsGrid} />
                <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
        </main>
    )
}

export default ShowsPage
