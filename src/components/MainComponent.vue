<template>
    <div>
        <FirstMainComponent :imgs='store.imgFirstMain'/>
    </div>
    <div>
        <SecondMainComponent/>
    </div>
    <div>
        <ThirdMainComponent/>
    </div>
    <div>
        <SubscribeComponent/>
    </div>
</template>

<script>
import FirstMainComponent from './FirstMainComponent.vue';
import SecondMainComponent from './SecondMainComponent.vue';
import { store } from '../store';
import ThirdMainComponent from './ThirdMainComponent.vue';
import SubscribeComponent from './SubscribeComponent.vue'

    export default {
    name: "MainComponent",
    components: {
    FirstMainComponent,
    SecondMainComponent,
    ThirdMainComponent,
    SubscribeComponent
},
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>

    
</style>