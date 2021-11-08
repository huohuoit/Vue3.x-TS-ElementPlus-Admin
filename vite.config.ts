import { UserConfigExport} from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; // 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D

import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';
import ElementPlus from "unplugin-element-plus/vite"; // 该方式 + 手动按需导入，包体积较小。（官方方式体积大且有 Bug）


// import  createProxy  from "./build/proxy";

const pathResolve = (dir: string): any => {
  // 编译下路径（绝对路径）
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  // 统一配置别名对象
  '/@': pathResolve('src')
  // 解决开发环境下的警告
  // "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
};

// https://vitejs.dev/config/
export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      styleImport({
        libs: []
      }),
      ElementPlus({}),
    ],
    resolve: {
      alias
    },

    // 反向代理
    // proxy: createProxy(['https://www.baidu.com/'])
  };
};
