/**
 * Created by Administrator on 2017/4/28.
 */
var loadbyStoreViewName = function (name) {
    return require(`src/pages/store/${name}.vue`);
}
export default [
    {path: '/store/center', component: loadbyUserViewName('Shop')},
    {path: '/store/:shopId', component: loadbyUserViewName('ShopDetail')}
]