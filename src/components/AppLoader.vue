<script>
export default {
    name: 'AppLoader',

}
</script>
<template>
    <section class="d-flex justify-content-center align-items-center w-100">
        <div class="box one">
            <img src="../assets/animal-2028258_960_720.webp" alt="load1">
        </div>
        <div class="box two">
            <img src="../assets/animal-2028258_960_720.webp" alt="load2">
        </div>
        <div class="box three">
            <img src="../assets/animal-2028258_960_720.webp" alt="load3">
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    background-color: rgba(0, 0, 0, 0.329);
    width: 100ww;
}

.box {
    width: 60px;
    height: 60px;
    animation: pulse 2s infinite;
    margin: 0 20px;

    img {
        width: 100%;
        object-fit: cover;
    }
}

.one,
.three {
    animation-delay: 0.0s;
}

.two {
    animation-delay: 1.2s;
}




@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }

}
</style>