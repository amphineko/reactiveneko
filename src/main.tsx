/// <reference types="styled-jsx" />
/// <reference types="vite/client" />

import React from 'react'
import ReactDOM from 'react-dom/client'
import { IndexPage } from '.'
import { RedactedFont } from './components/typography'

function Main() {
    return (
        <>
            <IndexPage />
            <RedactedFont />
        </>
    )
}

const rootElement = document.getElementById('root')

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>,
    )
}
