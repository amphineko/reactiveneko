import { PropsWithChildren, ReactNode } from 'react'

export const CapsuleLink = ({
    background,
    children,
    href,
    icon,
    iconBackground,
}: PropsWithChildren<{ background?: string; href?: string; icon: ReactNode; iconBackground?: string }>) => {
    return (
        <>
            <a className="capsule" href={href ?? '#'} rel="noopener noreferrer" target="_blank">
                <span className="icon-container">{icon}</span>
                {children}
            </a>

            <style jsx>{`
                .capsule {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;

                    border-radius: 50vh;
                    padding: 0rem;
                    padding-right: 0.75rem;
                    width: auto;

                    background: ${background ?? '#354c64aa'};
                    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25);
                    color: white;
                    text-decoration: none;
                    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);

                    transition: box-shadow 0.25s ease;
                }

                .capsule:hover {
                    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5);
                }

                .icon-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    font-size: 1.75rem;
                    height: 2.5rem;
                    width: 2.5rem;

                    border-radius: 50%;

                    background: ${iconBackground ?? 'white'};
                }
            `}</style>
        </>
    )
}
