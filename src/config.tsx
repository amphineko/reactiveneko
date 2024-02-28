import {
    TbBrandGithub,
    TbBrandSteam,
    TbBrandTelegram,
    TbBrandTwitter,
    TbBrandWeibo,
    TbCookie,
    TbNetwork,
    TbSourceCode,
} from 'react-icons/tb'
import { ProfileNameStandout } from './components/display/header'
import { Description, DescriptionTitle, Paragraph, Redacted } from './components/typography'

export { default as PROFILE_PICTURE } from './assets/images/amphineko.png'

export const PROFILE_NAME = (
    <>
        {/* amphi[ne]ko */}
        amphi
        <ProfileNameStandout
            backgroundColor="hsla(0, 100%, 82%, 0.25)"
            href="https://en.wikipedia.org/wiki/Neon"
            hoverRuby="ね"
            hoverColor="hsla(0, 100%, 82%, 0.75)"
            ruby="10"
        >
            ne
        </ProfileNameStandout>
        ko
    </>
)

export const PROFILE_TAGS: ProfileHeaderTagGroup[] = [
    {
        title: 'also-known-as',
        tags: [
            {
                tag: 'atomic-akarin',
                comment: 'since 201?',
            },
            {
                tag: '1kar0s',
                comment: 'since 202?',
            },
        ],
    },
    {
        title: 'area-of-work',
        tags: [
            {
                tag: 'neteng',
                icon: <TbNetwork />,
            },
            {
                tag: 'swe',
                icon: <TbSourceCode />,
            },
        ],
    },
    {
        title: 'languages',
        tags: [
            {
                tag: 'zh-cmn-Hans',
                comment: 'native',
            },
            {
                tag: 'en-GB',
            },
            {
                tag: 'en-US',
            },
            {
                tag: 'ja',
                comment: 'learning',
            },
        ],
    },
]

export const ACCOUNTS: Accounts[] = [
    {
        type: 'oss',
        accounts: [
            {
                platform: 'GitHub',
                name: 'amphineko',
                url: 'https://github.com/amphineko/',
                icon: <TbBrandGithub />,
                iconBackground: '#000000',
            },
        ],
    },
    {
        type: 'social-accounts',
        accounts: [
            {
                platform: 'Telegram',
                name: '@amphineko',
                url: 'https://telegram.me/amphineko',
                icon: <TbBrandTelegram />,
                iconBackground: '#0088ccaa',
            },
            {
                platform: 'Twitter',
                name: '@amphineko',
                url: 'https://twitter.com/amphineko/',
                icon: <TbBrandTwitter />,
                iconBackground: '#1da1f2aa',
            },
            {
                platform: 'Weibo',
                name: 'redacted',
                icon: <TbBrandWeibo />,
                iconBackground: '#ff9933aa',
                redacted: true,
            },
        ],
    },
    {
        type: 'gaming',
        accounts: [
            {
                platform: 'osu!',
                name: 'Rukatan',
                url: 'https://osu.ppy.sh/users/1344051',
                icon: <TbCookie />,
                iconBackground: '#f062a1aa',
            },
            {
                platform: 'Steam',
                name: '1kar0s',
                url: 'https://steamcommunity.com/id/amphineko/',
                icon: <TbBrandSteam />,
                iconBackground: '#000000aa',
            },
            {
                platform: 'VATSIM',
                name: 'N190AP',
                url: 'https://stats.vatsim.net/stats/1499554',
                icon: <TbBrandSteam />,
                iconBackground: '#ff9933aa',
            },
        ],
    },
]

export const DESCRIPTION_PARAGRAPHS = (
    <>
        <Description>
            <DescriptionTitle smallCaps>what am i doing?</DescriptionTitle>
            <Paragraph>
                Data Center Network Enginner at Meta Platforms (<Redacted hoverToShow>Facebook</Redacted>) since 2022.
            </Paragraph>
            <Paragraph>Passionate full-stack software developer and open-source contributor.</Paragraph>
            <Paragraph>
                <del>Amautar</del> network engineer operating own Internet autonomous systems.
            </Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>what do i love?</DescriptionTitle>
            <Paragraph>Ardently love of FPS, simulation and AVG.</Paragraph>
            <Paragraph>Rhythm game is LIFE!</Paragraph>
            <Paragraph>Retired and mission collection only Ingress agent.</Paragraph>
            <Paragraph>
                <del className="deleted">Dreamed to be a civil aviation pilot.</del>
            </Paragraph>
        </Description>
    </>
)

export const COPYRIGHT = 'Copyright © 2015-2024 amphineko. Illustrations have their own licenses.'

interface Account {
    platform: string
    name: string | JSX.Element
    url?: string
    icon: JSX.Element
    iconBackground: string
    redacted?: boolean
}

interface Accounts {
    type: string
    accounts: Account[]
}

interface ProfileHeaderTag {
    tag: string
    comment?: string
    icon?: JSX.Element
}

interface ProfileHeaderTagGroup {
    title: string
    tags: ProfileHeaderTag[]
}
