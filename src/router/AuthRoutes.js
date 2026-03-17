export default [
    {
        path: '/login',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        children: [
            {
                name: 'login',
                path: '',
                component: () => import('@/pages/auth/Login.vue')
            },
        ]
    },
    {
        path: '/cadastro',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        children: [
            {
                name: 'cadastro',
                path: '',
                component: () => import('@/pages/auth/Register.vue')
            },
        ]
    }
]
