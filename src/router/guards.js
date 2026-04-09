import { useMeStore } from '@/stores/me';

export const notAuth = (to, from, next) => {
    const meStore = useMeStore();
    if (meStore.isLoggedIn) {
        next();
    } else {
        next({ name: 'login' });
    }
}

export const auth = (to, from, next) => {
    const meStore = useMeStore();
    if (meStore.isLoggedIn) {
        next({ name: 'dashboard' });
    } else {
        next();
    }
}