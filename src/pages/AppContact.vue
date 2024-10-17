<script>
import { store } from '../store.js';
import AppContactForm from '../components/AppContactForm.vue';

export default {
    name: 'AppContact',
    data() {
        return {
            store,
        }
    },
    components: {
        AppContactForm,
    }

}
</script>
<template>
    <section>
        <div class="container my-5 my-lg-3">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">Contact Me</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6 order-0 order-1">
                    <div class="content mt-4">
                        <div class="col-12">
                            <p><strong>Nome: </strong> Andrea</p>
                        </div>
                        <div class="col-12">
                            <p><strong>Cognome: </strong> Cagnina</p>
                        </div>
                        <div class="col-12">
                            <p><strong>Email: </strong> <a href="mailto:abc@mail.it">abc@mail.it</a></p>
                            <p><strong>Pec: </strong> <a href="mailto:cba@pec.it">cba@pec.it</a> </p>
                        </div>
                        <div class="col-12">
                            <p><strong>Città: </strong> Palermo</p>
                        </div>
                        <div class="col-12">
                            <p><strong>CAP: </strong> 90100</p>
                        </div>
                        <div class="col-12">
                            <p><strong>Indirizzo: </strong> Via degli Sviluppatori, 1001</p>
                        </div>
                        <div class="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100415.37127632384!2d13.274887266219144!3d38.14064983581874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e8c9814ed099%3A0xa0b042c233bd880!2sPalermo%20PA!5e0!3m2!1sit!2sit!4v1729170385432!5m2!1sit!2sit"
                                width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 order-0 order-lg-1">
                    <div class="content mt-4">
                        <AppContactForm />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped></style>