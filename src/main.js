// Import Vue
import Vue from 'vue'

import flex from 'static/js/flexible.js'
import moment from 'moment'
moment.locale('zh-cn');

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
import Routes from './router/routes.js'

// Import App Component
import App from './main.vue'

// Import vue
import VueResource from  'vue-resource'

import VueCommonDirective from './directives/commonDirective.js'

import VueExends from './assets/static/js/vueExends'

Vue.use(VueResource);

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

window.localStorage.setItem("language", 'en-US');

// Init App
new Vue({
    el: '#app',
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
})
