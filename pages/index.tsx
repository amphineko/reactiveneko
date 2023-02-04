import { GetStaticProps } from 'next'
import { PropsWithChildren } from 'react'
import {
    FaCookieBite,
    FaExternalLinkAlt,
    FaGithub,
    FaPlane,
    FaSteamSymbol,
    FaTelegramPlane,
    FaTwitter,
    FaWeibo,
} from 'react-icons/fa'
import { IoBulb, IoGitBranch } from 'react-icons/io5'
import { AccountShowcase, AccountShowcaseContainer } from '../components/display/accounts'
import { CapsuleLink } from '../components/display/capsule'
import { Footer, FooterParagraph } from '../components/display/footer'
import { Header, ProfileNameStandout } from '../components/display/header'
import { Row } from '../components/layout'
import { Description, Dimmed, Paragraph, Redacted } from '../components/typography'
import { UpdatedUsername } from '../components/username'
import ProfilePicture from '../public/assets/images/amphineko.png'
import Background from '../public/assets/images/background.svg'

interface IndexPageProps {
    initialSteamPersonaName?: string
    steamPersonaNameUrl?: string
}

interface SteamApiResponse {
    response?: { players?: { personaname?: string }[] }
}

const fetchSteamPersonaName = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    const result = (await response.json()) as SteamApiResponse
    const personaName = result.response?.players?.[0]?.personaname

    if (typeof personaName === 'string') {
        return personaName
    } else {
        throw new Error('Invalid response from Steam API')
    }
}

const IndexPage = ({ initialSteamPersonaName, steamPersonaNameUrl }: PropsWithChildren<IndexPageProps>) => (
    <div className="container">
        <Header
            profilePicture={ProfilePicture}
            profileName={
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
            }
            profileAddons={{
                description: 'aliases & features',
                groups: [
                    {
                        title: 'also-known-as',
                        items: [
                            { content: 'atomic::akarin', comment: 'since 201?' },
                            { content: '1kar0s', comment: 'since 202?' },
                        ],
                    },
                    {
                        title: 'languages',
                        items: [
                            { content: 'zh-cmn-Hans', comment: 'native' },
                            { content: 'en-{GB,IE}', comment: 'primary' },
                            { content: 'en-US', comment: 'installed' },
                            { content: 'ja', comment: 'installing' },
                        ],
                    },
                    {
                        title: 'education',
                        items: [
                            { content: 'postgrad', comment: 'M.Sc. Computer Science (dropped)' },
                            { content: 'undergrad', comment: 'B.Eng. Network Engineering' },
                        ],
                    },
                ],
            }}
        />

        <AccountShowcaseContainer>
            <AccountShowcase title="creatures">
                <CapsuleLink href="https://github.com/amphineko/" icon={<FaGithub />} iconBackground="#000000">
                    GitHub
                    <Dimmed>@amphineko</Dimmed>
                </CapsuleLink>
            </AccountShowcase>

            <AccountShowcase title="social-accounts">
                <CapsuleLink href="https://telegram.me/amphineko" icon={<FaTelegramPlane />} iconBackground="#0088ccaa">
                    Telegram <Dimmed>@amphineko</Dimmed>
                </CapsuleLink>

                <CapsuleLink href="https://twitter.com/amphineko/" icon={<FaTwitter />} iconBackground="#1DA1F2">
                    Twitter <Dimmed>@amphineko</Dimmed>
                </CapsuleLink>

                <CapsuleLink href="#" icon={<FaWeibo />} background="#ff9933aa" iconBackground="#e6162daa">
                    Weibo
                    <Dimmed>
                        <Redacted>redacted</Redacted>
                    </Dimmed>
                </CapsuleLink>
            </AccountShowcase>

            <AccountShowcase title="gaming">
                <CapsuleLink href="https://osu.ppy.sh/users/1344051" icon={<FaCookieBite />} iconBackground="#f062a1">
                    osu! <Dimmed>Rukatan</Dimmed>
                </CapsuleLink>

                <CapsuleLink
                    href="https://steamcommunity.com/id/amphineko/"
                    icon={<FaSteamSymbol />}
                    iconBackground="#000000"
                >
                    Steam
                    <Dimmed>
                        <UpdatedUsername
                            fn={() => fetchSteamPersonaName(steamPersonaNameUrl)}
                            initialData={initialSteamPersonaName}
                            queryKey="steam-persona-name"
                        />
                    </Dimmed>
                </CapsuleLink>

                <CapsuleLink href="https://stats.vatsim.net/stats/1499554" icon={<FaPlane />} iconBackground="#26ADE3">
                    VATSIM
                    <Dimmed>N190AP</Dimmed>
                </CapsuleLink>
            </AccountShowcase>
        </AccountShowcaseContainer>

        <Row>
            <Description>
                <Paragraph>
                    Data Center Network Enginner at Meta Platforms (<Redacted hoverToShow>Facebook</Redacted>) since
                    2022.
                </Paragraph>
                <Paragraph>Passionate full-stack software developer and open-source contributor.</Paragraph>
                <Paragraph>
                    <del>Amautar</del> network engineer operating own Internet autonomous systems.
                </Paragraph>
            </Description>
            <Description>
                <Paragraph>
                    Ardently love of FPS, simulation and AVG
                    <br />
                    Rhythm game is LIFE!
                    <br />
                    Retired Ingress (mission collection only) Agent
                </Paragraph>
                <Paragraph>
                    <del className="deleted">Dreamed to be a civil aviation pilot</del>
                </Paragraph>
            </Description>
        </Row>

        <Footer>
            <FooterParagraph icon={IoGitBranch}>
                <a className="footer-link" href="https://github.com/amphineko/atomicneko">
                    Fork this template on GitHub: amphineko/reactiveneko
                </a>
                <span className="footer-external-link-icon">
                    <FaExternalLinkAlt />
                </span>
            </FooterParagraph>
            <FooterParagraph icon={IoBulb}>
                Copyright © 2015-2023 amphineko. Illustrations have their own licenses.
            </FooterParagraph>
        </Footer>

        <style jsx>{`
            .container {
                display: flex;
                flex-direction: column;
                gap: 1em;
                max-width: 64em;
                margin: 0 auto;
            }

            .footer-link {
                color: inherit;
                text-decoration: none;
            }

            .footer-external-link-icon {
                font-size: 0.75em;
                margin-left: 0.5em;
                vertical-align: 0.25em;
            }

            .silent-link {
                color: inherit;
                text-decoration: none;
            }
        `}</style>

        <style jsx global>{`
            body {
                background: url('${Background}') no-repeat;
                background-color: #aaa;
                background-size: cover;
                font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFangTC-Light', 'Microsoft YaHei', '微软雅黑',
                    'STHeiti Light', STXihei, '华文细黑', Heiti, '黑体', 'sans-serif';
                margin: 0;
                min-height: 100vh;
                padding: 1em 0;
            }
        `}</style>
    </div>
)

export default IndexPage

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
    const steamPersonaNameUrl = process.env.STEAM_PERSONA_NAME_URL

    return {
        props: {
            initialSteamPersonaName: await fetchSteamPersonaName(steamPersonaNameUrl),
            steamPersonaNameUrl,
        },
    }
}
