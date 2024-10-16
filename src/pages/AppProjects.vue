<script>
import AppProjectCard from '../components/AppProjectCard.vue';
import AppPagination from '../components/AppPagination.vue';
import { store } from '../store.js';

export default {
    name: 'AppProjects',
    components: {
        AppProjectCard,
        AppPagination,
    },
    data() {
        return {
            store,
        }
    },
    created() {
        store.getProjects();
    },
}
</script>

<template>
    <section>
        <div class="container my-5 my-lg-3">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">Elenco dei miei Projects</h2>
                </div>
            </div>
            <AppPagination />
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <AppProjectCard v-for="project in store.projects" :key="project.id" :project="project" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>