<script>
import { store } from '../store.js';
export default {
    name: 'AppPagination',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="row">
        <div class="col-12">
            <nav aria-label="Page navigation example z-0">
                <ul class="pagination justify-content-center mt-3">
                    <li class="page-item"><a class="page-link" :class="store.current_page == 1 ? 'disabled' : ''"
                            href="#" @click.prevent="store.goToPage(store.current_page
                                - 1)">Previous</a></li>
                    <li class="page-item"><a class="page-link"
                            :class="store.current_page == store.last_page ? 'disabled' : ''" href="#" @click.prevent="store.goToPage(store.current_page
                                + 1)">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-link:focus,
.page-link:active {
    outline: none;
    background-color: initial;
    border-color: initial;
    box-shadow: none;
}
</style>