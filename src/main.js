// Import Vue
import Vue from 'vue'
console.log(Vue.config);
import flex from './lib/flexible.js'
import moment from 'moment'
moment.locale('zh-cn');
import FastClick from 'fastclick'
FastClick.attach(document.body)

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'


// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

// Import App Custom Styles
//import AppStyles from 'src/assets/vue/sass/accordion.scss'


// Import Routes
import Routes from './router'

// Import App Component
import App from './main.vue'

// Import vue
import VueResource from  'vue-resource'

import VueCommonDirective from './directives/commonDirective.js'

import VueExends from './lib/vueExends'

Vue.use(VueResource);

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

window.localStorage.setItem("language", 'en-US');


// Init App
new Vue({
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        routes: Routes,
        pushState: true
    },
    // Register App Component
    components: {
        app: App
    }
}).$mount('#app')
