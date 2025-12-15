<!--
- Fetches and presents a single post based on the passed id.
- The view contains update and delete functions, after which user will be directed back to the All post view.
-->

<template>
  <div class="single-post">
    <div id="form">
      <h3>Edit Post</h3>
      <label for="title">Title: </label>
      <input type="text" id="title" v-model="post.title" required />

      <label for="body">Body: </label>
      <input type="text" id="body" v-model="post.body" required />

      <label for="url">Url: </label>
      <input type="text" id="url" v-model="post.urllink" />

      <div class="buttons">
        <button @click="updatePost" class="updatePost">Update Post</button>
        <button @click="deletePost" class="deletePost">Delete Post</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: "SinglePostView",
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
        urllink: "",
      },
    };
  },
  methods: {
    async fetchAPost(id) {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
          credentials: 'include'
        });
        if (!response.ok) throw new Error('Post not found');
        const data = await response.json();
        this.post = data;
      } catch (err) {
        console.error(err);
        this.$router.push('/'); // tagasi pealehele kui viga
      }
    },

    async updatePost() {
      try {
        // Saada AINULT need väljad, mida backend ootab
        const updateData = {
          title: this.post.title,
          body: this.post.body,
          urllink: this.post.urllink
        };

        const response = await fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
          method: "PUT",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });

        if (!response.ok) {
          const error = await response.json();
          alert("Uuendamine ebaõnnestus: " + (error.error || "Tundmatu viga"));
          return;
        }

        alert("Postitus uuendatud!");
        this.$router.push("/"); // tagasi pealehele
      } catch (e) {
        console.error(e);
        alert("Viga uuendamisel");
      }
    },

    async deletePost() {
      if (!confirm("Kas oled kindel, et tahad postituse kustutada?")) return;

      try {
        const response = await fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
          method: "DELETE",
          credentials: 'include',
        });

        if (!response.ok) throw new Error("Kustutamine ebaõnnestus");

        alert("Postitus kustutatud!");
        this.$router.push("/");
      } catch (e) {
        console.error(e);
        alert("Kustutamine ebaõnnestus");
      }
    },
  },

  async mounted() {
    // Lihtne autentimise kontroll (kui sul on store)
    // const authenticated = await this.$store.dispatch('authenticate');
    // if (!authenticated) this.$router.push('/LoginView');

    this.fetchAPost(this.$route.params.id);
  }
};
</script>


<style scoped>
#form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}
label {
  color: rgb(8, 110, 110);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}
button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
</style>