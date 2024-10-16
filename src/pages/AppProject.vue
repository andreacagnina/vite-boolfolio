<script>
import { store } from '../store.js';
export default {
    name: 'AppProject',
    data() {
        return {
            store,

        }
    },
    created() {
        const slug = this.$route.params.slug;
        store.getProject(slug);
    },
    methods: {
        // getProject() {
        //     axios.get(`${store.baseUrl}api/project/${this.$route.params.slug}`).then((results) => {
        //         this.project = results.data.results;
        //     })
        // },
    },
    computed: {
        project() {
            return store.project;
        }
    }
}
</script>

<template>
    <section v-if="project">
        <div class="container my-5 my-lg-3">
            <div class="row">
                <div class="col-12">
                    <div class="content w-h-cust">
                        <img :src="project.cover_project_image.startsWith('http') ? project.cover_project_image : `${store.baseUrl}/storage/${project.cover_project_image}`"
                            class="card-img-top" alt="Project img">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="content">
                            <table class="table table-bordered align-middle table-sm mt-3">
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                        <th>Technology</th>
                                        <th>Nome</th>
                                        <th>Descrizione</th>
                                        <th>Inizio</th>
                                        <th>Fine</th>
                                        <th>Tools</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ project.type ? project.type.name : 'NC' }}</td>
                                        <td>
                                            <ul class="list-unstyled mb-0">
                                                <li v-if="project.technologies.length > 0"
                                                    v-for="technology in project.technologies" :key="technology.id"> {{
                                                        technology.name }}
                                                </li>
                                                <li v-else>NC</li>
                                            </ul>
                                        </td>
                                        <td>{{ project.name }}</td>
                                        <td>{{ project.description }}</td>
                                        <td>{{ project.start_date }}</td>
                                        <td>{{ project.end_date }}</td>
                                        <td>
                                            <div class="d-flex justify-content-center">
                                                <router-link :to="{ name: 'portfolio' }">
                                                    <i class="fa-solid fa-backward"></i>
                                                </router-link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.w-h-cust {
    width: 600px;
    height: 400px;

    img {
        width: 100%;
        height: 100%;
    }
}

th,
td {
    text-align: center;
}
</style>