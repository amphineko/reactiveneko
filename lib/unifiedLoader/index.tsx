import { Context, createContext, PropsWithChildren, useContext } from 'react'
import { useQuery } from 'react-query'

export abstract class AbstractLoader<T> {
    protected abstract fetch(): Promise<T>

    /**
     * Load data on the client side.
     * By default, UnifiedLoader will fallback to results from getServerSide and getStatic when this method is failed.
     */
    public async get(): Promise<T> {
        return await this.fetch()
    }

    public async getStatic(): Promise<T> {
        return await this.fetch()
    }

    public async getServerSide(): Promise<T> {
        return await this.fetch()
    }
}

export interface UnifiedLoaderContext<ServerSideProps, StaticProps> {
    serverSideProps?: ServerSideProps
    staticProps?: StaticProps
}

type TLoaders = {
    [K: string]: AbstractLoader<unknown> extends AbstractLoader<infer U> ? AbstractLoader<U> : never
}

type TServerSideProps<Loaders extends TLoaders> = {
    [K in keyof Loaders]: ReturnType<Loaders[K]['getServerSide']> extends Promise<infer U> ? U : never
}

type TStaticProps<Loaders extends TLoaders> = {
    [K in keyof Loaders]: ReturnType<Loaders[K]['getStatic']> extends Promise<infer U> ? U : never
}

export class UnifiedLoader<
    Loaders extends TLoaders,
    StaticProps extends TStaticProps<Loaders>,
    ServerSideProps extends TServerSideProps<Loaders>
> {
    private readonly _context = createContext<UnifiedLoaderContext<ServerSideProps, StaticProps>>({})

    private readonly _loaders: Loaders

    public get context(): Context<UnifiedLoaderContext<ServerSideProps, StaticProps>> {
        return this._context
    }

    public get loaders(): Loaders {
        return this._loaders
    }

    public constructor(loaders: Loaders) {
        this._context = undefined
        this._loaders = loaders
    }

    public async getServerSideProps(): Promise<ServerSideProps> {
        return Object.fromEntries(
            await Promise.all(
                Object.entries(this._loaders).map(async ([key, loader]) => {
                    return [key, await loader.getServerSide()]
                })
            )
        ) as ServerSideProps
    }

    public async getStaticProps(): Promise<StaticProps> {
        return Object.fromEntries(
            await Promise.all(
                Object.entries(this._loaders).map(async ([key, loader]) => {
                    return [key, await loader.getStatic()]
                })
            )
        ) as StaticProps
    }

    public Context(props: PropsWithChildren<UnifiedLoaderContext<ServerSideProps, StaticProps>>): JSX.Element {
        return <this._context.Provider value={props}>{props.children}</this._context.Provider>
    }

    public useLoader(loaderName: keyof Loaders): ReturnType<typeof useQuery> {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useUnifiedLoader(this, loaderName)
    }
}

export const useUnifiedLoader = <
    Loaders extends TLoaders,
    StaticProps extends TStaticProps<Loaders>,
    ServerSideProps extends TServerSideProps<Loaders>
>(
    unifiedLoader: UnifiedLoader<Loaders, StaticProps, ServerSideProps>,
    loaderName: keyof Loaders
): ReturnType<typeof useQuery> => {
    const context = useContext(unifiedLoader.context)

    const serverSideValue = context.serverSideProps[loaderName]
    const staticValue = context.staticProps[loaderName]
    const initialData = serverSideValue ?? staticValue

    return useQuery(
        [loaderName],
        async () => {
            return await unifiedLoader.loaders[loaderName].get()
        },
        {
            initialData,
        }
    )
}
