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
</template>

<script>
import FirstMainComponent from './FirstMainComponent.vue';
import SecondMainComponent from './SecondMainComponent.vue';
import { store } from '../store';
import ThirdMainComponent from './ThirdMainComponent.vue';

    export default {
    name: "MainComponent",
    components: {
    FirstMainComponent,
    SecondMainComponent,
    ThirdMainComponent
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