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
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <!-- <a class="navbar-brand d-flex align-items-center" href="{{ url('/') }}">
                    <img src="{{ asset('img/animal-2028258_960_720.webp') }}" alt="logo" class="logo">
                </a> -->
                <div class="row">
                    <div class="col-12">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item" v-for="(item, index) in store.menuItems" :key="`menu-${index}`">
                                <!-- <router-link :to="{ name: }"></router-link> -->{{ item.name }}
                            </li>
                        </ul>
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
</style>