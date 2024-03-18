# __repo__(noCase)/__name__(noCase)

基于 vite + vue3 + typescript 的组件


## 使用

先安装：
```shell
npm i __repo__(noCase)/__name__(noCase)
```

然后在项目中按需引入：

```typescript
import { SZHello, create } from '__repo__(noCase)/__name__(noCase)';
import '__repo__(noCase)/__name__(noCase)/dist/style.css';

const szkits = create({
    components: [
        SZHello
    ]
    // 这里可以传入一些配置项
});


app.use(szkits).mount('#app')
```

这样就可以在项目中使用组件了：

```html
<sz-hello></sz-hello>
```