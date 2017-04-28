/**
 * Created by Administrator on 2017/4/28.
 */
var loadbyUserViewName = function (name) {
    return require(`src/pages/user/${name}.vue`);
}
export default [
    {path: '/user/order', component: loadbyUserViewName('Order')},
    {path: '/user/subs', component: loadbyUserViewName('Subs')},
    {path: '/user/orderBefore', component: loadbyUserViewName('OrderBefore')},
    {path: '/user/addAddress', component: loadbyUserViewName('AddAddress')},
    {path: '/user/orderAfter', component: loadbyUserViewName('OrderAfter')},
    {path: '/user/myOrder', component: loadbyUserViewName('MyOrder')},
    {path: '/user/orderList', component: loadbyUserViewName('OrderList')}
]
