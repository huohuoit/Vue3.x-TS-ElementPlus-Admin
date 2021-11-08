import Vue, { VNode } from 'vue';

// JSX 语法的全局命名空间：当在 tsconfig 内开启了 jsx 语法支持后，其会自动识别对应的 .tsx 结尾的文件
declare module '*.tsx' {
  import Vue from 'compatible-vue';
  export default Vue;
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
