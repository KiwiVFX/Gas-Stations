<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted(){
     this.$store.commit("example/START_LOADING")
     this.$store.dispatch("example/initAllGasStations")
    
    //  this.$q.lang.set(this.$q.lang.he);
  },
})
</script>
