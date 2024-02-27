import {
    Children,
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useId,
    useMemo,
    useState,
} from 'react'

export const MonolineGroupIndentContext = createContext<{
    maxContentLength: number
    maxCommentLength: number
    updateLength: (length: number, commentLength: number, elementId: string) => void
}>({
    maxContentLength: 0,
    maxCommentLength: 0,
    updateLength: () => void 0,
})

export const Monoline = ({ children, comment }: PropsWithChildren<{ comment?: string }>) => {
    const { maxContentLength, maxCommentLength, updateLength: updateLength } = useContext(MonolineGroupIndentContext)

    const self = useId()
    const contentLength = useMemo(() => {
        const childrenLength = Children.map(children, (child) => (typeof child === 'string' ? child.length : 0)) ?? []
        return childrenLength.reduce((a, b) => a + b, 0)
    }, [children])
    useEffect(() => {
        updateLength(contentLength, (comment ?? '').length, self)
        return () => {
            updateLength(0, 0, self)
        }
    }, [comment, self, contentLength, updateLength])

    // space to prepend to the comment for aligned indentation
    const prepend = useMemo(() => maxContentLength - contentLength, [maxContentLength, contentLength])

    const commentPrefix = '// '

    return (
        <span className="item">
            <span className="content">{children}</span>
            {comment && <span className="comment">{comment}</span>}

            <style jsx>{`
                .item {
                    color: #222;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap-reverse;
                    font-family: monospace;
                    font-size: 1em
                    vertical-align: middle;
                }

                .content {
                    margin-right: ${prepend + 1}ch;
                }

                .comment {
                    color: #666;

                    // append spaces to comments to align with the longest comment,
                    // helps all comments to be wrapped consistently.
                    width: ${maxCommentLength + commentPrefix.length}ch; 
                }

                .comment::before {
                    content: '${commentPrefix}';
                }
            `}</style>
        </span>
    )
}

export const MonolineGroup = ({
    children,
    tabSize = 1,
}: PropsWithChildren<{
    tabSize?: number
}>) => {
    const [lengthMap, setLengthMap] = useState<Record<string, number>>({})
    const [commentLengthMap, setCommentLengthMap] = useState<Record<string, number>>({})

    const maxContentLength = useMemo(() => {
        const max = Math.max(...Object.values(lengthMap))
        return Math.ceil(max / tabSize) * tabSize
    }, [lengthMap, tabSize])
    const maxCommentLength = useMemo(() => {
        return Math.max(...Object.values(commentLengthMap))
    }, [commentLengthMap])

    const updateLength = useCallback(
        (length: number, commentLength: number, elementId: string) => {
            setLengthMap((prev) => ({ ...prev, [elementId]: length }))
            setCommentLengthMap((prev) => ({ ...prev, [elementId]: commentLength }))
        },
        [setLengthMap],
    )

    const indentCtx = {
        maxContentLength,
        maxCommentLength,
        updateLength,
    }

    return (
        <MonolineGroupIndentContext.Provider value={indentCtx}>
            <div className="group">
                {children}
                <style jsx>{`
                    .group {
                        display: flex;
                        flex-direction: column;
                    }
                `}</style>
            </div>
        </MonolineGroupIndentContext.Provider>
    )
}
