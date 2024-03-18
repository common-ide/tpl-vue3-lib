

import { App } from "vue";
import { components } from "./index";

import {
  // create naive ui
  create,
  // component
  NButton
} from 'naive-ui';

const naive = create({
    components: [NButton]
})

export const commonInstall = (app: App) => {
    app.use(naive)
}


const installer = function (app: App) {
    if ((installer as any).installed) return
    (installer as any).installed = true;

    // install naive ui
    commonInstall(app);

    for (let key in components) {
        const comp = Reflect.get(components, key);
        app.component(comp.name, comp);
    }
}



export default installer;