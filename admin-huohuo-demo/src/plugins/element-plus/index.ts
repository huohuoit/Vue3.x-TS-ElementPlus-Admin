import { App } from 'vue'
import "element-plus/packages/theme-chalk/src/base.scss";
import { ElButton } from 'element-plus'

const components = [ElButton];
const plugins = [];

export function useElementPlus(app: App) {
    components.forEach((component) => {
        app.component(component.name, component);
    });
    plugins.forEach((plugin) => {
        app.use(plugin);
    });
}