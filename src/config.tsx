import {
    TbBrandGithub,
    TbBrandInstagram,
    TbBrandSteam,
    TbBrandTelegram,
    TbBrandTwitter,
    TbBrandWeibo,
    TbCookie,
    TbNetwork,
    TbSourceCode,
    TbWashMachine,
} from 'react-icons/tb'
import ProfilePictureOriginal from './assets/images/amphineko.png'
import ProfilePictureAvif from './assets/images/amphineko.png?format=avif'
import ProfilePictureJpeg from './assets/images/amphineko.png?format=jpeg'
import ProfilePicturePng from './assets/images/amphineko.png?format=png'
import ProfilePictureWebp from './assets/images/amphineko.png?format=webp'
import PageBackground from './assets/images/blueprint-bg.svg'
import FooterBackground from './assets/images/blueprint-footer.svg'
import PanelBackground from './assets/images/blueprint-panels.svg'
import { ProfileNameStandout, ProfilePictureSources } from './components/display/header'
import { Row } from './components/layout'
import { Description, DescriptionTitle, ExternalLink, Paragraph } from './components/typography'

export const PANEL_BACKGROUND = PanelBackground
export const FOOTER_BACKGROUND = FooterBackground
export const PAGE_BACKGROUND = PageBackground

export const PROFILE_PICTURE: ProfilePictureSources = {
    src: ProfilePictureOriginal,
    avif: ProfilePictureAvif,
    jpeg: ProfilePictureJpeg,
    png: ProfilePicturePng,
    webp: ProfilePictureWebp,
}

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

export const ALT_PROFILE_NAMES = ['atomic-akarin', '1kar0s']

export const PROFILE_TAGS: ProfileHeaderTagGroup[] = [
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
                platform: 'Instagram',
                name: 'redacted',
                icon: <TbBrandInstagram />,
                iconBackground: '#e4405f',
                redacted: true,
            },
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
                platform: 'ALL.net',
                name: '1kar0s',
                icon: <TbWashMachine />,
                iconBackground: '#17569baa',
            },
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
    <Row background={PANEL_BACKGROUND}>
        <Description>
            <DescriptionTitle smallCaps>what am i doing?</DescriptionTitle>
            <Paragraph>FAANG network enginner since 2022.</Paragraph>
            <Paragraph>passionate full-stack software developer and open-source contributor.</Paragraph>
            <Paragraph>amateur network engineer operating own Internet autonomous systems.</Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>what do i love?</DescriptionTitle>
            <Paragraph>ardently love of FPS, simulation and AVG.</Paragraph>
            <Paragraph>rhythm game is LIFE!</Paragraph>
            <Paragraph>
                retired and mission-collection only{' '}
                <ExternalLink href="https://en.wikipedia.org/wiki/Ingress_(video_game)">Ingress</ExternalLink> agent.
            </Paragraph>
            <Paragraph>
                <del className="deleted">dreamed to be a civil aviation pilot.</del>
            </Paragraph>
        </Description>
    </Row>
)

export const COPYRIGHT = 'Copyright © 2015-2025 amphineko. Illustrations have their own licenses.'

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
