<template>
    <div class="bg-red">
        <div class="container">
            <div class="row box align-items-center">
                <div class="col-7">
                    <h2 class="text-white">Subscribe Now to Our Newsletter!</h2>
                </div>
                <div class="col-5 box-input">
                    <input type="email" placeholder="Email address...">
                    <a href="#nogo"><span class="button"><i class="fa fa-paper-plane"></i></span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SubscribeComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

.bg-red {
    background-color: $pink;
}

.box {
    height: 150px;
}

h2 {
    font-size: 35px;
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
        padding: 21px 28px;
        background-color: $yellow;
        border-radius: 50%;
        color: $white;
        font-size: 20px;
        right: 6px;
        top: -1px;
        box-shadow: 0px 0px 20px rgb(0 0 0 / 7%);
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: $pink;
        }
    }
}
</style>