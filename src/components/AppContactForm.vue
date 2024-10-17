<script>
import { store } from '../store.js';
import axios from 'axios';
import AppConfirmModal from './AppConfirmModal.vue';

export default {
    name: 'AppContactForm',
    components: {
        AppConfirmModal,
    },
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {},
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                message: this.message,
            };
            this.errors = {};

            axios.post(`${store.baseUrl}/api/contacts`, data).then((results) => {
                console.log(results)
                if (results.data.success) {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.message = '';
                    this.success = true;
                    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                    successModal.show();
                }
                else {
                    this.errors = results.data.errors;
                }
                this.loading = false;
            }).catch((errors) => {
                this.loading = false;
                this.errors = errors.response.data.errors
            });
        }
    },
}
</script>

<template>
    <form method="post" @submit.prevent="sendForm()" class="">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="name">
                        <h6>Nome</h6>
                    </label>
                    <input type="text" class="form-control" :class="errors.name ? 'is-invalid' : ''" v-model="name"
                        id="name" placeholder="Inserisci il tuo nome">
                </div>
                <p v-for="(error, index) in errors.name" :key="`message-${index}`" class="text-danger"> {{ error }}</p>
            </div>

            <div class="col-12 col-md-6">
                <div class="form-group">
                    <label for="surname">
                        <h6>Cognome</h6>
                    </label>
                    <input type="text" class="form-control" :class="errors.surname ? 'is-invalid' : ''"
                        v-model="surname" id="surname" placeholder="Inserisci il tuo cognome">
                </div>
                <p v-for="(error, index) in errors.surname" :key="`message-${index}`" class="text-danger"> {{ error }}
                </p>
            </div>

            <div class="col-12 col-md-12">
                <div class="form-group">
                    <label for="email">
                        <h6>Email</h6>
                    </label>
                    <input type="email" class="form-control" :class="errors.email ? 'is-invalid' : ''" v-model="email"
                        id="email" placeholder="Inserisci la tua email">
                </div>
                <p v-for="(error, index) in errors.email" :key="`message-${index}`" class="text-danger"> {{ error }}</p>
            </div>

            <div class="col-12">
                <div class="form-group">
                    <label for="message">
                        <h6>Messaggio</h6>
                    </label>
                    <textarea class="form-control" :class="errors.message ? 'is-invalid' : ''" v-model="message"
                        id="message" rows="21" placeholder="Scrivi il tuo messaggio"></textarea>
                </div>
                <p v-for="(error, index) in errors.message" :key="`message-${index}`" class="text-danger"> {{ error }}
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