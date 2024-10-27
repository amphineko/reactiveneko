import { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { TbBulb, TbGitBranch } from 'react-icons/tb'
import Background from './assets/images/blueprint-bg.svg'
import { AccountShowcase } from './components/display/accounts.tsx'
import { Capsule } from './components/display/capsule'
import { Footer, FooterLink, FooterParagraph } from './components/display/footer'
import { Header, ProfileAddonGroup, ProfileAddons } from './components/display/header'
import { Dimmed } from './components/typography'
import {
    ACCOUNTS,
    COPYRIGHT,
    DESCRIPTION_PARAGRAPHS,
    PANEL_BACKGROUND,
    PROFILE_NAME,
    PROFILE_PICTURE,
    PROFILE_TAGS,
} from './config.tsx'
import { classnames } from './lib/classnames.ts'

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

export const IndexPage = () => {
    return (
        <div className="container">
            <Header background={PANEL_BACKGROUND} profilePicture={PROFILE_PICTURE} profileName={PROFILE_NAME}>
                <ProfileAddons>
                    {PROFILE_TAGS.map(({ tags, title }) => (
                        <ProfileAddonGroup key={title} title={title}>
                            {tags.map(({ comment, icon, tag }) => (
                                <ProfileLabel key={tag} comment={comment} icon={icon}>
                                    {tag}
                                </ProfileLabel>
                            ))}
                        </ProfileAddonGroup>
                    ))}
                </ProfileAddons>
            </Header>

            <AccountShowcase.Container background={PANEL_BACKGROUND}>
                {ACCOUNTS.map((category) => (
                    <AccountShowcase.Category key={category.type} title={category.type}>
                        {category.accounts.map(({ icon, iconBackground, name, platform, redacted, url }) => (
                            <AccountShowcase.Account
                                key={url}
                                href={url}
                                icon={icon}
                                iconBackground={iconBackground}
                                platform={platform}
                                redacted={redacted}
                                redactedHoverToShow
                            >
                                {name}
                            </AccountShowcase.Account>
                        ))}
                    </AccountShowcase.Category>
                ))}
            </AccountShowcase.Container>

            {DESCRIPTION_PARAGRAPHS}

            <Footer>
                <FooterParagraph icon={TbGitBranch as IconType} color="#ddd">
                    <FooterLink href="https://github.com/amphineko/reactiveneko">
                        Fork this template on GitHub: amphineko/reactiveneko
                    </FooterLink>
                </FooterParagraph>
                <FooterParagraph icon={TbBulb as IconType} color="#ddd">
                    {COPYRIGHT}
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
                    background-attachment: fixed;
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
