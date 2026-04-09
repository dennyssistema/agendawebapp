import { useMeStore } from '@/stores/me';
import { notAuth } from './guards';

export default [
    {
        path: '/',
        component: () => import('@/layouts/full/FullLayout.vue'),
        beforeEnter: notAuth,
        children: [
            {
                name: 'dashboard',
                path: 'dashboard',
                component: () => import('@/pages/dashboard/index.vue')
            },
        ]
    }
];
