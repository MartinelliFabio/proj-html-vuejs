<template>
    <div class="bg-red">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src="../../public/img/theme_eduprime_logo.png">
                    <p class="text-white my-4">EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.</p>
                    <div class="d-flex">
                        <div v-for="(item, index) in social" :key="index" class="links">
                            <a :href="item.url" v-html="item.icon"></a>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="box-list">
                        <ListLinksFooter v-for="(item, index) in footerLinks" :key="index" :obj="item" />
                    </div>
                </div>
                <div class="col-4">
                    <div class="box-input">
                        <input type="email" placeholder="Search...">
                        <a href="#nogo"><span class="button"><i class="fa fa-search"></i></span></a>
                    </div>
                    <h3 class="text-white mt-5">Search categories</h3>
                    <div class="tag-courses d-flex flex-wrap justify-content-end">
                        <div v-for="(course, index) in courses" :key="index">
                            <a :href="course.url"><span>{{ course.text }}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ListLinksFooter from './ListLinksFooter.vue';
import { linksFooter } from '../store'

    export default {
        name: 'FooterComponent',
        components: {
            ListLinksFooter
        },
        props: {
            social: Array,
            courses: Array
        },
        data() {
            return {
                footerLinks: linksFooter
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.bg-red {
    background-color: $pink;
}

.row {
    padding-top: 90px;
    padding-bottom: 60px;
}

img {
    max-width: 270px;
}

p {
    max-width: 350px;
}

.links{
    margin-right: 15px;

    a {
        display: block;
        border: 2px solid #E9D758;
        width: 50px;
        height: 50px;
        font-size: 18px;
        border-radius: 50%;
        text-align: center;
        line-height: 45px;
        color: $white;
        transition: all 0.3s ease-in-out;
    }
    
    a:hover {
        background-color: $yellow;
    }

}

.box-list {
    display: flex;  
}

.box-input {
    position: relative;

    input {
        border-radius: 35px;
        width: 100%;
        border: 0;
        height: 70px;
        padding: 25px;
        font-weight: 400;
        font-size: 15px;
    }

    .button {
        position: absolute;
        padding: 20px 27px;
        background-color: $yellow;
        border-radius: 50%;
        color: $white;
        font-size: 20px;
        right: -2px;
        top: 0px;
        box-shadow: 0px 0px 20px rgb(0 0 0 / 7%);
        transition: all 0.3s ease-in-out;
    }

    .button:hover {
        background-color: $pink;
    }

}
h3 {
    font-size: 16px;
    text-align: end;
}

.tag-courses {
    a {
        text-decoration: none;
        color: $white;
        border: 1px solid $white;
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
        margin:10px 0 0 10px;
        padding: 6px 15px;
        border-radius: 30px;
        float: right;
        transition: all 0.3s ease-in-out;
    }

    a:hover {
        background-color: $yellow;
    }
}
</style>