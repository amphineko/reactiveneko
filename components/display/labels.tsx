import { PropsWithChildren, ReactNode } from 'react'

export const LabelItem = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <span className="label-item">
            {children}
            <style jsx>{`
                .label-item {
                    color: #222;
                    display: inline-block;
                    font-size: 1em;
                    vertical-align: middle;
                }
                .label-item::before {
                    content: '|';
                    font-size: 0.5em;
                    margin: 0.5em;
                    vertical-align: middle;
                    background: rgba(0, 0, 0, 0.25);
                    color: transparent;
                }
                .label-item:first-child::before {
                    content: ' ';
                }
            `}</style>
        </span>
    )
}

export const LabelGroup = ({
    children,
    icon,
    title,
}: PropsWithChildren<{
    icon?: ReactNode
    title?: string
}>) => {
    return (
        <div className="label-group" title={title}>
            {icon}

            <div className="labels">{children}</div>

            <style jsx>{`
                .label-group {
                    align-items: center;
                    background-color: #f5f5f5;
                    box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
                    display: flex;
                    line-height: 2rem;
                    margin-top: 1.5rem;
                    padding: 0 0.5rem;
                    position: relative;
                }

                .label-group::before {
                    bottom: 2rem;
                    color: white;
                    content: '${title}';
                    font-size: 0.75em;
                    position: absolute;
                    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
                }

                .icon {
                    display: inline-block;
                    vertical-align: -0.2rem;
                }

                .labels {
                    display: inline-flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                }
            `}</style>
        </div>
    )
}
