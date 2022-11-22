<template>
    <div class="svg">
        <img src="../../public/svg/svg-0.svg">
    </div>
    <div class="bg-red">
        <div class="container">
            <div class="d-flex align-items-center flex-column">
                <img src="../../public/img/Clock-and-Bell.png" class="logo">
                <h2 class="display-5 text-white mt-2">University Year</h2>
                <div class="d-flex mt-5 text-center">
                    <div class="demo w30">
                        <h5 class="text-white">Demo Classes</h5>
                        <p>In the first week, students try to accommodate with the teaching style and choose their optional courses.</p>
                    </div>
                    <div class="graduation w30">
                        <h5 class="text-white">Graduation Day</h5>
                        <p>On the day of graduation, all students gather for the ceremony and then network and party among others.</p>
                    </div> 
                </div>
                <div class="">
                    <img src="../../public/img/Timeline-Item.png">
                </div>
                <div class="d-flex mt-4 text-center">
                    <div class="orientation w30">
                        <h5 class="text-white">Orientation</h5>
                        <p>First day of the university year, all students gather for the opening ceremony and then network with others.</p>
                    </div>
                    <div class="evaluation w30">
                        <h5 class="text-white">Evaluation</h5>
                        <p>At the end of a semester, students take a general evaluation test for every subject they&apos;re learning.</p>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center flex-column mt-5 pb-5">
                <img src="../../public/img/upcoming-events-calendar-icon.png" class="logo">
                <h2 class="display-5 text-white mt-2">Upcoming Events</h2>
                <div class="row text-center coaching-sessions mt-5">
                    <div class="box col-4">
                        <div class="description">
                            <h5>Coaching Sessions</h5>
                            <p class="date"><i class="fa fa-calendar"></i> 20 May 21:30 PM</p>
                            <p class="mt-2 event">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor[...]</p>
                            <a href=""><span><i class="fa fa-plus"></i> Find More</span></a>
                        </div>
                    </div>
                    <div class="box col-4">
                        <div class="description">
                            <h5>Coaching Sessions</h5>
                            <p class="date"><i class="fa fa-calendar"></i> 24 Mar 18:00 PM</p>
                            <p class="mt-2 event">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor[...]</p>
                            <a href=""><span><i class="fa fa-plus"></i> Find More</span></a>
                        </div>
                    </div>
                    <div class="box col-4">
                        <div class="description">
                            <h5>Coaching Sessions</h5>
                            <p class="date"><i class="fa fa-calendar"></i> 12 Feb 13:30 PM</p>
                            <p class="mt-2 event">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor[...]</p>
                            <a href=""><span><i class="fa fa-plus"></i> Find More</span></a>
                        </div>
                    </div>
                </div>
                <div class="box-button mb-5">
                    <a href=""><span class="button btn-event">View All Events</span></a>
                </div>
            </div>
        </div>
    </div>
    <div class="svg-2">
        <img src="../../public/svg/svg-1.svg">
    </div>
</template>

<script>
    export default {
        name: 'SecondMainComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

p {
    color: $text-white;
}

a {
    text-decoration: none;
}

.svg {
    position: relative;
    overflow: hidden;
    bottom: -1px;
}

.svg-2 {
    position: relative;
    overflow: hidden;
    top: -1px;
}

.bg-red {
    background-color: $pink;
}

.logo {
    width: 70px;
}

.w30 {
    width: 30%;
}

.demo {
    position: relative;
    left: 27%;
}

.graduation {
    position: relative;
    left: 32%;
}

.orientation {
    position: relative;
    left: 7%;
}

.evaluation {
    position: relative;
    left: 14%;
}

.coaching-sessions {
    padding-left: 15px;
    padding-right: 15px;

    .description {
        padding: 15px 30px;
        background-color: $white;
        border-radius: 14px;
        position: relative;
        box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);

        a {
            position: absolute;
            left: 0;
            right: 0;
            padding: 8px 16px;
            background-color: $pink;
            max-width: 130px;
            margin: -5px auto;
            border-radius: 20px;
            color: $white;
            font-size: 14px;
            box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);
        }
    }
    
    h5 {
        font-size: 25px;
        font-weight: bold;
        margin: 25px 0 5px;
    }

    p {
        margin: 0;
        color: $gray-text2;
        font-size: 15px;
    }

    .event{
        margin-bottom: 40px;
    }

    .date {
        font-size: 15px;
    }
}

.box-button {
    margin-top: 80px;

    .button {
        display: inline-block;
        padding: 0.1rem 2rem;
        border-radius: 50px;
        line-height: 60px;
        text-align: center;
        font-size: 15px;
    }

    .btn-event {
        background-color: $yellow;
        color: $white;
        box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);
    }

    .btn-event:hover {
        background-color: $pink;
        transition: 0.3s ease-in;
    }

    .btn-event:not(:hover) {
        transition: 0.3s ease-out;
    }
}
</style>