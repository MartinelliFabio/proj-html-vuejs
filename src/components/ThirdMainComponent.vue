<template>
    <div class="container mt-5">
        <h5 class="display-5">Latest Courses</h5>
        <section>
            <div class="row courses">
                <div class="col-3">
                    <div class="decision d-flex flex-column align-items-center">
                        <img src="../../public/img/Decisions-icon.png">
                        <div class="box-text d-flex flex-column align-items-center">
                            <a href="#nogo">
                                <h5 class="">Make Better Decisions</h5>
                            </a>
                            <div class="mt-1">
                                <i class="fa-regular fa-user"></i>
                                <p class="d-inline"> Teacher: <strong>James Colins</strong></p>
                            </div>
                            <div class="mt-2">
                                <i class="fa-solid fa-money-check-dollar"></i>
                                <p class="d-inline"> Price: <strong>$21.00</strong></p>
                            </div>
                            <a href="" class="view-course"><span><i class="fa-regular fa-eye"></i> View Course</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="speaker d-flex flex-column align-items-center">
                        <img src="../../public/img/Speaker-icon.png">
                        <div class="box-text d-flex flex-column align-items-center">
                            <a href="#nogo">
                                <h5 class="">How to be a speaker</h5>
                            </a>
                            <div class="mt-1">
                                <i class="fa-regular fa-user"></i>
                                <p class="d-inline"> Teacher: <strong>James Colins</strong></p>
                            </div>
                            <div class="mt-2">
                                <i class="fa-solid fa-money-check-dollar"></i>
                                <p class="d-inline"> Price: <strong>Free</strong></p>
                            </div>
                            <a href="" class="view-course"><span><i class="fa-regular fa-eye"></i> View Course</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="network d-flex flex-column align-items-center">
                        <img src="../../public/img/Network-icon.png">
                        <div class="box-text d-flex flex-column align-items-center">
                            <a href="#nogo">
                                <h5 class="">Network Introductions</h5>
                            </a>
                            <div class="mt-1">
                                <i class="fa-regular fa-user"></i>
                                <p class="d-inline"> Teacher: <strong>James Colins</strong></p>
                            </div>
                            <div class="mt-2">
                                <i class="fa-solid fa-money-check-dollar"></i>
                                <p class="d-inline"> Price: <strong>Free</strong></p>
                            </div>
                            <a href="" class="view-course"><span><i class="fa-regular fa-eye"></i> View Course</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="brand d-flex flex-column align-items-center">
                        <img src="../../public/img/Brand-icon.png">
                        <div class="box-text d-flex flex-column align-items-center">
                            <a href="#nogo">
                                <h5 class="">Brand Management</h5>
                            </a>
                            <div class="mt-1">
                                <i class="fa-regular fa-user"></i>
                                <p class="d-inline"> Teacher: <strong>James Colins</strong></p>
                            </div>
                            <div class="mt-2">
                                <i class="fa-solid fa-money-check-dollar"></i>
                                <p class="d-inline"> Price: <strong>Free</strong></p>
                            </div>
                            <a href="#nogo" class="view-course"><span><i class="fa-regular fa-eye"></i> View Course</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="row illustration">
                <div class="col-6 box-description">
                    <img src="../../public/img/Exam-icon.png" class="logo">
                    <div class="description">
                        <h5 class="display-4 mt-3">The most efficent examination method</h5>
                        <p class="mt-5 mb-4">EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.</p>
                        <a href="#nogo" class=""><span class="button discover">Discover the Method</span></a>
                    </div>
                </div>
                <div class="col-6">
                    <img src="../../public/img/Exam-Illustration.png" class="img-illustration">
                </div>
            </div>
            <div class="row illustration">
                <div class="col-6">
                    <img src="../../public/img/Girl-Illustration.png" class="img-illustration">
                </div>
                <div class="col-6 mb-5 pb-4 box-description">
                    <img src="../../public/img/Exam-icon-1.png" class="logo">
                    <div class="description">
                        <h5 class="display-4 mt-3">Variable fees for international students</h5>
                        <p class="mt-5 mb-4">EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.</p>
                        <a href="#nogo"><span class="button discover">List of Fees</span></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'ThirdMainComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.courses {
    margin-top: 70px;
    .col-3 {
    img {
        width: 70px;
    }

    a {
        text-decoration: none;
        color: $text-black;
    }

    a:hover {
        color: $pink;
    }

    h5 {
        font-size: 18px;
    }

    i, p {
        font-size: 14px;
    }
}
}

.box-text {
    padding: 25px 30px 45px;
    position: relative;

    a.view-course {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -25px;
            padding: 13px 0px;
            text-align: center;
            background-color: $pink;
            max-width: 160px;
            margin: 0 auto;
            border-radius: 25px;
            color: $white;
            font-size: 14px;
            box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);
    }

    a.view-course:hover {
        background-color: $yellow;
        color: $white;
        transition: 0.3s ease-in;   
    }

    a.view-course:not(:hover) {
        transition: 0.3s ease-out;
    }

}
.decision, .speaker, .network, .brand {
    padding-top: 35px;
    box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);
    border-radius: 5px;
}

.illustration{
    margin-top: 150px;

    .logo {
        width: 70px;
    }

    .box-description {
        position: relative;
        top: -25px;
    }

    .description {

        p {
            max-width: 430px;
        }
    }

    .img-illustration {
        max-width: 500px;
    }

    .button {
        display: inline-block;
        padding: 23px 45px;
        border-radius: 35px;
        text-align: center;
        font-size: 14px;
    }

    .discover {
        background-color: $pink;
        color: $white;
    }

    .discover:hover {
        background-color: $yellow;
        transition: 0.3s ease-in;
    }

    .discover:not(:hover) {
        transition: 0.3s ease-out;
    }
}
</style>