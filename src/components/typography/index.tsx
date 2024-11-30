import { PropsWithChildren } from 'react'
import { classnames } from '../../lib/classnames'

import RedactedOtf from '../../assets/fonts/redacted/otf/RedactedScript-Bold.otf'
import RedactedTtf from '../../assets/fonts/redacted/ttf/RedactedScript-Bold.ttf'
import RedactedWoff2 from '../../assets/fonts/redacted/woff/RedactedScript-Bold.woff2'
import { TbExternalLink } from 'react-icons/tb'

export const Description = ({
    background,
    children,
}: PropsWithChildren<{
    background?: string
}>) => (
    <>
        <div className="description">{children}</div>
        <style jsx>{`
            .description {
                ${background ? `background: url(${background});` : ''}
                display: block;
                padding: 1em;
            }
        `}</style>
    </>
)

export const DescriptionTitle = ({
    children,
    fontSize,
    smallCaps,
}: PropsWithChildren<{ fontSize?: string; smallCaps?: boolean }>) => (
    <>
        <h2
            className={classnames({
                'description-title': true,
                'small-caps': smallCaps,
            })}
        >
            {children}
        </h2>
        <style jsx>{`
            .description-title {
                border-bottom: 0.15rem solid #777;
                display: inline-block;
                font-size: ${fontSize || '1.5em'};
                font-weight: 300;
                line-height: 1.5em;
                margin: 0;
                padding: 0;
            }

            .small-caps {
                font-variant: small-caps;
            }
        `}</style>
    </>
)

export const Dimmed = ({ children }: PropsWithChildren) => (
    <>
        <span className="dimmed">{children}</span>
        <style jsx>{`
            .dimmed {
                opacity: 0.8;
            }
        `}</style>
    </>
)

export const ExternalLink = ({ children, href }: PropsWithChildren<{ href: string }>) => (
    <>
        <a className="ext-link" href={href} rel="noopener noreferrer" target="_blank">
            {children}
            <span className="external-link-icon">
                <TbExternalLink />
            </span>
        </a>
        <style jsx>{`
            .ext-link {
                color: inherit;
            }

            .external-link-icon {
                font-size: 0.75em;
                margin-left: 0.5em;
                vertical-align: 0.25em;
            }
        `}</style>
    </>
)

export const Paragraph = ({ children }: PropsWithChildren) => (
    <>
        <p className="paragraph">{children}</p>
        <style jsx>{`
            .paragraph {
                font-size: 1.2em;
                font-weight: 300;
                line-height: 1.2em;
            }
        `}</style>
    </>
)

export const Redacted = ({
    children,
    hoverToShow,
}: PropsWithChildren<{
    hoverToShow?: boolean
}>) => (
    <>
        <span className="redacted">
            {children}
            <span className={classnames({ redact: true, 'hover-to-show': hoverToShow })}>{children}</span>
        </span>
        <style jsx>{`
            .redacted {
                position: relative;
            }

            .redact {
                font-family: 'Redacted';
                font-size: 1.2em;
                left: 0;
                line-height: 1;
                position: absolute;
                top: 0;
                transition: opacity 0.25s;
                transform: rotate(1deg);
            }

            .redact.hover-to-show:hover {
                opacity: 0.25;
            }
        `}</style>
    </>
)

export const RedactedFont = () => (
    <style jsx global>
        {`
            @font-face {
                font-family: 'Redacted';
                src:
                    url('${RedactedOtf}') format('woff2'),
                    url('${RedactedTtf}') format('opentype'),
                    url('${RedactedWoff2}') format('truetype');
            }
        `}
    </style>
)
