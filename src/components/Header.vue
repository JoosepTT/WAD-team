<template>
    <div id="gradient-layer"></div>
    <header id="header">
        <ul class="nav">
            <li><router-link to="/"> <p>Home</p> </router-link></li>
            <li><router-link to="/signup"> <p>Sign up</p> </router-link></li>
        </ul>
        <img id="image-profile" @click="toggleMenu" src="../assets/profilePic.png" alt="My picture">
    </header>
    <div id="menu" v-if="menuVisible">
        <ul>
            <li>{{ account.userName }}</li>
            <li>{{ account.userEmail }}</li>
            <li><router-link to="/"> <p>Logout</p> </router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuVisible: false
    };
  },
  computed: {
    account() { return this.$store.state.account }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>

<style scoped>
#gradient-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background: linear-gradient(to bottom, #925454 0%, transparent 100%);
    z-index: 10;
    pointer-events: none;
}

#header {
    position: fixed;
    display: flex;
    flex-direction: row;
    top: 0;
    left: 0;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    backdrop-filter: blur(10px);
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    z-index: 100;
    font-size: 2.5em;
    padding: 0em 0em; /* header height*/
}

#header > ul {
    list-style: none;
    margin: 0em;
    gap: 0.5em;
}

.nav {
    display: flex;
    direction: row;
    align-items: center;
}

.nav p {
    padding: 0em .5em; /* header elements padding */
    color: white;
    font-family: 'American Typewriter';
    display: inline-block;
    transition: all 0.3s ease;
    margin: 0.6em 0em;
}

#header:hover {
    background-color: rgba(94, 64, 64, 0.2);
    backdrop-filter: blur(20px);
}

#header p:hover {
    transform: scale(1.2);
    color: #74e2fb;
}

#image-profile {
    width: 2cm;
    height: 2cm;
    transition: all 0.3s ease;
}

#image-profile:hover {
    transform: scale(1.1);
}

#menu {
    position: fixed;
    right: 0;
    top: 5.5em;
    background-color: #7c4545;
    border-radius: .5em;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.8);
    z-index: 100;
    text-align: left;
    min-width: 10em;
    color: rgb(230, 228, 228);
}

#menu.active {
    display: flex;
}

#menu > ul {
    margin: .5em;
    list-style: none;
    padding: 0em 1em;
}

#menu > ul > li {
    margin: .6em 0em;
}

#menu > ul > li > a {
    text-decoration: none;
    color: rgb(230, 228, 228);
}

#menu > ul > li > a:hover {
    text-decoration: underline;
    color: rgb(230, 228, 228);
}

@media (max-width: 1000px) {
    #header {
        flex-direction: column;
    }
}
</style>