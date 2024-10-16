<script>
import { store } from '../store.js';
export default {
    name: 'AppProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <img :src="project.cover_project_image.startsWith('http') ? project.cover_project_image : `${store.baseUrl}/storage/${project.cover_project_image}`"
                class="card-img-top" alt="Project img">
            <div class="card-body">
                <h5 class="card-title">
                    <h6><strong>Titolo:</strong></h6> {{ project.name }}
                </h5>
                <br>
                <p class="card-text">
                <h6><strong>Descrizione:</strong></h6> {{ project.description.substr(0, 300) +
                    '[...]'
                }}
                </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-if="project.type != null">
                    <h6><strong>Type: </strong></h6>{{
                        project.type.name }}
                </li>
                <li class="list-group-item" v-if="project.technologies.length > 0"><strong>Technology:
                    </strong> <span v-for="technology in project.technologies" :key="technology.id">{{
                        technology.name }} &nbsp;</span>
                </li>
                <li class="list-group-item">
                    <h6><strong>Inizio: </strong></h6>{{ project.start_date }}
                </li>
                <li class="list-group-item" v-if="(project.end_date)">
                    <h6><strong>Fine: </strong></h6>{{ project.end_date
                    }}
                </li>
                <li class="list-group-item text-center">
                    <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-primary">
                        Scopri di più
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>