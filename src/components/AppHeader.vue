<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm z-1">
            <div class="container-fluid">
                <router-link :to="{ name: 'homepage' }" class="navbar-brand mx-5 d-flex align-items-center">
                    <img src="../assets/animal-2028258_960_720.webp" alt="logo" class="logo">
                    <span class="mx-3">Home</span>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx ms-lg-auto ">
                        <li class="nav-item mx-lg-3 py-2" v-for="(item, index) in store.menuItems"
                            :key="`menu-${index}`">
                            <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
.logo {
    width: 50px;
    aspect-ratio: 1 \ 1;
}

a:hover {
    color: gray;
}

a {
    text-decoration: none;
    color: black;
}

.mx {
    margin-left: 115px;
}
</style>