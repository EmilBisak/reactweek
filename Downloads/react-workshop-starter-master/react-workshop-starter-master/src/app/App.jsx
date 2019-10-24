import React from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ShowsPage from './show/ShowsPage'
import AppState from './state/AppState'

const App = () => (
    <AppState>
        <Header title="Shows App" />
        <ShowsPage />
        <Footer />
    </AppState>
)

export default App
