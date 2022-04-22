import { AppProps } from 'next/app'
import { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RedactedFont } from '../components/typography'

const App = ({ Component, pageProps }: AppProps) => {
    const queryClient = useMemo(() => new QueryClient(), [])

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
            <RedactedFont />
        </>
    )
}

export default App
