import { reactive } from 'vue'
import axios from 'axios';

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',

    projects: [],
    first_page: 1,
    last_page: null,
    current_page: null,
    project: null,
    success: false,

    getProjects() {
        this.success = true;
        axios.get(`${this.baseUrl}/api/projects`).then((results) => {
            this.projects = results.data.results.data;
            this.last_page = results.data.results.last_page;
            this.current_page = results.data.results.current_page;
        }).finally(() => {
            this.success = false;
        });
    },

    goToPage(page) {
        this.success = true;
        this.current_page = page;
        axios.get(`${this.baseUrl}/api/projects`, { params: { page: page } }).then((results) => {
            this.projects = results.data.results.data;
        }).finally(() => {
            this.success = false;
        });;
    },

    getProject(slug) {
        this.success = true;
        axios.get(`${this.baseUrl}/api/project/${slug}`).then((results) => {
            this.project = results.data.results;
        }).finally(() => {
            this.success = false;
        });;
    },

    menuItems: [
        // {
        //     name: 'homepage',
        //     label: 'Home'
        // },
        {
            name: 'portfolio',
            label: 'Portfolio'
        },
        {
            name: 'contact',
            label: 'Contact Me'
        },
    ]
});