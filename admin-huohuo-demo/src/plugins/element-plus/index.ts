import { App } from 'vue';
import "element-plus/packages/theme-chalk/src/base.scss";
import {
    ElButton,
    ElInput,
    ElForm,
    ElFormItem,
} from "element-plus";

const components = [
    ElButton,
    ElInput,
    ElForm,
    ElFormItem,
];
const plugins = [];

export function useElementPlus(app: App) {
    components.forEach((component) => {
        app.component(component.name, component);
    });
    plugins.forEach((plugin) => {
        app.use(plugin);
    });
}