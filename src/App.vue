<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6em;
  min-height: calc(100vh - 6em); /* the footer should be always in the bottom */
}

body {
  background-color: rgb(203, 187, 159);
  margin: 0em;
}
</style>
