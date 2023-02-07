import { AbstractLoader } from '.'

interface SteamApiResponse {
    response?: { players?: { personaname?: string }[] }
}

export class SteamPersonaNameLoader extends AbstractLoader<string> {
    private _urls: string[]

    /**
     * @param steamId 64-bit Steam ID to return the persona name for
     */
    constructor(urls: string[]) {
        super()
        this._urls = urls
    }

    protected async fetch(): Promise<string> {
        for (const url of this._urls) {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }

                const result = (await response.json()) as SteamApiResponse
                const personaName = result.response?.players?.[0]?.personaname

                if (typeof personaName === 'string') {
                    return personaName
                }
            } catch (e) {
                console.error(`Failed to fetch Steam persona name from ${url}`, e)
            }
        }

        throw new Error('Failed to fetch Steam persona name from any of the provided URLs')
    }
}
