import { PropsWithChildren, ReactNode } from 'react'
import { BORDER_RADIUS, BORDER_RADIUS_SMALL } from '../../lib/css'
import { classnames } from '../../lib/classnames'

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

                .standout:hover {
                    background: ${hoverColor};
                    box-shadow: 0 0 0.2em 0.2em rgba(0, 0, 0, 0.1);
                }

                .standout:hover::before {
                    bottom: 2em;
                    color: #fff;
                    content: '${hoverRuby}';
                    font-size: 0.5em;
                    position: absolute;
                    text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
                    transition-duration: 0.5s;
                }

                .standout:hover::after {
                    color: #eee;
                    content: '${ruby || ''}';
                    display: block;
                    font-size: 0.5em;
                    line-height: 1.5em;
                    position: absolute;
                    top: 2.5em;
                    transition-duration: 0.5s;
                }
            `}</style>
        </a>
    )
}

export function ProfileName({
    children,
    isAlt,
    padRightCharacters,
    zIndex,
}: PropsWithChildren<{
    isAlt?: boolean
    padRightCharacters?: number
    zIndex?: number
}>) {
    const padRight = padRightCharacters ? '\\00a0'.repeat(padRightCharacters) : ''
    console.log(children, padRight)
    return (
        <div className={classnames({ 'profile-name': true, alt: isAlt })}>
            {!isAlt ? <h1 className="content">{children}</h1> : <span className="content">{children}</span>}
            <span className="description">{!isAlt ? 'common-name' : 'also-known-as'}</span>
            <style jsx>{`
                .profile-name {
                    background: #555;
                    border-radius: ${BORDER_RADIUS};
                    box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.1);
                    color: white;
                    font-family: 'IBM Plex Mono', 'Courier New', monospace;
                }

                .profile-name {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap-reverse;
                    justify-content: space-between;
                    min-height: 4em;

                    padding: 0.5em 0.5rem 0.5em 0.5rem; // NOTE: line-height direction uses em to align with font-size
                    z-index: ${zIndex || 'unset'};
                }

                .content {
                    align-self: end;
                    font-size: 2.5em;
                    font-weight: 700;
                    line-height: 1em;
                    margin: 0;
                    padding: 0;
                    text-wrap: none;
                }

                .content::after {
                    content: '${padRight}';
                    white-space: pre;
                }

                .description {
                    align-self: flex-end;
                    color: #999;
                    font-size: 1.25rem;
                    font-weight: 300;
                }

                .alt {
                    background: #777;
                    margin-top: -1em;
                    padding-top: 1em;
                    min-height: unset;
                }

                .alt .content {
                    color: #aaa;
                    font-size: 1.5em;
                    font-weight: 300;
                }

                .alt .description {
                    bottom: 0;
                    top: auto;
                }
            `}</style>
        </div>
    )
}

export function ProfileNames({
    alsoKnownAs,
    children,
}: PropsWithChildren<{
    alsoKnownAs?: string[]
}>) {
    const maxLength = Math.max(...(alsoKnownAs?.map((name) => name.length) || [0]))
    const maxZIndex = alsoKnownAs?.length || 0
    return (
        <div className="profile-names">
            <ProfileName zIndex={maxZIndex + 1}>{children}</ProfileName>
            {alsoKnownAs?.map((name, index) => (
                <ProfileName isAlt key={name} padRightCharacters={maxLength - name.length} zIndex={maxZIndex - index}>
                    {name}
                </ProfileName>
            ))}
            <style jsx>{`
                .profile-names {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
            `}</style>
        </div>
    )
}

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

export interface ProfilePictureSources {
    src: string
    avif?: string
    jpeg?: string
    png?: string
    webp?: string
}

const ProfilePicture = ({ avif, jpeg, png, webp }: ProfilePictureSources) => (
    <picture>
        {avif && <source srcSet={avif} type="image/avif" />}
        {webp && <source srcSet={webp} type="image/webp" />}
        {png && <source srcSet={jpeg} type="image/png" />}
        <img className="picture" src={jpeg} alt="profile picture" style={{ height: 'auto', width: '100%' }} />
    </picture>
)

export const Header = ({
    alsoKnwonAs,
    background,
    children,
    profileName,
    profilePicture,
}: PropsWithChildren<{
    alsoKnwonAs?: string[]
    background?: string
    profileName: ReactNode
    profilePicture: ProfilePictureSources
}>) => (
    <header className="header row">
        <div className="column column-picture">
            <a className="picture-container" href={profilePicture.src}>
                <ProfilePicture {...profilePicture} />
            </a>
        </div>

        <div className="column column-names">
            <ProfileNames alsoKnownAs={alsoKnwonAs}>{profileName}</ProfileNames>
            <div className="rest-container">{children}</div>
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
                flex-basis: 65%;
            }

            .column-names .rest-container {
                ${background ? `background: url(${background});` : ''}
                background-attachment: fixed;
                background-color: #f5f5f5;
                border-radius: ${BORDER_RADIUS};
                box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
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
