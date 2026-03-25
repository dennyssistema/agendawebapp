import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

console.log(MainRoutes);

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...MainRoutes,
        ...AuthRoutes,
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/pages/pages/Error404.vue')
        },
    ]
});

