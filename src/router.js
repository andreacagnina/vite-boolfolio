import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProject from "./pages/AppProject.vue";
import AppContact from "./pages/AppContact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: AppHome
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: AppProject
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },
    ]
});

export {
    router
};