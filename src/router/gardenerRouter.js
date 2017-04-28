/**
 * Created by Administrator on 2017/4/28.
 */
var loadbyGardenerViewName = function (name) {
    return require(`src/pages/gardener/${name}.vue`);
}
export default [{path: '/gardener/order', component: loadbyGardenerViewName('Order')}]