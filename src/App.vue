<template>
  <Header/>
  <router-view/> <!-- mount point for active page (like HomeView for example) -->
  <Footer/>
  <router-link to="/add-post" id="floating-create-btn" v-if="$route.path === '/'">
    <img :src="writeIcon" alt="Create post" width="50" height="50" class="plus-icon" />
  </router-link>
</template>

<script setup>
import Header from '@/components/Header.vue' // @ is an alias to /src
import Footer from '@/components/Footer.vue'
import writeIcon from '@/assets/write.png'
</script>

<style>
#floating-create-btn {
  position: fixed;
  z-index: 200;
  bottom: 10vh;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

#floating-create-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.12);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
}

.plus-icon {
  width: 32px;
  height: 32px;
  fill: white;
  pointer-events: none;
}

/* === positioning === */

/* Lauaarvuti / lai ekraan – kleebitud parema sidebar’i vasakule servale +10px */
@media (min-aspect-ratio: 8/10) {
  #floating-create-btn {
    /* content max-width = 1000px → sidebar laius = (100vw - 1000px)/2 */
    right: calc((100vw - 1000px) / 2 - 74px);   /* 64px nupp + 10px vahe */
  }
}

/* Mobiil / kõrge ekraan – content’i paremasse nurka */
@media (max-aspect-ratio: 8/10) {
  #floating-create-btn {
    right: 20px;
  }
}

/* Tagavara vanadele brauseritele */
@supports not (aspect-ratio: 1) {
  @media (max-width: 1000px) {
    #floating-create-btn { right: 20px; }
  }
}

body {
  background-color: rgb(203, 187, 159);
  margin: 0em;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6em;
  min-height: calc(100vh - 6em); /* the footer should always be in the bottom */
}
</style>
