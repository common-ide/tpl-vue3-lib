declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        SHello: typeof import('./index')['components']['SHello'],
    }
}

export { }