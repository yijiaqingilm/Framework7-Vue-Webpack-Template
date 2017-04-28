/**
 * Created by Administrator on 2017/4/28.
 */
var loadbySellViewName = function (name) {
    return require(`src/pages/sell/${name}.vue`);
}
export default [{path: '/sell/profile', component: loadbySellViewName('Profile')}]