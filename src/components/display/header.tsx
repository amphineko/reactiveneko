import { PropsWithChildren, ReactNode } from 'react'
import { BORDER_RADIUS, BORDER_RADIUS_SMALL } from '../../lib/css'

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
                    border-radius: ${BORDER_RADIUS_SMALL};
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

export const ProfileName = ({ children }: PropsWithChildren) => (
    <div className="profile-name">
        <h1 className="content">{children}</h1>
        <span className="description">common-name</span>
        <style jsx>{`
            .profile-name {
                background: #555;
                border-radius: ${BORDER_RADIUS};
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

export const ProfileAddonGroup = ({
    children,
    title,
}: PropsWithChildren<{
    title: string
}>) => (
    <div className="group">
        <div className="title-container">
            <h3 className="title">{title}</h3>
        </div>
        <div className="content">{children}</div>
        <style jsx>{`
            .group {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                gap: 0.5rem;
                padding: 0.5em;
            }

            .title {
                color: #777;
                display: inline-block;
                font-size: 1.2rem;
                font-weight: 300;
                line-height: 1em;
                margin: 0;
                padding: 0;
            }

            .title::after {
                border-bottom: 0.15rem solid #777;
                content: ' ';
                display: block;
                margin-top: 0.2em;
            }

            .content {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
            }
        `}</style>
    </div>
)

export const ProfileAddons = ({ children }: PropsWithChildren) => (
    <section className="addons">
        {children}
        <style jsx>{`
            .addons {
                display: flex;
                flex-direction: row;
                flex-grow: 1;
                flex-wrap: wrap;
                gap: 0em;
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
    profilePicture: string
}>) => (
    <header className="header row">
        <div className="column column-picture">
            <a className="picture-container" href={profilePicture}>
                <img
                    className="picture"
                    src={profilePicture}
                    alt="profile picture"
                    style={{ height: 'auto', width: '100%' }}
                />
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
                gap: 1em 5%;
            }

            .column {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                gap: 2em;
            }

            .column-picture {
                flex-basis: 30%;
            }

            .picture-container {
                background: #fff;
                border: 0.5em solid #fff;
                border-radius: 50vh;
                box-shadow: 0 0 0.15em 0.15em rgb(0 0 0 / 15%);
                overflow: hidden;
            }

            .column-names {
                background: #f5f5f5;
                border-radius: ${BORDER_RADIUS};
                box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
                flex-basis: 65%;
                padding: 1rem;
            }

            @media (max-width: 42rem) {
                .column-picture,
                .column-names {
                    flex-basis: 100%;
                }
            }
        `}</style>
    </header>
)
