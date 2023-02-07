import { PropsWithChildren, ReactNode } from 'react'
import { Dimmed, Redacted } from '../typography'
import { CapsuleLink } from './capsule'

const Account = ({
    children,
    capsuleBackground,
    href = '#',
    icon,
    iconBackground,
    platform,
    redacted = false,
    redactedHoverToShow = false,
}: PropsWithChildren<{
    capsuleBackground?: string
    href?: string
    icon?: ReactNode
    iconBackground?: string
    platform: string
    redacted?: boolean
    redactedHoverToShow?: boolean
}>) => {
    return (
        <CapsuleLink background={capsuleBackground} href={href} icon={icon} iconBackground={iconBackground}>
            <span className="platform">{platform}</span>
            <Dimmed>{redacted ? <Redacted hoverToShow={redactedHoverToShow}>{children}</Redacted> : children}</Dimmed>
        </CapsuleLink>
    )
}

const Category = ({ children, title }: PropsWithChildren<{ title: string }>) => (
    <div className="category">
        <span className="title">{title}</span>
        <span className="row">{children}</span>
        <style jsx>{`
            .category {
                align-items: flex-start;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
            }

            .title {
                color: #eee;
                font-size: 1rem;
            }

            .title::before {
                content: '#';
                color: #aaa;
                vertical-align: 0.1rem;
            }

            .row {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 0.75rem;
            }
        `}</style>
    </div>
)

const Container = ({ children }: PropsWithChildren<unknown>) => <>{children}</>

export interface AccountShowcaseProps {
    groups: {
        title: string
        accounts: {
            title: string
            href?: string
            icon: ReactNode
            redacted?: boolean
        }
    }
}

export const AccountShowcase = {
    Account: Account,
    Category: Category,
    Container: Container,
}
