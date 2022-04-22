import { PropsWithChildren } from 'react'
import RegularOtf from '../../public/assets/fonts/redacted/otf/RedactedScript-Bold.otf'
import RegularTtf from '../../public/assets/fonts/redacted/ttf/RedactedScript-Bold.ttf'
import RegularWoff2 from '../../public/assets/fonts/redacted/woff/RedactedScript-Bold.woff2'

export const Description = ({ children }: PropsWithChildren<unknown>) => (
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

export const Dimmed = ({ children }: PropsWithChildren<unknown>) => (
    <>
        <span className="dimmed">{children}</span>
        <style jsx>{`
            .dimmed {
                opacity: 0.8;
            }
        `}</style>
    </>
)

export const Paragraph = ({ children }: PropsWithChildren<unknown>) => (
    <>
        <p className="paragraph">{children}</p>
        <style jsx>{`
            .paragraph {
                font-size: 1.25em;
                font-weight: 300;
                line-height: 1.75em;
            }
        `}</style>
    </>
)

export const Redacted = ({ children }: PropsWithChildren<unknown>) => (
    <>
        <span className="redacted">{children}</span>
        <style jsx>{`
            .redacted {
                font-family: 'Redacted';
            }
        `}</style>
    </>
)

export const RedactedFont = () => (
    <style jsx global>
        {`
            @font-face {
                font-family: 'Redacted';
                src: url('${RegularWoff2}') format('woff2'), url('${RegularOtf}') format('opentype'),
                    url('${RegularTtf}') format('truetype');
            }
        `}
    </style>
)
