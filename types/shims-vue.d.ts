// 外部模块定义：主要为项目内所有的其他的 TS 不识别的文件做模块声明
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module "*.ts" {
//   import Vue from "vue";
//   export default Vue;
// }

declare module '*.scss' {
  const scss: Record<string, string>;
  export default scss;
}

declare module 'draggable';
