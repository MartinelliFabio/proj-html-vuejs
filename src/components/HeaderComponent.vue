<template>
    <div class="header">
        <div class="bg-red"></div>
        <div class="wave-header">
            <img src="../../public/img/Wave-1.png" alt="Wave">
        </div>
        <nav class="nav-bar d-flex align-items-end justify-content-between container-fluid">
            <img src="../../public/img/theme_eduprime_logo.png" alt="Logo" class="logo">
            <div class="d-flex align-items-end">
                <ul class="d-flex">
                    <li v-for="(link, index) in links" :key="index" class="me-5">
                        <a :href="link.url">{{ link.title }}</a>
                    </li>
                </ul>
                <div class="button text-uppercase text-white">view courses</div>
            </div>
        </nav> 
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        props: {
            links: Array,
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.header {
        height: 80vh;
        background: url('../../public/img/theme_slider2_bg-1.jpg');
        position: relative;
    
        .wave-header {
            position: absolute;
            bottom: 0;
            z-index: 9999;
        }

        .bg-red {
            background-color: $pink2;
            height: inherit;
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
                
                li a {
                    text-decoration: none;
                    color: $white;
                }
            }

            .button {
                display: block;
                background-color: $yellow;
                height: 60px;
                width: 200px;
                border-radius: 50px;
                line-height: 60px;
                text-align: center;
            }
        }
    }
</style>