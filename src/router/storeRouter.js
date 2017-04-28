/**
 * Created by Administrator on 2017/4/28.
 *
 *  商品 路由
 */
var loadbyStoreViewName = function (name) {
    return require(`src/pages/store/${name}.vue`);
}
export default [
    {path: '/store/center', component: loadbyStoreViewName('Shop')},
    {path: '/store/:shopId', component: loadbyStoreViewName('ShopDetail')},
    {path: '/store/list', component: loadbyStoreViewName('ShopList')},
    {path: '/store/cart', component: loadbyStoreViewName('ShopCart')},
    {path: '/store/order', component: loadbyStoreViewName('Order')},
    {path: '/store/rental', component: loadbyStoreViewName('Rental')},
    {path: '/store/rentalPack', component: loadbyStoreViewName('RentalPack')},
]