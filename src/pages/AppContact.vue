<script>
export default {

}
</script>
<template>
    <section id="contact">
        <div class="container my-3">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">Contact Me</h2>
                </div>
            </div>
            <form class="mt-4">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" class="form-control" id="name" placeholder="Inserisci il tuo nome">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Inserisci la tua email">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="message">Messaggio</label>
                            <textarea class="form-control" id="message" rows="3"
                                placeholder="Scrivi il tuo messaggio"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary mt-2">Invia</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.form-group {
    margin: 5px 0;
}
</style>