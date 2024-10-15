<script>
export default {
    name: 'AppProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="col-3 gy-4">
        <div class="card" style="width: 18rem;">
            <img :src="project.cover_project_image.startsWith('http') ? project.cover_project_image : `http://127.0.0.1:8000/storage/${project.cover_project_image}`"
                class="card-img-top" alt="Project img">
            <div class="card-body">
                <h5 class="card-title"><strong>Titolo:</strong> {{ project.name.substr(0, 15) + '[...]' }}</h5>
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
                </li>
                <li class="list-group-item"><strong>Start: </strong>{{ project.start_date }}</li>
                <li class="list-group-item" v-if="(project.end_date)"><strong>End: </strong>{{ project.end_date
                    }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-text {
    overflow: auto;
    max-height: 200px;
}
</style>