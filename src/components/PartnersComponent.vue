<template>
    <div class="container mt-5">
        <div class="d-flex flex-column align-items-center text-center">
            <h2 class="display-4 mb-4">Partners</h2>
            <p class="mb-5">Laverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>
        </div>
        <div class="d-flex justify-content-between mb-5">
            <div v-for="(img, index) in imgs" :key="index">
                <img :src="img.img" :alt="img.text">
            </div>
        </div>
    </div>
    <div class="bg"></div>
</template>

<script>
    export default {
        name: 'PartnersComponent',
        props: {
            imgs: Array,
        },
    }
</script>

<style lang="scss" scoped>
.bg {
    background: #f7f8fa url('../../public/img/background-wave3.png');
    height: 250px;
}

p {
    max-width: 500px;
}

img {
    opacity: .3;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in;
}

img:hover {
    opacity: 1;
}
</style>