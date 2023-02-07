import Image, { StaticImageData } from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'
import { LabelGroup, LabelItem } from './label'

export const ProfileNameStandout = ({
    backgroundColor,
    children,
    hoverColor,
    hoverRuby,
    href,
    ruby,
}: PropsWithChildren<{
    backgroundColor: string
    hoverColor: string
    hoverRuby?: string
    href?: string
    ruby?: string
}>) => {
    ruby = ruby || ''
    hoverRuby = hoverRuby || ruby || ''
    href = href || '#'

    return (
        <a className="standout" href={href} rel="noreferrer" target="_blank">
            {children}
            <style jsx>{`
                .standout {
                    background: ${backgroundColor};
                    border-radius: 0.25em;
                    box-shadow: 0 0 0.1em 0.1em rgba(0, 0, 0, 0.05);
                    color: white;
                    display: inline-block;
                    padding: 0.1em;
                    position: relative;
                    text-decoration: none;
                    transition-duration: 0.5s;
                }

                .standout::after {
                    color: #eee;
                    content: '${ruby || ''}';
                    display: block;
                    font-size: 0.5em;
                    line-height: 1.5em;
                    position: absolute;
                    top: 2.5em;
                    transition-duration: 0.5s;
                }

                .standout:hover {
                    background: ${hoverColor};
                    box-shadow: 0 0 0.2em 0.2em rgba(0, 0, 0, 0.1);
                }

                .standout:hover::after {
                    color: #fff;
                    content: '${hoverRuby}';
                }
            `}</style>
        </a>
    )
}

export const ProfileName = ({ children }: PropsWithChildren<unknown>) => (
    <div className="profile-name">
        <h1 className="content">{children}</h1>
        <span className="description">preferred-name</span>
        <style jsx>{`
            .profile-name {
                background: #555;
                border-radius: 0.5rem;
                color: white;
                display: block;
                padding: 1.75em 0.5rem 0.5em 0.5rem; // NOTE: line-height direction uses em to align with font-size
                position: relative;
            }

            .content {
                font-family: 'Courier New';
                font-size: 2.5em;
                font-weight: normal;
                line-height: 1em;
                margin: 0;
                padding: 0;
                text-wrap: none;
            }

            .description {
                color: #999;
                font-size: 1.25rem;
                font-weight: 300;
                position: absolute;
                top: 0;
                right: 0.5rem;
            }
        `}</style>
    </div>
)

export interface ProfileAddonItem {
    content: string
    comment?: string
}

export interface ProfileAddonGroupProps {
    title: string
    items: ProfileAddonItem[]
}

export interface ProfileAddonProps {
    description: string
    groups: ProfileAddonGroupProps[]
}

export const ProfileAddonGroup = ({ title, items }: ProfileAddonGroupProps) => (
    <div className="group">
        <h3 className="title">{title}</h3>
        <LabelGroup>
            {items.map((item, idx) => (
                <LabelItem key={idx} comment={item.comment}>
                    {item.content}
                </LabelItem>
            ))}
        </LabelGroup>
        <style jsx>{`
            .group {
                flex-grow: 1;
            }

            .title {
                border-bottom: 0.15rem solid #777;
                color: #777;
                font-size: 1.2rem;
                font-weight: 300;
                line-height: 1.5em;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </div>
)

export const ProfileAddons = ({ description, groups }: ProfileAddonProps) => (
    <section className="addons">
        {description && <h3 className="description">{description}</h3>}
        {groups.map((group, idx) => (
            <ProfileAddonGroup key={idx} title={group.title} items={group.items} />
        ))}
        <style jsx>{`
            .addons {
                background: #eee;
                border-radius: 0.5em;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1.5em;
                padding: 0.5em 0.5rem 1.75em 0.5rem;
                position: relative;
            }

            .description {
                bottom: 0;
                color: #999;
                display: block;
                font-weight: 300;
                margin: 0;
                padding: 0;
                position: absolute;
                right: 0.5em;
            }
        `}</style>
    </section>
)

export const Header = ({
    children,
    profileName,
    profilePicture,
}: PropsWithChildren<{
    profileName: ReactNode
    profilePicture: StaticImageData
}>) => (
    <header className="header row">
        <div className="column column-picture">
            <a className="picture-container" href={profilePicture.src}>
                <Image src={profilePicture} alt="profile picture" style={{ height: 'auto', width: '100%' }} />
            </a>
        </div>

        <div className="column column-names">
            <ProfileName>{profileName}</ProfileName>
            {children}
        </div>

        <style jsx>{`
            .row {
                display: flex;
                align-items: center;
                flex: 1;
                flex-direction: row;
                flex-wrap: wrap;
            }

            .column {
                box-sizing: border-box;
                padding: 2rem;

                display: flex;
                flex-direction: column;
                gap: 2em;
            }

            .column-picture {
                flex-basis: 40%;
            }

            .picture-container {
                background: #fff;
                border: 0.5em solid #fff;
                border-radius: 50%;
                box-shadow: 0 0 0.15em 0.15em rgb(0 0 0 / 15%);
                overflow: hidden;
            }

            .column-names {
                flex-basis: 60%;
            }

            .column-names .container {
                background: #ccc;
                border-radius: 0.25em;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1.5em;
                padding: 0.5em 0.25em;
            }

            @media (max-width: 40rem) {
                .column-picture,
                .column-names {
                    flex-basis: 100%;
                }
            }
        `}</style>
    </header>
)
