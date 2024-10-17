<script>
export default {
    //     data() {
    //         return {
    //             name: '',
    //             surname: '',
    //             email: '',
    //             message: '',
    //             loading: false,
    //             success: false,
    //         }
    //         this.errors { }
    //     },
    //     methods: {
    //         sendForm() {
    //             this.loading = true;
    //             const data = {
    //                 name: this.name,
    //                 surname: this.surname,
    //                 email: this.email,
    //                 message: this.message,
    //             }
    //         }

    //         this.errors = null;
    //         axios.project(/projects, data).then((results) => {
    //             if (results.data.success) {
    //                 this.name = '',
    //                     this.surname = '',
    //                     this.email = '',
    //                     this.message = '',

    //                     this.success = true,
    // }
    //             else {
    //                 this.errors = results.data.errors
    //             }
    //             this.loading = false
    //         })

    //     },

}
</script>
<template>
    <!-- <div class="alert alert-success" v-if="success">Messaggio inviato</div>
    <form method="post" @submit.prevent="sendForm()" class="mt-4">
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="name">
                        <h6>Nome</h6>
                    </label>
                    <input type="text" class="form-control" :class="errors.name ? 'is-invalid' : ''" v-model="name"
                        id="name" placeholder="Inserisci il tuo nome">
                </div>
            </div>
            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="surname">
                        <h6>Cognome</h6>
                    </label>
                    <input type="text" class="form-control" :class="errors.surname ? 'is-invalid' : ''"
                        v-model="surname" id="surname" placeholder="Inserisci il tuo cognome">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="form-group">
                    <label for="email">
                        <h6>Email</h6>
                    </label>
                    <input type="email" class="form-control" :class="errors.email ? 'is-invalid' : ''" v-model="email"
                        id="email" placeholder="Inserisci la tua email">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label for="message">
                        <h6>Messaggio</h6>
                    </label>
                    <textarea class="form-control" :class="errors.message ? 'is-invalid' : ''" v-model="message"
                        id="message" rows="10" placeholder="Scrivi il tuo messaggio"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button type="submit" class="btn btn-primary mt-2" :disabled="loading">Invia</button>
            </div>
        </div>
    </form> -->
</template>
<style lang="scss" scoped>
.form-group {
    margin: 5px 0;
}
</style>