/// <reference types="styled-jsx" />

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IndexPage } from '.'
import { RedactedFont } from './components/typography'

function Main() {
    const queryClient = new QueryClient()
    const steamProps = {
        serverSideName: '1kar0s',
        urls: [],
    }

    return (
        <QueryClientProvider client={queryClient}>
            <IndexPage deployTarget="demo" steam={steamProps} />
            <RedactedFont />
        </QueryClientProvider>
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
