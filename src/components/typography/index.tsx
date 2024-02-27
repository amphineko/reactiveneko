import { PropsWithChildren } from 'react'
import { classnames } from '../../lib/classnames'

export const Description = ({ children }: PropsWithChildren) => (
    <>
        <div className="description">{children}</div>
        <style jsx>{`
            .description {
                display: block;
                padding: 1em;
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
            <span className={classnames('redact', hoverToShow && 'hover-to-show')}>{children}</span>
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
                    url('/assets/fonts/redacted/otf/RedactedScript-Bold.otf') format('woff2'),
                    url('/assets/fonts/redacted/ttf/RedactedScript-Bold.ttf') format('opentype'),
                    url('/assets/fonts/redacted/woff/RedactedScript-Bold.woff2') format('truetype');
            }
        `}
    </style>
)
