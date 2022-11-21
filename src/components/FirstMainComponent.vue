<template>
    <div class="position-relative">
        <img src="../../public/img/home-background.png" class="wave-main">
        <div class="container">
            <div class="d-flex pad">
                <div class="description">
                    <img src="../../public/img/Books-icon.png" alt="Book Icon" class="book-icon">
                    <h2 class="display-5 fw-bold mb-5 mt-3">Thousand of courses for any type of student</h2>
                    <p>At EduPrime, it doesn&apos;t matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs whitin a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides.</p>
                    <a href="#nogo"><span class="browse button mt-3">Browse through courses</span></a>
                </div>
                <div class="w-50 mrg">
                    <img src="../../public/img/Graduation-Illustration.png" alt="Graduation image" class="graduation-img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FirstMainComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.pad {
    padding-top: 150px;

    .button {
        display: inline-block;
        padding: 0.1rem 2.5rem;
        border-radius: 50px;
        line-height: 60px;
        text-align: center;
    }

    .browse {
        background-color: $yellow;
        color: $white;
        font-size: 14px;
        font-weight: bold;
    }
}

.description {
    width: 60%;
}

.book-icon {
    width: 50px;
}

.graduation-img {
    width: 520px;
}

.mrg {
    margin-left: 90px;
}

.wave-main {
    position: absolute;
    top: 0;
    z-index: -1;
}
</style>