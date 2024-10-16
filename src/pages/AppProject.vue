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
                <div class="col-12 col-lg-6">
                    <div class="content h-img">
                        <img :src="project.cover_project_image.startsWith('http') ? project.cover_project_image : `${store.baseUrl}/storage/${project.cover_project_image}`"
                            class="card-img-top" alt="Project img">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="content">
                            <table class="table table-bordered align-middle table-sm mt-3 d-none d-lg-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Categoria</th>
                                        <th>Technology</th>
                                        <th>Descrizione</th>
                                        <th>Inizio</th>
                                        <th>Fine</th>
                                        <th>Back</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ project.name }}</td>
                                        <td>{{ project.type ? project.type.name : 'NC' }}</td>
                                        <td>
                                            <ul class="list-unstyled mb-0">
                                                <li v-if="project.technologies.length > 0"
                                                    v-for="technology in project.technologies" :key="technology.id">
                                                    {{
                                                        technology.name }}
                                                </li>
                                                <li v-else>NC</li>
                                            </ul>
                                        </td>
                                        <td class="d-none d-lg-table-cell">{{ project.description }}</td>
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
                            <table class="table table-bordered align-middle mt-3 d-lg-none">
                                <tbody>
                                    <tr>
                                        <th>
                                            Nome
                                        </th>
                                        <td>
                                            {{ project.name }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Categoria
                                        </th>
                                        <td>{{ project.type ? project.type.name : 'NC' }}</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Technology
                                        </th>
                                        <td>
                                            <ul class="list-unstyled mb-0">
                                                <li v-if="project.technologies.length > 0"
                                                    v-for="technology in project.technologies" :key="technology.id">
                                                    {{
                                                        technology.name }}
                                                </li>
                                                <li v-else>NC</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Descrizione
                                        </th>
                                        <td colspan="4">
                                            {{ project.description }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Inizio
                                        </th>
                                        <td colspan="4">
                                            {{ project.start_date }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Fine
                                        </th>
                                        <td colspan="4">
                                            {{ project.end_date }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Back
                                        </th>
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
th,
td {
    text-align: center;
}
</style>