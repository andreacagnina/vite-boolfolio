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
        <nav class="navbar navbar-light bg-white shadow-sm">
            <div class="nav-item mx-5">
                <router-link :to="{ name: 'homepage' }">
                    <img src="../assets/animal-2028258_960_720.webp" alt="logo" class="logo">
                    <span class="mx-3">Home</span>
                </router-link>
            </div>
            <div class="nav-item mx-5">
                <ul class="navbar-nav d-flex flex-row">
                    <li class="nav-item mx-3" v-for="(item, index) in store.menuItems" :key="`menu-${index}`">
                        <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                    </li>
                </ul>
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
</style>