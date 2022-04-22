import { PropsWithChildren, ReactNode } from 'react'

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

export const Row = ({ children, style }: PropsWithChildren<{ breakpoint?: string; style?: ReactNode }>) => (
    <>
        <section className="block">{children}</section>
        <style jsx>{`
            .block {
                background: #ffffffee;
                border-radius: 2em;
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
