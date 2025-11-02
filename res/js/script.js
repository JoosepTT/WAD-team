// Author: Joosep Tiger Tilgar

// # online JSON (Task 4)
const endpoint = "https://api.jsonbin.io/v3/b/6903c81c43b1c97be98cd866";

// # local JSON (Task 5)
const localData = "../json/posts.json";

// loading json data and local posts
async function loadPosts() {
    try {
        // --- online fetch (task 4) ---
        /*
        const response = await fetch(endpoint);
        const jsonData = await response.json();
        const posts = jsonData.record || jsonData;
        */

        // --- local fetch (task 5) ---
        const response = await fetch(localData);
        const jsonData = await response.json();
        const posts = jsonData;

        // checking if local storage has any new posts from addPost.html
        const storedPosts = JSON.parse(localStorage.getItem("newPosts")) || [];
        const allPosts = [...posts, ... storedPosts]; // combining posts to create on object

        renderPosts(allPosts);

    } catch (error) {
        console.error("Error while loading data: ", error);
    }
}

// displaying posts in html
function renderPosts(posts) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // emptying old contents

    posts
        .sort((a, b) => new Date(a.date) - new Date(b.date)) // sorting newer ones first

        .forEach((post) => { // creating each post on by one
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            const postDate = new Date(post.date);
            const formattedDate = postDate.toLocaleDateString("en-EE", {
                month: "short",
                day: "numeric",
                year: "numeric",
            });

            postDiv.innerHTML = `
                <div class="post-header-div">
                  <div class="profile-picture">
                    <img class="image-profile" src="../../images/profilePic.png" width="80" height="80" alt="My picture">
                  </div>
                  <div class="post-username">
                    <p class="text-post-username">${post.author}</p>
                    </div>
                  <div class="post-date">
                    <p class="text-date">${formattedDate}</p>
                  </div>
                </div>
        
                ${post.image ? `
                <div class="post-image-div">
                    <img class="image" src="${post.image.startsWith('data:image') ? post.image : `data:image/jpeg;base64,${post.image}`}" alt="Post image">
                </div>` : ""}
        
                <div class="post-text-div">
                  <p class="text-post">${post["text-content"]}</p>
                </div>
        
                <div class="reaction-div">
                  <div class="reaction-set">
                    <img class="post-reaction" src="../../images/heart_on.png" width="30" height="30" alt="Like">
                    <p class="text-reaction">${post.likes}</p>
                  </div>
                  <div class="reaction-set">
                    <img class="post-reaction" src="../../images/comment_off.png" width="30" height="30" alt="Comment">
                    <p class="text-reaction">${post.comments}</p>
                  </div>
                  <div class="reaction-set">
                    <img class="post-reaction" src="../../images/bookmark_on.png" width="30" height="30" alt="Bookmark">
                    <p class="text-reaction">${post.bookmarks}</p>
                  </div>
                </div>
            `;

            contentDiv.appendChild(postDiv);
        });
}

document.addEventListener("DOMContentLoaded", loadPosts); // initiating the loading process

// clearing browser cache after session (to avoid local accumulation):
window.addEventListener("beforeunload", () => {
    localStorage.removeItem("newPosts");
    sessionStorage.removeItem("newPosts");
});