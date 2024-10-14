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
                this.projects = results.data.results;
            });
        }
    },
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
                        <p class="card-text"><strong>Descrizione:</strong> {{ project.description.substr(0, 300) +
                            '[...]' }}
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Start: </strong>{{ project.start_date }}</li>
                        <li class="list-group-item" v-if="(project.end_date)"><strong>End: </strong>{{ project.end_date
                            }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: 650px;
}
</style>