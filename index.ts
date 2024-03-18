import { App } from "vue";
import installer from "./packages/components/installer";

export * from "./packages/components/components";

export { default as create } from './packages/components/create'

// Install all components
export default {
    install(app: App) {
        installer(app);
    },
}