import { PropsWithChildren, ReactNode } from 'react'
import HeadPictureOriginal from '../../public/assets/images/amphineko.png'
import HeadPicture from '../../public/assets/images/amphineko.png?resize'
import HeadPictureWebP from '../../public/assets/images/amphineko.png?webp'

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
        <>
            <a className="standout" href={href} rel="noreferrer" target="_blank">
                {children}
            </a>
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
        </>
    )
}

export const ProfileName = ({ children }: PropsWithChildren<unknown>) => (
    <h1 className="profile-name">
        {children}
        <style jsx>{`
            .profile-name {
                color: white;
                font-family: 'Courier New';
                font-size: 2.5rem;
                font-weight: normal;

                display: inline-block;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </h1>
)

export const Header = ({ children, profileName }: PropsWithChildren<{ profileName: ReactNode }>) => (
    <header className="row">
        <div className="column left-side">
            <a className="head-picture-container" href={HeadPictureOriginal}>
                <picture>
                    <source srcSet={HeadPictureWebP} type="image/webp" />
                    <source srcSet={HeadPicture.srcset} type="image/png" />
                    <img alt="head picture of amphineko" className="head-picture" src={HeadPicture.src} />
                </picture>
            </a>
        </div>

        <div className="column right-side">
            <ProfileName>{profileName}</ProfileName>
            <div className="right-side-container">{children}</div>
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

            .right-side-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1.5em;
            }

            .left-side {
                flex-basis: 40%;
            }

            .right-side {
                flex-basis: 60%;
            }

            @media (max-width: 40rem) {
                .left-side,
                .right-side {
                    flex-basis: 100%;
                }
            }

            .head-picture {
                height: 100%;
                width: 100%;
            }

            .head-picture-container {
                background: #fff;
                border: 0.5em solid #fff;
                border-radius: 50%;
                box-shadow: 0 0 0.15em 0.15em rgb(0 0 0 / 15%);
                display: block;
                overflow: hidden;
            }
        `}</style>
    </header>
)
