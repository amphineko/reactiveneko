import { Children, PropsWithChildren } from 'react'

export const AccountShowcase = ({ children, title }: PropsWithChildren<{ title: string }>) => {
    return (
        <>
            <section className="section">
                <h2 className="title">{title}</h2>
                <ul className="list">
                    {Children.map(children, (child, idx) => (
                        <li className="listItem" key={idx}>
                            {child}
                        </li>
                    ))}
                </ul>
            </section>
            <style jsx>{`
                .section {
                    padding: 1em;
                    padding-top: 0;
                }

                .title {
                    border-radius: 0.5em;
                    color: #eee;
                    font-size: 1.2em;

                    display: inline-block;
                    margin: 1em;
                    margin-left: 0.5em;
                    padding: 0.25em;

                    text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.5);
                }

                .title::before {
                    color: #aaa;
                    content: '#';
                    vertical-align: 0.1em;
                }

                .list {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 0.75em;

                    margin: 0;
                    padding: 0;
                }

                .listItem {
                    display: inline-block;
                    list-style: none;
                }
            `}</style>
        </>
    )
}

export const AccountShowcaseContainer = ({ children }: PropsWithChildren<unknown>) => (
    <>
        <div className="section-container">{children}</div>
        <style jsx>{`
            .section-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                border-radius: 2em;
            }
        `}</style>
    </>
)
