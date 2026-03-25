export default [
    {
        path: '/',
        component: () => import('@/layouts/full/FullLayout.vue'),
        children: [
            {
                name: 'dashboard',
                path: 'dashboard',
                component: () => import('@/pages/dashboard/index.vue')
            },
        ]
    }
];
