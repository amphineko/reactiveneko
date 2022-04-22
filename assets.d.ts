declare module '*.otf' {
    const src: string
    export default src
}

declare module '*.ttf' {
    const src: string
    export default src
}

declare module '*.woff2' {
    const src: string
    export default src
}

declare module '*.png' {
    const src: string
    export default src
}

declare module '*.png?resize' {
    export const src: string
    export const srcset: string
}

declare module '*.png?webp' {
    const src: string
    export default src
}

declare module '*.svg' {
    const src: string
    export default src
}
