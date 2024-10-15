<script>
export default {
    name: 'AppHome'

}
</script>

<template>
    <section class="d-flex justify-content-center align-items-center flex-column">
        <div class="box bg-dark">
            <h1 class="display-4">Benvenuto nel mio Portfolio</h1>
        </div>
        <div class="blur-box bg-dark">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.blur-box {
    height: 70%;
    width: 1200px;
    text-align: center;
    background-image: url(../assets/animal-2028258_960_720.webp);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.box {
    height: 10%;
    width: 1200px;
    background-color: rgba(53, 52, 52, 0.699);
    border-radius: 15px 15px 0 0;
    text-align: center;

    h1 {
        color: white;
    }
}
</style>