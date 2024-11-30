import { PropsWithChildren } from 'react'
import { IconType } from 'react-icons'
import { TbExternalLink } from 'react-icons/tb'
import { BORDER_RADIUS } from '../../lib/css'
import Background from '../../assets/images/blueprint-footer.svg'

export const FooterParagraph = ({
    backgroundColor,
    color,
    children,
    icon: Icon,
}: PropsWithChildren<{ backgroundColor?: string; color?: string; icon: IconType }>) => (
    <>
        <p className="paragraph">
            <span className="icon">
                <Icon />
            </span>
            {children}
            {backgroundColor}
        </p>
        <style jsx>{`
            .paragraph {
                color: ${color ?? '#eee'};
                text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.5);

                font-size: 0.8em;
                margin: 0;
                padding: 0.75em 1em;
            }

            .icon {
                display: inline-block;
                font-size: 1.2em;
                vertical-align: middle;
                width: 1.25em;
            }
        `}</style>
    </>
)

export const FooterLink = ({ children, href }: PropsWithChildren<{ href: string }>) => (
    <>
        <a className="footer-link" href={href} rel="noopener noreferrer" target="_blank">
            {children}
            <span className="footer-external-link-icon">
                <TbExternalLink />
            </span>
        </a>
        <style jsx>{`
            .footer-link {
                color: inherit;
                text-decoration: none;
            }

            .footer-external-link-icon {
                font-size: 0.75em;
                margin-left: 0.5em;
                vertical-align: 0.25em;
            }
        `}</style>
    </>
)

export const Footer = ({ children }: PropsWithChildren) => (
    <>
        <footer className="footer">{children}</footer>
        <style jsx>{`
            .footer {
                background: url(${Background});
                background-attachment: fixed;
                border-radius: ${BORDER_RADIUS};
                margin-top: 1rem;
            }
        `}</style>
    </>
)
