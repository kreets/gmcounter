import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import GameCounter from '../views/GameCounter.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/game/:name',
        name: 'GameCounter',
        component: GameCounter,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
