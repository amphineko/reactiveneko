export const classnames = (...classnames: (string | false | undefined)[]) => {
    return classnames.filter(Boolean).join(' ')
}
