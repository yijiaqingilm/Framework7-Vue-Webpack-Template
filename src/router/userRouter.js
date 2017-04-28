/**
 * Created by Administrator on 2017/4/28.
 */
var loadbyUserViewName = function (name) {
    return require(`src/pages/user/${name}.vue`);
}
export default [
    {path: '/user/order', component: loadbyUserViewName('Order')}
]
