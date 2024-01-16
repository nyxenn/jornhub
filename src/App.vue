<template>
  <div>
    <JornNavigation />
    <JornDex />
  </div>
</template>

<script>
import JornDex from './components/JornDex.vue'
import JornNavigation from './components/JornNavigation.vue'

export default {
  name: 'App',
  components: {
    JornDex,
    JornNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>