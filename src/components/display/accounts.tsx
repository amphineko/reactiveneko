import { PropsWithChildren, ReactNode } from 'react'
import { Dimmed, Redacted } from '../typography'
import { Capsule } from './capsule'
import { BORDER_RADIUS } from '../../lib/css'

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
        <Capsule background={capsuleBackground} href={href} icon={icon} iconBackground={iconBackground}>
            <span className="platform">{platform}</span>
            <Dimmed>{redacted ? <Redacted hoverToShow={redactedHoverToShow}>{children}</Redacted> : children}</Dimmed>
        </Capsule>
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
                color: #333;
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

const Container = ({
    background,
    children,
}: PropsWithChildren<{
    background?: string
}>) => (
    <div className="container">
        {children}
        <style jsx>{`
            .container {
                ${background ? `background: url(${background});` : ''}
                background-attachment: fixed;
                background-color: #f5f5f5;
                border-radius: ${BORDER_RADIUS};
                box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1rem;
                padding: 1rem;
            }
        `}</style>
    </div>
)

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
