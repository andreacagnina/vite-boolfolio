<script>
import AppContactForm from '../components/AppContactForm.vue';
export default {
    components:
        AppContactForm,

}
</script>
<template>
    <section id="contact">
        <div class="container my-5 my-lg-3">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">Contact Me</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="col-12">
                        <p><strong>Nome: </strong> Andrea</p>
                    </div>
                    <div class="col-12">
                        <p><strong>Cognome: </strong> Cagnina</p>
                    </div>
                    <div class="col-12">
                        <p><strong>Città: </strong> Palermo</p>
                    </div>
                    <div class="col-12">
                        <p><strong>CAP: </strong> 90100</p>
                    </div>
                    <div class="col-12">
                        <p><strong>Indirizzo: </strong> Via dei Pazzi, 0</p>
                    </div>
                    <div class="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100415.37127632384!2d13.274887266219144!3d38.14064983581874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e8c9814ed099%3A0xa0b042c233bd880!2sPalermo%20PA!5e0!3m2!1sit!2sit!4v1729170385432!5m2!1sit!2sit"
                            width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="col-6">
                    <AppContactForm />
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped></style>