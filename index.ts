import { App } from "vue";
import installer from "./packages/components/installer";

import { components } from "./packages/components/index";

// Install all components
export default {
    install(app: App) {
        installer(app);
    },

    // Register all components
    ...components
}