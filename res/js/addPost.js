// Author: Joosep Tiger Tilgar

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const postBody = document.getElementById("post-body");
    const fileInput = document.getElementById("file-upload");

    // if user enters "submit" on addpost page, then the data is formatted into post
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const text = postBody.value.trim();
        if (!text) {
            alert("Post cannot be empty!");
            return;
        }

        let imageBase64 = "";

        // if user inserted image, then it is converted base64 format
        if (fileInput.files && fileInput.files[0]) {
            imageBase64 = await toBase64(fileInput.files[0]);
        }

        // creating new post object
        const newPost = {
            id: Date.now(),
            author: "Maria Saar", // to be replaced with existing user
            date: new Date().toISOString(),
            "text-content": text,
            image: imageBase64,
            likes: 0,
            comments: 0,
            bookmarks: 0,
            "comment-child-id": 0
        };

        // loading already existing posts from local storage and adding new one
        const existingPosts = JSON.parse(localStorage.getItem("newPosts")) || [];
        existingPosts.push(newPost);
        localStorage.setItem("newPosts", JSON.stringify(existingPosts));

        // redirecting back to posts page
        window.location.href = "index.html";
    });
});

// helper function for converting image to Base64 format for efficient storage in json node
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
}