import { PropsWithChildren, ReactNode } from 'react'
import { classnames } from '../../lib/classnames'
import { BORDER_RADIUS_SMALL } from '../../lib/css'

export const Capsule = ({
    background,
    children,
    href,
    icon,
    iconBackground,
    iconColor,
    iconType,
    sharp,
}: PropsWithChildren<{
    background?: string
    href?: string
    icon?: ReactNode
    iconBackground?: string
    iconColor?: string
    iconType?: 'round' | 'sharp'
    sharp?: boolean
}>) => {
    const className = classnames({
        capsule: true,
        sharp,
    })

    const iconContainerClassName = classnames({
        'icon-container': true,
        round: iconType === 'round' || !iconType,
        sharp: iconType === 'sharp',
    })

    const child = (
        <>
            {icon ? <span className={iconContainerClassName}>{icon}</span> : null}
            {children}
            <style jsx>{`
                .icon-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    font-size: 1.75rem;
                    height: 2.5rem;
                    width: 2.5rem;

                    background: ${iconBackground ?? 'white'};
                    color: ${iconColor ?? 'inherit'};
                }

                .round {
                    border-radius: 50%;
                }

                .sharp {
                    border-radius: ${BORDER_RADIUS_SMALL};
                }
            `}</style>
        </>
    )

    return (
        <>
            {href ? (
                <a className={className} href={href} rel="noopener noreferrer" target="_blank">
                    {child}
                </a>
            ) : (
                <span className={className}>{child}</span>
            )}

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

                .sharp {
                    border-radius: ${BORDER_RADIUS_SMALL};
                    padding-right: 0;
                }
            `}</style>
        </>
    )
}
