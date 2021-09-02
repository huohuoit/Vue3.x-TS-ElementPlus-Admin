import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; // 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D

import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';
import VitePluginElementPlus from 'vite-plugin-element-plus'; // 按需加载插件

const pathResolve = (dir: string): any => {
  // 编译下路径（绝对路径）
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  // 统一配置别名对象
  '/@': pathResolve('src')
  //解决开发环境下的警告
  // "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
};

// https://vitejs.dev/config/
export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      styleImport({
        libs: [
          // 按需加载element-plus
          // {
          //   libraryName: 'element-plus',
          //   esModule: true,
          //   ensureStyleFile: true,
          //   resolveStyle: (name) => {
          //     name = name.slice(3)
          //     return `element-plus/packages/theme-chalk/src/${name}.scss`;
          //   },
          //   resolveComponent: (name) => {
          //     return `element-plus/lib/${name}`;
          //   },
          // },
        ]
      }),
      // 按需加载element-plus 官方改进版
      VitePluginElementPlus({ useSource: true }) // useSource 为 true 时，使用 [component name].scss 源文件
    ],
    resolve: {
      alias
    }
  };
};
