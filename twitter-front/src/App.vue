<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar
    // Footer
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/_variables.sass'
*
  font-family: $font-main, sans-serif
  padding: 0
  margin: 0
  box-sizing: border-box
  background-color: $bg-color-main
</style>
