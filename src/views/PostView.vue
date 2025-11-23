<template>
  <div class="add-post-page">
    <div class="gradient-layer"></div>

    <div id="first-section">
      <form id="form" @submit.prevent="createPost">
        <h1>Create a Post</h1>

        <label for="post-body">Post body</label>
        <textarea
            id="post-body"
            v-model="text"
            rows="5"
            placeholder="Your post goes here..."
            required
        ></textarea>

        <label for="file-upload">Select image (optional)</label>
        <input type="file" id="file-upload" accept="image/*" @change="onFileChange" />

        <button type="submit">Create post</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const text = ref('')
const imageFile = ref(null)

const onFileChange = (e) => {
  imageFile.value = e.target.files[0] || null
}

const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = reject
})

const createPost = async () => {
  if (!text.value.trim()) return alert('Postitus ei tohi olla tühi!')

  let imageBase64 = ''
  if (imageFile.value) {
    imageBase64 = await toBase64(imageFile.value)
  }

  const newPost = {
    id: Date.now(),
    author: "Maria Saar",
    date: new Date().toISOString(),
    'text-content': text.value.trim(),
    image: imageBase64 || null,
    likes: 0,
    comments: 0,
    bookmarks: 0
  }

  store.dispatch('addNewPost', newPost)
  router.push('/') // returns to main page
}
</script>

<style scoped>
* {
  font-family: sans-serif;
}

body {
  background-color: rgb(203, 187, 159);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 100vh;
}


.gradient-layer {
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
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  z-index: 100;
  font-size: 2.2em;
  padding: 0.9em 1.3em;
  box-sizing: border-box;
  overflow: visible;
}

#header > ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.nav a {
  padding: 0 0.5em;
  text-decoration: none;
  color: white;
  font-family: 'American Typewriter', serif;
  display: inline-block;
  transition: all 0.3s ease;
}

#header:hover {
  background-color: rgba(94, 64, 64, 0.2);
  backdrop-filter: blur(20px);
}

#header a:hover {
  transform: scale(1.2);
  color: #74e2fb;
}


.user-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: auto;
  background-color: #d9d9d9;
  border: 0px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.user-icon:hover {
  transform: scale(1.1);
  border-color: #74e2fb;
}


#first-section {
  padding-top: 15em;
  z-index: 50;
  width: 100%;
  display: flex;
  justify-content: center;
}


#form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #925454;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  padding: 2em;
  border-radius: 0.5em;
  color: white;
}

#form h1 {
  font-size: 1.2em;
  margin-bottom: 0.5em;
}

#form label {
  margin-top: 0.8em;
  font-weight: bold;
}

#form textarea {
  width: 100%;
  resize: none;
  margin-top: 0.5em;
  border-radius: 0.25em;
  border: none;
  padding: 0.5em;
  font-size: 1em;
}

#form input[type="file"] {
  margin-top: 0.5em;
  background-color: #d8d8d8;
  border-radius: 0.25em;
  border: none;
  color: #333;
  padding: 0.3em;
}

#form button {
  width: 8em;
  height: 2em;
  background-color: #518e7f;
  color: white;
  margin-top: 1.5em;
  border-radius: 0.25em;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

#form button:hover {
  background-color: #66a497;
  transform: scale(1.05);
}


@media (max-width: 1000px) {
  #header {
    flex-direction: column;
    text-align: center;
    padding: 0.5em 0;
  }
}
</style>