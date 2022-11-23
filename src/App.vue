<template>
  <header>
    <HeaderComponent :links='store.links'/>
  </header>
  <main>
    <MainComponent/>
  </main>
  <footer>
   <FooterComponent :social='store.socialLinks' :courses='store.coursesFooter'/>
  </footer>
  <div>
    <TriggerComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { store } from './store';
import TriggerComponent from './components/TriggerComponent.vue';


export default {
    components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TriggerComponent
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