<template>
  <Header/>
  <div id="page">
    <div class="content-div">
        <div class="sidebar"></div>
        <div id="content"></div>
        <div class="sidebar"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
#page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6em;
  min-height: calc(100vh - 6em); /* should be always in the bottom */
}
</style>