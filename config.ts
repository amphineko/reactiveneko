import { UnifiedLoader } from './lib/unifiedLoader'
import { SteamPersonaNameLoader } from './lib/unifiedLoader/steam'

export const AppUnifiedLoaders = new UnifiedLoader({
    SteamPersonaName: new SteamPersonaNameLoader([
        'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=0AD6D96E1BF0A718C86C574AAADABC43&steamids=76561198013029151',
        'https://steam-api-proxy.stdnkmm.workers.dev/getPlayerSummaries?steamids=76561198013029151',
    ]),
})
