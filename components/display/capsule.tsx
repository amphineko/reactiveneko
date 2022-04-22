import { forwardRef, PropsWithChildren, ReactNode } from 'react'

export const Capsule = forwardRef<
    HTMLAnchorElement,
    PropsWithChildren<{ capsuleBackground?: string; href?: string; icon: ReactNode; iconBackground?: string }>
>(({ capsuleBackground, children, href, icon, iconBackground }, ref) => {
    return (
        <>
            <a className="capsule" href={href ?? '#'} ref={ref} rel="noopener noreferrer" target="_blank">
                <span className="icon-container">{icon}</span>
                {children}
            </a>

            <style jsx>{`
                .capsule {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5em;

                    border-radius: 50vh;
                    padding: 0.2em;
                    padding-right: 0.75em;
                    width: auto;

                    background: ${capsuleBackground ?? '#354c64aa'};
                    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
                    color: white;
                    text-decoration: none;
                    text-shadow: 0 0 0.5em rgba(0, 0, 0, 0.25);

                    transition: box-shadow 0.25s ease;
                }

                .capsule:hover {
                    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.5);
                }

                .icon-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    font-size: 1.5em;
                    height: 2em;
                    width: 2em;

                    border-radius: 50%;

                    background: ${iconBackground ?? 'white'};
                }
            `}</style>
        </>
    )
})

Capsule.displayName = Object.keys({ Capsule })[0]
