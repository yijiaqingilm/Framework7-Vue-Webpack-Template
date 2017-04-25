var loadbyViewName = function (name) {
    return require(`src/pages/${name}.vue`);
}
export default [
    {
        path: '/about/',
        component: loadbyViewName('about')
    },
    {
        path: '/form/',
        component: loadbyViewName('form')
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: loadbyViewName('dynamic-route')
    },
    {
        path: '/accordion',
        component: loadbyViewName('accordion')
    },
    {
        path: '/login',
        component: loadbyViewName('login')
    },
    {
        path: '/param/:paramId/child/:childId',
        component: loadbyViewName('param')
    },
    {
        path: '/slot',
        component: loadbyViewName('test_slot')
    },
    {
        path: '/scroll',
        component: loadbyViewName('scroll')
    },
    {
        path: '/scroll2component',
        component: loadbyViewName('scroll2component')
    }
]
