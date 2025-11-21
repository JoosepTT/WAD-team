<template>
  <Header/>
  <div class="content-div">
      <div class="sidebar"></div>
      <div id="content"></div>
      <div class="sidebar"></div>
  </div>
  <Footer/>
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
