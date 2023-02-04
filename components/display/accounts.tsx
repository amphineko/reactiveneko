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
                    align-items: flex-start;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .title {
                    color: #eee;
                    display: block;
                    font-size: 1.2rem;
                    margin: 0;
                    padding: 0;
                    text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.5);
                    text-wrap: none;
                }

                .title::before {
                    color: #aaa;
                    content: '#';
                    vertical-align: 0.1rem;
                }

                .list {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 0.75rem;

                    margin: 0;
                    padding: 0;
                }

                .listItem {
                    display: block;
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
                gap: 1rem;
                padding: 1rem;

                border-radius: 2rem;
            }
        `}</style>
    </>
)
