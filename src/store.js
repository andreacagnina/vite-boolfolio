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

    name: '',
    surname: '',
    email: '',
    message: '',
    loading: false,
    errors: {},

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
    sendForm() {
        this.loading = true;
        const data = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            message: this.message,
        };
        this.errors = {};

        axios.post(`${this.baseUrl}/api/contacts`, data).then((results) => {
            console.log(results)
            if (results.data.success) {
                this.name = '';
                this.surname = '';
                this.email = '';
                this.message = '';
                this.success = true;
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
            }
            else {
                this.errors = results.data.errors;
            }
            this.loading = false;
        }).catch((errors) => {
            this.loading = false;
            this.errors = errors.response.data.errors
        });
    },
    resetForm() {
        this.name = '';
        this.surname = '';
        this.email = '';
        this.message = '';
        this.errors = {};
        this.success = false;
        this.loading = false;
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