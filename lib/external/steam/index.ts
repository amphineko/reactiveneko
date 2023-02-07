import { useQuery } from 'react-query'

const queryKey = 'd257d14988e43e79db261655b965ed43' // random string

export const fetchSteamPersonaName = async (urls: string[]) => {
    const errors = []

    for (const url of urls) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status} ${response.statusText}`)
            }

            const result = (await response.json()) as {
                response?: { players?: { personaname?: string }[] }
            }
            const personaName = result.response?.players?.[0]?.personaname

            if (typeof personaName !== 'string') {
                throw new Error('result.response?.players?.[0]?.personaname is not a string')
            }

            return personaName
        } catch (e) {
            errors.push(e)
        }
    }

    throw new Error(
        `Failed to read Steam API from any of the provided URLs: ${urls.join(', ')}\n` +
            `${errors.map((error: Error) => error?.toString()).join('\n')}`
    )
}

export const useSteamPersonaName = (urls?: string[], initialData?: string) => {
    return useQuery([queryKey], async () => await fetchSteamPersonaName(urls ?? []), {
        cacheTime: Infinity,
        initialData,

        // don't refetch as usernames are not expected to change often
        refetchInterval: false,
        refetchOnWindowFocus: false,
    })
}
