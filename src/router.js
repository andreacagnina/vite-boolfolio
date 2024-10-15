import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProject from "./pages/AppProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProject
        },
    ]
});

export {
    router
};