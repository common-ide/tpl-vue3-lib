

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



const installer = function (app: App) {
    if ((installer as any).installed) return
    (installer as any).installed = true;

    // install naive ui
    app.use(naive);
    for (let key in components) {
        const comp = Reflect.get(components, key);
        app.component(comp.name, comp);
    }
}



export default installer;