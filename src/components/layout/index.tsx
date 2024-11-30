import { PropsWithChildren, ReactNode } from 'react'
import { BORDER_RADIUS } from '../../lib/css'

export const Column = ({ children, width }: PropsWithChildren<{ width?: string }>) => (
    <>
        <div className="column">{children}</div>
        <style jsx>{`
            .column {
                flex-basis: ${width || '50%'};
            }

            @media (max-width: 40rem) {
                .column {
                    flex-basis: 100%;
                }
            }
        `}</style>
    </>
)

export const Row = ({
    background,
    children,
    style,
}: PropsWithChildren<{
    background?: string
    breakpoint?: string
    style?: ReactNode
}>) => (
    <>
        <section className="block">{children}</section>
        <style jsx>{`
            .block {
                ${background ? `background: url(${background});` : ''}
                background-attachment: fixed;
                background-color: #ffffffee;
                border-radius: ${BORDER_RADIUS};
                box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);

                display: flex;
                align-items: center;
                flex: 1;
                flex-direction: row;
                flex-wrap: wrap;

                width: 100%;
            }
        `}</style>
        {style}
    </>
)
