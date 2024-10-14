<script>
import axios from 'axios';
export default {
    name: 'AppProject',
    data() {
        return {
            projects: [],
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
            <div class="col-3 gy-4" v-for="project in projects" :key="project.id">
                <div class="card" style="width: 18rem;">
                    <img :src="project.cover_project_image.startsWith('http') ? project.cover_project_image : `http://127.0.0.1:8000/storage/${project.cover_project_image}`"
                        class="card-img-top" alt="Project img">
                    <div class="card-body">
                        <h5 class="card-title"><strong>Titolo:</strong> {{ project.name }}</h5>
                        <br>
                        <p class="card-text"><strong>Descrizione:</strong> {{ project.description }}
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-if="project.type != null"><strong>Type: </strong>{{
                            project.type.name }}</li>
                        <li class="list-group-item" v-if="project.technologies.length > 0"><strong>Technology:
                            </strong> <span v-for="technology in project.technologies" :key="technology.id">{{
                                technology.name }} &nbsp;</span>
                            <ul class="list-unstyled">
                                <li>

                                </li>
                            </ul>
                        </li>
                        <li class="list-group-item"><strong>Start: </strong>{{ project.start_date }}</li>
                        <li class="list-group-item" v-if="(project.end_date)"><strong>End: </strong>{{ project.end_date
                            }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <nav aria-label="Page navigation example ">
                    <ul class="pagination justify-content-center mt-3">
                        <li class="page-item"><a class="page-link" :class="current_page == 1 ? 'disabled' : ''" href="#"
                                @click="goToPage(current_page
                                    - 1)">Previous</a></li>
                        <li class="page-item"><a class="page-link" :class="current_page == last_page ? 'disabled' : ''"
                                href="#" @click="goToPage(current_page
                                    + 1)">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-text {
    overflow: auto;
    max-height: 250px;
}
</style>