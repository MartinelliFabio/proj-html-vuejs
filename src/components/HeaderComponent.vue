<template>
    <div class="header">
        <div class="bg-red d-flex justify-content-center">
            <nav class="nav-bar d-flex align-items-end justify-content-between container-fluid">
                <img src="../../public/img/theme_eduprime_logo.png" alt="Logo" class="logo">
                <div class="d-flex align-items-end">
                    <ul class="d-flex">
                        <li v-for="(link, index) in links" :key="index" class="me-5">
                            <a :href="link.url">{{ link.title }}</a>
                        </li>
                    </ul>
                    <a href="#nogo">
                        <span class="view button text-uppercase">view courses</span>
                    </a>
                </div>
            </nav>
            <div class="d-flex">
                <div class="d-flex flex-column justify-content-center align-items-center text-center">
                    <div class="title">
                        <h1 class="display-4 fw-bold mb-5">Key to your success</h1>
                        <p>EduPrime is the most versatile WordPress Theme for educational purposes, <br> showcasing universities, courses, secondary schools etc.</p>
                    </div>
                    <div class="fw-bold mt-5">
                        <a href="#nogo"><span class="button btn-courses me-5"><i class="fa fa-search me-2"></i> Search courses</span></a>
                        <a href="#nogo"><span class="button btn-apply"><i class="fa fa-user-plus me-2"></i> Apply for university</span></a>
                    </div>
                </div>
            </div>
            <div class="wave-header">
                <img src="../../public/img/Wave-1.png" alt="Wave">
            </div>
            <div class="box-icons d-flex flex-column align-items-center text-white">
                <a href="#nogo"><i class="fa-solid fa-cart-shopping mb-3"></i></a>
                <a href="#nogo"><i class="fa-solid fa-book mb-3"></i></a>
                <a href="#nogo"><i class="fa-solid fa-life-ring"></i></a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
    name: "HeaderComponent",
    props: {
        links: Array,
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.header {
    height: 80vh;
    background: url('../../public/img/theme_slider2_bg-1.jpg');
    position: relative;

    .box-icons {
        position: absolute;
        top: 45%;
        left: 0;
        padding: 20px;
        background-color: $yellow;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-size: 20px;
    }


    a {
        text-decoration: none;
        color: $white;
    }

    .button {
        display: inline-block;
        height: 60px;
        width: 200px;
        border-radius: 50px;
        line-height: 60px;
        text-align: center;
    }

    .bg-red {
        background-color: $pink2;
        height: inherit;
        position: relative;

        .wave-header {
            position: absolute;
            bottom: 0;
            z-index: 9999;
        }
    }


    .nav-bar {
        position: absolute;
        top: 0;
        padding: 50px;
        font-weight: bold;

        .logo {
            width: 250px;
        }

        ul {
            list-style: none;
        }

        .view {
            background-color: $yellow;
            color: $white;
        }

        .view:hover {
            background-color: $white;
            color: $pink2;
            transition: 0.3s ease-in;
        }

        .view:not(:hover) {
            transition: 0.3s ease-out;
        }
    }
    .title {
        color: $white;

        p {
            font-size: 18px;
        }
    }

    .btn-courses {
        background-color: $yellow;
        color: $white;
    }

    .btn-courses:hover {
        background-color: $white;
        color: $pink2;
        transition: 0.3s ease-in;
    }

    .btn-courses:not(:hover) {
        transition: 0.3s ease-out;
    }

    .btn-apply {
        background-color: $white;
        color: $pink2;
        width: 250px;
    }

    .btn-apply:hover {
        background-color: $yellow;
        color: $white;
        transition: 0.3s ease-in;
    }

    .btn-apply:not(:hover) {
        transition: 0.3s ease-out;
    }
}
</style>