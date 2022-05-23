export default {

    name: 'foo',
    component: () => import(/*webpackChunkName: "fooLayout" */ '@/modules/foo/layouts/FooLayout.vue'),
    children: [
        
        {
            path: '',
            name: 'no-foo',
            component: () => import(/*webpackChunkName: "no foo" */ '@/modules/foo/views/NoFooSelected.vue')
        },
        {
            path: ':id',
            name: 'foo',
            component: () => import(/*webpackChunkName: "foo" */ '@/modules/foo/views/Foo.vue'),
            props: ( route:any ) => {
                return {
                    id: route.params.id,
                }
            }

        }
    ]

}