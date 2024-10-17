<script>
import { store } from '../store.js';
import AppConfirmModal from './AppConfirmModal.vue';

export default {
    name: 'AppContactForm',
    components: {
        AppConfirmModal,
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        store.resetForm();
    },

}
</script>

<template>
    <form method="post" @submit.prevent="store.sendForm()" class="">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="name">
                        <h6>Nome</h6>
                    </label>
                    <input type="text" class="form-control" :class="store.errors.name ? 'is-invalid' : ''"
                        v-model="store.name" id="name" placeholder="Inserisci il tuo nome">
                </div>
                <p v-for="(error, index) in store.errors.name" :key="`message-${index}`" class="text-danger"> {{ error
                    }}</p>
            </div>

            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="surname">
                        <h6>Cognome</h6>
                    </label>
                    <input type="text" class="form-control" :class="store.errors.surname ? 'is-invalid' : ''"
                        v-model="store.surname" id="surname" placeholder="Inserisci il tuo cognome">
                </div>
                <p v-for="(error, index) in store.errors.surname" :key="`message-${index}`" class="text-danger"> {{
                    error }}
                </p>
            </div>

            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label for="email">
                        <h6>Email</h6>
                    </label>
                    <input type="email" class="form-control" :class="store.errors.email ? 'is-invalid' : ''"
                        v-model="store.email" id="email" placeholder="Inserisci la tua email">
                </div>
                <p v-for="(error, index) in store.errors.email" :key="`message-${index}`" class="text-danger"> {{ error
                    }}</p>
            </div>

            <div class="col-12">
                <div class="form-group">
                    <label for="message">
                        <h6>Messaggio</h6>
                    </label>
                    <textarea class="form-control" :class="store.errors.message ? 'is-invalid' : ''"
                        v-model="store.message" id="message" rows="21" placeholder="Scrivi il tuo messaggio"></textarea>
                </div>
                <p v-for="(error, index) in store.errors.message" :key="`message-${index}`" class="text-danger"> {{
                    error }}
                </p>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary mt-2" :disabled="loading">{{ loading ? 'Invio in corso...'
                    :
                    'Invia' }}</button>
            </div>
        </div>
    </form>
    <AppConfirmModal />
</template>

<style lang="scss" scoped></style>