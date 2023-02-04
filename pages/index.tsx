import { GetStaticProps } from 'next'
import Link from 'next/link'
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
import { IoBulb, IoCloud, IoGitBranch, IoLanguage, IoLink, IoSchool } from 'react-icons/io5'
import Background from '../public/assets/images/background.svg'
import ProfilePicture from '../public/assets/images/amphineko.png'
import { AccountShowcase, AccountShowcaseContainer } from '../components/display/accounts'
import { Capsule } from '../components/display/capsule'
import { Footer, FooterParagraph } from '../components/display/footer'
import { Header, ProfileNameStandout } from '../components/display/header'
import { LabelGroup, LabelItem } from '../components/display/label'
import { Row } from '../components/layout'
import { Description, Dimmed, Paragraph, Redacted } from '../components/typography'
import { UpdatedUsername } from '../components/username'

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
            profilePicture={ProfilePicture}
        >
            <LabelGroup icon={IoLink} title="a.k.a.">
                <LabelItem>atomic::akarin</LabelItem>
                <LabelItem>1kar0s</LabelItem>
            </LabelGroup>

            <LabelGroup icon={IoLanguage} title="languages">
                <LabelItem>汉语</LabelItem>
                <LabelItem>漢語</LabelItem>
                <LabelItem>English</LabelItem>
            </LabelGroup>

            <LabelGroup icon={IoSchool} title="status">
                <LabelItem>M.Sc. in progress</LabelItem>
            </LabelGroup>

            <LabelGroup icon={IoCloud} title="aut-num">
                <LabelItem>
                    <a
                        className="silent-link"
                        href="https://www.peeringdb.com/net/15170"
                        rel="noreferrer"
                        target="_blank"
                    >
                        205058
                    </a>
                </LabelItem>
                <LabelItem>
                    <a
                        className="silent-link"
                        href="https://www.peeringdb.com/net/24185"
                        rel="noreferrer"
                        target="_blank"
                    >
                        38023
                    </a>
                </LabelItem>
            </LabelGroup>
        </Header>

        <AccountShowcaseContainer>
            <AccountShowcase title="creatures">
                <Link href="https://github.com/amphineko/" passHref>
                    <Capsule icon={<FaGithub />} iconBackground="#000000">
                        GitHub
                        <Dimmed>@amphineko</Dimmed>
                    </Capsule>
                </Link>
            </AccountShowcase>

            <AccountShowcase title="social-accounts">
                <Link href="https://telegram.me/amphineko" passHref>
                    <Capsule icon={<FaTelegramPlane />} iconBackground="#0088ccaa">
                        Telegram <Dimmed>@amphineko</Dimmed>
                    </Capsule>
                </Link>

                <Link href="https://twitter.com/amphineko/" passHref>
                    <Capsule icon={<FaTwitter />} iconBackground="#1DA1F2">
                        Twitter <Dimmed>@amphineko</Dimmed>
                    </Capsule>
                </Link>

                <Link href="#" passHref>
                    <Capsule icon={<FaWeibo />} capsuleBackground="#ff9933aa" iconBackground="#e6162daa">
                        Weibo
                        <Dimmed>
                            <Redacted>[redacted]</Redacted>
                        </Dimmed>
                    </Capsule>
                </Link>
            </AccountShowcase>

            <AccountShowcase title="gaming">
                <Link href="https://osu.ppy.sh/users/1344051" passHref>
                    <Capsule icon={<FaCookieBite />} iconBackground="#f062a1">
                        osu! <Dimmed>Rukatan</Dimmed>
                    </Capsule>
                </Link>

                <Link href="https://steamcommunity.com/id/amphineko/" passHref>
                    <Capsule icon={<FaSteamSymbol />} iconBackground="#000000">
                        Steam
                        <Dimmed>
                            <UpdatedUsername
                                fn={() => fetchSteamPersonaName(steamPersonaNameUrl)}
                                initialData={initialSteamPersonaName}
                                queryKey="steam-persona-name"
                            />
                        </Dimmed>
                    </Capsule>
                </Link>

                <Link href="https://stats.vatsim.net/stats/1499554" passHref>
                    <Capsule icon={<FaPlane />} iconBackground="#26ADE3">
                        VATSIM
                        <Dimmed>N190AP</Dimmed>
                    </Capsule>
                </Link>
            </AccountShowcase>
        </AccountShowcaseContainer>

        <Row>
            <Description>
                <Paragraph>Passionate full-stack software developer and open-source contributor.</Paragraph>
                <Paragraph>Amautar network engineer operating own Internet autonomous systems.</Paragraph>
                <Paragraph>Contact me if you&apos;re interested to hire me :D</Paragraph>
            </Description>
            <Description>
                <Paragraph>
                    ardently love fps, simulation and galgames
                    <br />
                    rhythm game is LIFE!
                    <br />
                    ingress (mission collection only) agent
                </Paragraph>
                <Paragraph>
                    <del className="deleted">dream to be a civil aviation pilot</del>
                </Paragraph>
            </Description>
        </Row>

        <Footer>
            <FooterParagraph icon={IoGitBranch}>
                <a className="footer-link" href="https://github.com/amphineko/atomicneko">
                    Fork this template on GitHub
                </a>
                <span className="footer-external-link-icon">
                    <FaExternalLinkAlt />
                </span>
            </FooterParagraph>
            <FooterParagraph icon={IoBulb}>
                Copyright © 2015-2022 amphineko. Illustrations have their own licenses.
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
