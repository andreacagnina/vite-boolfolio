<script>
import axios from 'axios';
import AppProjectCard from './AppProjectCard.vue';

export default {
    name: 'AppProject',
    components: {
        AppProjectCard,
    },
    data() {
        return {
            projects: [],
            first_page: 1,
            last_page: null,
            current_page: null,
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/project').then((results) => {
                this.projects = results.data.results.data;
                this.last_page = results.data.results.last_page;
                this.current_page = results.data.results.current_page;
            });
        },
        goToPage(page) {
            this.current_page = page;
            axios.get('http://127.0.0.1:8000/api/project', { params: { page: page } }).then((results) => {
                this.projects = results.data.results.data;
            });
        },
    }
}
</script>

<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12">
                <h1>Elenco dei projects</h1>
            </div>
        </div>
        <div class="row">
            <AppProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <div class="row">
            <div class="col-12">
                <nav aria-label="Page navigation example ">
                    <ul class="pagination justify-content-center mt-3">
                        <li class="page-item"><a class="page-link" :class="current_page == 1 ? 'disabled' : ''" href="#"
                                @click.prevent="goToPage(current_page
                                    - 1)">Previous</a></li>
                        <li class="page-item"><a class="page-link" :class="current_page == last_page ? 'disabled' : ''"
                                href="#" @click.prevent="goToPage(current_page
                                    + 1)">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-link:focus,
.page-link:active {
    outline: none;
    background-color: initial;
    border-color: initial;
    box-shadow: none;
}
</style>