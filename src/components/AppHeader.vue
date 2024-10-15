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
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="content d-flex align-items-center">
                            <div class="me-3">
                                <a href="" class="nav-brand">
                                    <img src="../assets/animal-2028258_960_720.webp" alt="logo" class="logo">
                                </a>
                            </div>
                            <div>
                                <ul class="navbar-nav d-flex flex-row">
                                    <li class="nav-item mx-3" v-for="(item, index) in store.menuItems"
                                        :key="`menu-${index}`">
                                        <!-- <router-link :to="{ name: }"></router-link> -->
                                        <a href="">
                                            {{ item.label }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
</style>