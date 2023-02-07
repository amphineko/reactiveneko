import { GetStaticProps, NextPage } from 'next'
import {
    FaCookieBite,
    FaExternalLinkAlt,
    FaGithub,
    FaNetworkWired,
    FaPlane,
    FaSteamSymbol,
    FaTelegramPlane,
    FaTwitter,
    FaWeibo,
} from 'react-icons/fa'
import { IoBulb, IoGitBranch } from 'react-icons/io5'
import { AccountShowcase } from '../components/display/accounts'
import { Footer, FooterParagraph } from '../components/display/footer'
import {
    Header,
    ProfileAddonGroup,
    ProfileAddonGroupTitle,
    ProfileAddons,
    ProfileNameStandout,
} from '../components/display/header'
import { LabelGroup, LabelItem } from '../components/display/labels'
import { Monoline, MonolineGroup } from '../components/display/monolines'
import { Row } from '../components/layout'
import { Description, Dimmed, Paragraph, Redacted } from '../components/typography'
import { fetchSteamPersonaName, useSteamPersonaName } from '../lib/external/steam'
import ProfilePicture from '../public/assets/images/amphineko.png'
import Background from '../public/assets/images/background.svg'

const DEPLOY_TARGETS = ['demo', 'prod'] as const
type DeployTarget = (typeof DEPLOY_TARGETS)[number]

type IndexPageProps = {
    deployTarget: DeployTarget
    steam: {
        serverSideName: string
        urls: string[]
    }
}

const IndexPage: NextPage = ({ deployTarget, steam }: IndexPageProps) => {
    const demo = deployTarget === 'demo'
    const steamPersonaName = useSteamPersonaName(steam.urls, steam.serverSideName)

    return (
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
            >
                <ProfileAddons>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>also-known-as</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="since 201?">atomic::akarin</Monoline>
                            <Monoline comment="since 202?">1kar0s</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>languages</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="native">zh-cmn-Hans</Monoline>
                            <Monoline comment="primary">en-{`{GB,IE}`}</Monoline>
                            <Monoline comment="installed">en-US</Monoline>
                            <Monoline comment="installing">ja</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>education</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="M.Sc. Computer Science (dropped)">postgrad</Monoline>
                            <Monoline comment="B.Eng. Network Engineering">undergrad</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                </ProfileAddons>

                {demo && (
                    <ProfileAddons>
                        <LabelGroup icon={<FaNetworkWired />} title="asn">
                            <LabelItem>205058</LabelItem>
                            <LabelItem>38023</LabelItem>
                        </LabelGroup>
                    </ProfileAddons>
                )}
            </Header>

            <AccountShowcase.Container>
                <AccountShowcase.Category title="oss">
                    <AccountShowcase.Account
                        href="https://github.com/amphineko/"
                        icon={<FaGithub />}
                        iconBackground="#000000"
                        platform="GitHub"
                    >
                        amphineko
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="social-accounts">
                    <AccountShowcase.Account
                        href="https://telegram.me/amphineko"
                        icon={<FaTelegramPlane />}
                        iconBackground="#0088ccaa"
                        platform="Telegram"
                    >
                        @amphineko
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="https://twitter.com/amphineko/"
                        icon={<FaTwitter />}
                        iconBackground="#1DA1F2"
                        platform="Twitter"
                    >
                        @amphineko
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="#"
                        icon={<FaWeibo />}
                        iconBackground="#e6162daa"
                        platform="Weibo"
                        capsuleBackground="#ff9933aa"
                    >
                        Weibo
                        <Dimmed>
                            <Redacted>redacted</Redacted>
                        </Dimmed>
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="gaming">
                    <AccountShowcase.Account
                        href="https://osu.ppy.sh/users/1344051"
                        icon={<FaCookieBite />}
                        iconBackground="#f062a1"
                        platform="osu!"
                    >
                        Rukatan
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="https://steamcommunity.com/id/amphineko/"
                        icon={<FaSteamSymbol />}
                        iconBackground="#000000"
                        platform="Steam"
                    >
                        {steamPersonaName.data}
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="https://stats.vatsim.net/stats/1499554"
                        icon={<FaPlane />}
                        iconBackground="#ff9933"
                        platform="VATSIM"
                    >
                        N190AP
                    </AccountShowcase.Account>
                </AccountShowcase.Category>
            </AccountShowcase.Container>

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
                    <Paragraph>Ardently love of FPS, simulation and AVG.</Paragraph>
                    <Paragraph>Rhythm game is LIFE!</Paragraph>
                    <Paragraph>Retired and mission collection only Ingress agent.</Paragraph>
                    <Paragraph>
                        <del className="deleted">Dreamed to be a civil aviation pilot.</del>
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
                    gap: 2rem;
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
}

export default IndexPage

function getDeployTarget(): DeployTarget {
    const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET ?? ''

    if (!DEPLOY_TARGETS.includes(deployTarget as unknown as DeployTarget)) {
        throw new Error(`Invalid deploy target: ${deployTarget}`)
    }

    return deployTarget as DeployTarget
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
    const steamGetPlayerSummariesUrls = (process.env.NEXT_PUBLIC_STEAM_GET_PLAYER_SUMMARIES ?? '').split(',')

    return {
        props: {
            deployTarget: getDeployTarget(),
            steam: {
                serverSideName: await fetchSteamPersonaName(steamGetPlayerSummariesUrls),
                // serverSideName: '1kar0s', // NOTE: you can also use static server-side name here
                urls: steamGetPlayerSummariesUrls,
            },
        },
        revalidate: 60 * 60 * 24 * 7, // revalidates weekly
    }
}
