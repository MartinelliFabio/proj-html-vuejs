<template>
    <div class="theme d-flex flex-column">
        <a href="#nogo" class="purchase-theme">
        <svg class="mt-env-logo-svg" viewBox="0 0 244 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M207.985 2.155c-8.163-4.554-31.562-1.738-59.665 7.007C99.135 42.96 57.625 92.754 54.728 172.713c-.527 1.911-5.379-.26-6.338-.852-13.282-25.592-18.544-52.54-7.454-91.415 2.067-3.46-4.69-7.718-5.906-6.502-2.434 2.451-12.582 13.319-19.322 25.071-33.407 58.26-11.56 132.91 46.889 165.579 58.436 32.72 132.229 11.614 164.766-47.15 37.643-67.824 2.69-202.898-19.377-215.287l-.001-.002z" fill="#82B541" />
        </svg> Purchase Theme</a>
        <a href="#nogo" class="related-theme">
            <svg id="svg_modeltheme_logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 114.02" fill="#69de89">
                <path class="cls-1" d="M62.54 23.14v2.78H51.71a25.62 25.62 0 00-25.6 25.6v30.25h-5.89A20.28 20.28 0 010 61.55V20.22A20.28 20.28 0 0120.22 0h41.33a20.08 20.08 0 0113.81 5.49 18.59 18.59 0 00-12.82 17.65z"/>
                <path d="M111.51 104.3a19.62 19.62 0 01-16.9 9.7h-42.9a19.66 19.66 0 01-19.6-19.6V51.52a19.66 19.66 0 0119.6-19.6h10.83v25.56A18.59 18.59 0 0081.1 76h26.19c-.18 1.84-.27 3.72-.27 5.61a58.85 58.85 0 004.49 22.69z" fill="#fff"/>
                <path class="cls-1" d="M128 23.14v13.57a56.76 56.76 0 00-13.79 16.65 57.85 57.85 0 00-6 16.68H81.1a12.59 12.59 0 01-12.56-12.56V23.14A12.6 12.6 0 0181.1 10.58h34.34A12.6 12.6 0 01128 23.14z"/>
            </svg> Related Themes
        </a>
    </div>
    <Transition>
        <a href="" @click.prevent="scrollToTop()" v-show="top" class="back-to-top"></a>
    </Transition>
</template>

<script>
    export default {
        name: 'TriggerComponent',
        data() {
            return {
                top: false
            }
        },
        methods: {
            scrollToTop() {
                window.scroll({ behavior: 'smooth', left: 0, top: 0 })
            }
        },
        mounted() {
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 100) {
                    this.top = true
                } else {
                    this.top = false
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.theme {
    a {
        position: fixed;
        bottom: 40px;
        left: 40px;
        width: 180px;
        background-color: $black;
        text-decoration: none;
        color: $white;
        font-weight: 300;
        font-size: 12px;
        padding: 10px 25px;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0px 17px 10px -12px rgb(0 0 0 / 40%);

        &:hover {
            transform: translate(0, -4px);
        }

       svg {
            width: 15px;
            margin-right: 5px;
       }
    }

    .purchase-theme {
        bottom: 90px
    }

    .purchase-theme:hover {
        background-color: $green;
    }

    .purchase-theme:hover path {
        fill: $black;
    }

    .related-theme:hover {
        background-color: $red-fill;
    }
}


.back-to-top {
    height: 45px;
    width: 45px;
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: $yellow url('../../public/img/back-to-top-arrow.svg') no-repeat
    center scroll;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);

    &:hover {
        background-color: $pink;
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.7s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>