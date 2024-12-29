import RedactedOtf from '../../assets/fonts/redacted/otf/RedactedScript-Bold.otf'
import RedactedTtf from '../../assets/fonts/redacted/ttf/RedactedScript-Bold.ttf'
import RedactedWoff2 from '../../assets/fonts/redacted/woff/RedactedScript-Bold.woff2'
import IBMPlexMonoBoldWoff from '@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Bold.woff'
import IBMPlexMonoBoldWoff2 from '@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Bold.woff2'
import IBMPlexMonoLightWoff from '@ibm/plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Light.woff'
import IBMPlexMonoLightWoff2 from '@ibm/plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Light.woff2'

export const IBMPlexMono = () => (
    <style jsx global>
        {`
            @font-face {
                font-family: 'IBM Plex Mono';
                font-style: normal;
                font-weight: 700;
                src:
                    local('IBM Plex Mono Bold'),
                    local('IBMPlexMono-Bold'),
                    url('${IBMPlexMonoBoldWoff2}') format('woff2'),
                    url('${IBMPlexMonoBoldWoff}') format('woff');
            }

            @font-face {
                font-family: 'IBM Plex Mono';
                font-style: normal;
                font-weight: 300;
                src:
                    local('IBM Plex Mono Light'),
                    local('IBMPlexMono-Light'),
                    url('${IBMPlexMonoLightWoff2}') format('woff2'),
                    url('${IBMPlexMonoLightWoff}') format('woff');
            }
        `}
    </style>
)

export const RedactedFont = () => (
    <style jsx global>
        {`
            @font-face {
                font-family: 'Redacted';
                font-weight: bold;
                src:
                    url('${RedactedOtf}') format('woff2'),
                    url('${RedactedTtf}') format('opentype'),
                    url('${RedactedWoff2}') format('truetype');
            }
        `}
    </style>
)
