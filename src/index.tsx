import { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
    TbBrandGithub,
    TbBrandSteam,
    TbBrandTelegram,
    TbBrandTwitter,
    TbBrandWeibo,
    TbBulb,
    TbCookie,
    TbGitBranch,
    TbNetwork,
    TbPlaneTilt,
    TbSourceCode,
} from 'react-icons/tb'
import ProfilePicture from './assets/images/amphineko.png'
import Background from './assets/images/background.svg'
import { AccountShowcase } from './components/display/accounts.tsx'
import { Capsule } from './components/display/capsule'
import { Footer, FooterLink, FooterParagraph } from './components/display/footer'
import { Header, ProfileAddonGroup, ProfileAddons, ProfileNameStandout } from './components/display/header'
import { Row } from './components/layout'
import { Description, DescriptionTitle, Dimmed, Paragraph, Redacted } from './components/typography'
import { classnames } from './lib/classnames.ts'
import { useSteamPersonaName } from './lib/external/steam'

const DEPLOY_TARGETS = ['demo', 'prod'] as const
type DeployTarget = (typeof DEPLOY_TARGETS)[number]

type IndexPageProps = {
    deployTarget: DeployTarget
    steam: {
        serverSideName: string
        urls: string[]
    }
}

function ProfileLabel({ children, comment, icon }: { children: string; comment?: string; icon?: ReactNode }) {
    const className = classnames({
        label: true,
        'no-comment': !comment,
        'no-icon': !icon,
    })
    return (
        <Capsule background="#333" icon={icon} iconBackground="white" iconColor="black" iconType="sharp" sharp>
            <span className={className}>
                {children}
                {comment && (
                    <span className="comment">
                        <Dimmed>{comment}</Dimmed>
                    </span>
                )}
            </span>
            <style jsx>{`
                .label {
                    display: inline-block;
                    font-weight: 500;
                    padding: 0.5rem;
                    padding-left: 0;
                }

                .label.no-comment {
                    font-weight: 300;
                }

                .label.no-icon {
                    padding-left: 0.5rem;
                }

                .comment {
                    font-weight: 300;
                    margin-left: 0.4em;
                }
            `}</style>
        </Capsule>
    )
}

export const IndexPage = ({ steam }: IndexPageProps) => {
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
                    <ProfileAddonGroup title="also-known-as">
                        <ProfileLabel comment="since 201?">atomic akarin</ProfileLabel>
                        <ProfileLabel comment="since 202?">1kar0s</ProfileLabel>
                    </ProfileAddonGroup>

                    <ProfileAddonGroup title="area-of-work">
                        <ProfileLabel icon={<TbNetwork />}>neteng</ProfileLabel>
                        <ProfileLabel icon={<TbSourceCode />}>swe</ProfileLabel>
                    </ProfileAddonGroup>

                    <ProfileAddonGroup title="languages">
                        <ProfileLabel comment="native">zh-cmn-Hans</ProfileLabel>
                        <ProfileLabel>en-GB</ProfileLabel>
                        <ProfileLabel>en-US</ProfileLabel>
                        <ProfileLabel comment="learning">ja</ProfileLabel>
                    </ProfileAddonGroup>
                </ProfileAddons>
            </Header>

            <AccountShowcase.Container>
                <AccountShowcase.Category title="oss">
                    <AccountShowcase.Account
                        href="https://github.com/amphineko/"
                        icon={<TbBrandGithub />}
                        iconBackground="#000000"
                        platform="GitHub"
                    >
                        amphineko
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="social-accounts">
                    <AccountShowcase.Account
                        href="https://telegram.me/amphineko"
                        icon={<TbBrandTelegram />}
                        iconBackground="#0088ccaa"
                        platform="Telegram"
                    >
                        @amphineko
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="https://twitter.com/amphineko/"
                        icon={<TbBrandTwitter />}
                        iconBackground="#1DA1F2"
                        platform="Twitter"
                    >
                        @amphineko
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="#"
                        icon={<TbBrandWeibo />}
                        iconBackground="#e6162daa"
                        platform="Weibo"
                        capsuleBackground="#ff9933aa"
                    >
                        <Dimmed>
                            <Redacted>redacted</Redacted>
                        </Dimmed>
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="gaming">
                    <AccountShowcase.Account
                        href="https://osu.ppy.sh/users/1344051"
                        icon={<TbCookie />}
                        iconBackground="#f062a1"
                        platform="osu!"
                    >
                        Rukatan
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="https://steamcommunity.com/id/amphineko/"
                        icon={<TbBrandSteam />}
                        iconBackground="#000000"
                        platform="Steam"
                    >
                        {steamPersonaName.data}
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="https://stats.vatsim.net/stats/1499554"
                        icon={<TbPlaneTilt />}
                        iconBackground="#ff9933"
                        platform="VATSIM"
                    >
                        N190AP
                    </AccountShowcase.Account>
                </AccountShowcase.Category>
            </AccountShowcase.Container>

            <Row>
                <Description>
                    <DescriptionTitle smallCaps>what am i doing?</DescriptionTitle>
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
                    <DescriptionTitle smallCaps>what do i love?</DescriptionTitle>
                    <Paragraph>Ardently love of FPS, simulation and AVG.</Paragraph>
                    <Paragraph>Rhythm game is LIFE!</Paragraph>
                    <Paragraph>Retired and mission collection only Ingress agent.</Paragraph>
                    <Paragraph>
                        <del className="deleted">Dreamed to be a civil aviation pilot.</del>
                    </Paragraph>
                </Description>
            </Row>

            <Footer>
                <FooterParagraph icon={TbGitBranch as IconType} color="#ddd">
                    <FooterLink href="https://github.com/amphineko/atomicneko">
                        Fork this template on GitHub: amphineko/reactiveneko
                    </FooterLink>
                </FooterParagraph>
                <FooterParagraph icon={TbBulb as IconType} color="#ddd">
                    Copyright © 2015-2024 amphineko. Illustrations have their own licenses.
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
            `}</style>

            <style jsx global>{`
                body {
                    background: url(${Background});
                    background-color: #aaa;
                    background-size: cover;
                    display: flex;
                    flex-direction: column;
                    font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFangTC-Light', 'Microsoft YaHei', '微软雅黑',
                        'STHeiti Light', STXihei, '华文细黑', Heiti, '黑体', 'sans-serif';
                    justify-content: center;
                    margin: 0;
                    min-height: 100vh;
                    padding: 1em;
                }
            `}</style>
        </div>
    )
}

export default IndexPage
