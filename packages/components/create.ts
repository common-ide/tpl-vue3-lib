import { type Component, type App, type DefineComponent } from 'vue';
import {COMP_PREFIX, VERSION} from './contants'
import { commonInstall } from './installer';

type ComponentType = any

export interface SZInstance {
    version: string
    componentPrefix: string
    install: (app: App) => void
}

interface SZCreateOptions {
    components?: ComponentType[]
    componentPrefix?: string
}

function create({
    componentPrefix = COMP_PREFIX,
    components = []
}: SZCreateOptions = {}): SZInstance {
    const installTargets: App[] = []
    function registerComponent(
        app: App,
        name: string,
        component: ComponentType
    ): void {
        const registered = app.component(componentPrefix + name)
        if (!registered) {
            app.component(
                componentPrefix + name,
                component as Component<any> | DefineComponent<any>
            )
        }
    }
    function install(app: App): void {
        if (installTargets.includes(app)) return
        installTargets.push(app);

        commonInstall(app);

        components.forEach((component) => {
            const { name, alias } = component
            registerComponent(app, name as string, component)
            if (alias) {
                alias.forEach((aliasName: string) => {
                    registerComponent(app, aliasName, component)
                })
            }
        })
    }
    return {
        version: VERSION,
        componentPrefix,
        install
    }
}

export default create