import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppProject from "./pages/AppProject.vue";
import AppContact from "./pages/AppContact.vue";
import AppPageNotFound from "./pages/AppPageNotFound.vue";

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
            name: 'portfolio',
            component: AppProjects
        },
        {
            path: '/contacts',
            name: 'contact',
            component: AppContact
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: AppProject
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppPageNotFound
        },
    ]
});

export {
    router
};