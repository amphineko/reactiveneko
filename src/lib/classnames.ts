export const classnames = (classnames: Record<string, boolean | undefined>) => {
    return Object.entries(classnames)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(' ')
}
