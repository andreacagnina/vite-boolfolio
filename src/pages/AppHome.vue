<script>
export default {
    name: 'AppHome'

}
</script>

<template>
    <section class="d-flex justify-content-center align-items-center flex-column">
        <div class="box bg-dark">
            <h1 class="display-4">Benvenuti</h1>
        </div>
        <div class="bg-box box bg-dark">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.box.bg-box {
    height: 70%;
    background-image: url(../assets/animal-2028258_960_720.webp);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius: 0 0 15px 15px;
    box-shadow: 7px 10px 6px rgba(0, 0, 0, 0.548);
}

.box {
    height: 15%;
    width: 900px;
    background-color: rgba(53, 52, 52, 0.699);
    box-shadow: 7px 12px 6px rgba(0, 0, 0, 0.548);
    border-radius: 15px 15px 0 0;
    text-align: center;

    h1 {
        color: white;
    }
}
</style>