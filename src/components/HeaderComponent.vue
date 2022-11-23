<template>
    <div class="header">
        <div class="bg-red d-flex justify-content-center">
            <nav class="nav-bar d-flex align-items-end justify-content-between container-fluid">
                <img src="../../public/img/theme_eduprime_logo.png" alt="Logo" class="logo">
                <div class="d-flex align-items-end">
                    <ul class="d-flex">
                        <li v-for="(link, index) in links" :key="index" class="me-5 d-flex">
                            <a :href="link.url" :class="{ 'active': link.current }">{{ link.title }}
                                <span v-if="link.arrow" :class="{ 'active': link.current }"><i class="fa-solid fa-sort-down"></i></span>
                            </a>
                        </li>
                    </ul>
                    <a href="#nogo">
                        <span class="view button text-uppercase">view courses</span>
                    </a>
                </div>
            </nav>
            <Transition>
                <div class="box-slider" v-if="counter == 0">
                    <div class="slider-1"></div>
                </div>
                <div class="box-slider" v-else-if="counter == 1">
                    <div class="slider-2"></div>
                </div>
                <div class="box-slider" v-else-if="counter == 2">
                    <div class="slider-3"></div>
                </div>
            </Transition>
            <div class="right">
                <span @click="scrollRight"><i class="fa-solid fa-angle-right"></i></span>
            </div>
            <div class="left">
                <span @click="scrollLeft"><i class="fa-solid fa-angle-left"></i></span>
            </div>
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
        </div>
        <div class="box-icons d-flex flex-column align-items-center text-white">
            <a href="#nogo"><i class="fa-solid fa-cart-shopping mb-3"></i></a>
            <a href="#nogo"><i class="fa-solid fa-book mb-3"></i></a>
            <a href="#nogo"><i class="fa-solid fa-life-ring"></i></a>
        </div>
    </div>
</template>

<script>

    export default {
    name: "HeaderComponent",
    props: {
        links: Array,
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        scrollRight() {
            if(this.counter < 2) {
                this.counter ++
            } else {
                this.counter = 0
            }
        },
        scrollLeft() {
            if (this.counter >= 1) {
                this.counter--
            } else {
                this.counter = 2
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.header {
    height: 80vh;
    position: relative;

    .right {
        position: absolute;
        top: 50%;
        left: 98%;
    }

    .left {
        position: absolute;
        top: 50%;
        right: 98%;
    }

    .right, .left {
        font-size: 50px;
        cursor: pointer;
        color: $white;
    }

    .box-slider {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        
    }

    .slider-1 {
        background-image: url('../../public/img/theme_slider2_bg-1.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .slider-2 {
        background-image: url('../../public/img/theme_slider3_bg-1.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .slider-3 {
        background-image: url('../../public/img/theme_slider1_bg-1.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.7s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    .v-enter-to,
    .v-leave-from {
        opacity: 1;
    }

    ul {
        li:hover {
            color: $yellow;
        }
    }

    .box-icons {
        position: fixed;
        top: 50%;
        left: 0;
        padding: 10px;
        background-color: $yellow;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-size: 15px;
        box-shadow: 2px 5px 25px $black;
        z-index: 9999;
        transition: all 0.3s ease-in-out;
        
        &:hover {
            padding: 10px 15px;
        }

        a {
            color: $white;
        }
    }


    li a {
        text-decoration: none;
        color: $white;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: $yellow;
        }
    }

    .button {
        display: inline-block;
        padding: 1px 43px;
        border-radius: 50px;
        line-height: 60px;
        text-align: center;
        font-size: 17px;
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
            
            .active {
                color: $yellow;
            }

            span {
                position: relative;
                margin-left: 5px;
                bottom: 3px;
                font-size: 12px;
                cursor: pointer;
            }
        }

        .view {
            background-color: $yellow;
            color: $white;
            transition: all 0.3s ease-in-out;
        }

        .view:hover {
            background-color: $white;
            color: $pink2;
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
        transition: all 0.3s ease-in-out;
    }

    .btn-courses:hover {
        background-color: $white;
        color: $pink2;
    }

    .btn-apply {
        background-color: $white;
        color: $pink2;
        transition: all 0.3s ease-in-out;
    }

    .btn-apply:hover {
        background-color: $yellow;
        color: $white;
    }
}
</style>