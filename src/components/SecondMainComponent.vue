<template>
    <div class="svg">
    <img src="../../public/svg/svg-0.svg">
    </div>
    <div class="bg-red">
        <div class="container">
            <div class="d-flex align-items-center flex-column">
                <img src="../../public/img/Clock-and-Bell.png" class="clock-bell">
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
                    <img src="../../public/img/Timeline-Item.png" alt="">
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
            <div>
            
            </div>
        </div>
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

.svg {
    position: relative;
    overflow: hidden;
    bottom: -1px;
}

.bg-red {
    background-color: $pink;
}

.clock-bell {
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
</style>