/**
 * Created by Administrator on 2017/4/24.
 */
import  Vue from 'vue';
/* 设置 语言*/
Vue.prototype.setLangs = function (fileName) {
  return require(`src/langs/${localStorage.getItem('language')}/${fileName}.js`);
}
