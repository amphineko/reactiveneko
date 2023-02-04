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

export const LabelGroupIndentContext = createContext<{
    maxContentLength: number
    maxCommentLength: number
    updateLength: (length: number, commentLength: number, elementId: string) => void
}>({
    maxContentLength: 0,
    maxCommentLength: 0,
    updateLength: () => void undefined,
})

export const LabelItemIndentContext = createContext<{
    prepend: number // space to prepend to the comment for aligned indentation
    width: number // width of the comment for unified wrapping
}>({
    prepend: 0,
    width: 0,
})

export const LabelItem = ({ children, comment }: PropsWithChildren<{ comment?: string }>) => {
    const { maxContentLength, maxCommentLength, updateLength: updateLength } = useContext(LabelGroupIndentContext)

    const self = useId()
    const contentLength = useMemo(() => {
        const childrenLength = Children.map(children, (child) => (typeof child === 'string' ? child.length : 0))
        return childrenLength.reduce((a, b) => a + b, 0)
    }, [children])
    useEffect(() => {
        updateLength(contentLength, (comment ?? '').length, self)
        return () => updateLength(0, 0, self)
    }, [comment, self, contentLength, updateLength])

    const prepend = useMemo(() => maxContentLength - contentLength, [maxContentLength, contentLength])

    const commentPrefix = '// '

    return (
        <LabelItemIndentContext.Provider value={{ prepend, width: maxCommentLength }}>
            <span className="item">
                <span className="content">{children}</span>
                {comment && <span className="comment">{comment}</span>}
            </span>

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
                    width: ${maxCommentLength + commentPrefix.length}ch;
                }

                .comment::before {
                    content: '${commentPrefix}';
                }
            `}</style>
        </LabelItemIndentContext.Provider>
    )
}

export const LabelGroup = ({
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
        [setLengthMap]
    )

    const indentCtx = {
        maxContentLength,
        maxCommentLength,
        updateLength,
    }

    return (
        <LabelGroupIndentContext.Provider value={indentCtx}>
            <div className="group">
                {children}
                <style jsx>{`
                    .group {
                        display: flex;
                        flex-direction: column;
                    }
                `}</style>
            </div>
        </LabelGroupIndentContext.Provider>
    )
}
