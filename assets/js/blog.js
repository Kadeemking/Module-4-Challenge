function goBack() {
    document.location.replace("index.html");
};
const button= document.querySelector("#button")
button.addEventListener("click",goBack)

const section = document.querySelector("section");
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function loadBlogs() {
    section.textContent = "";

    for(i=0; i<blogs.length; i++){
        section.innerHTML += `<article>
        <h3>${blogs[i].title}</h3>
        <hr>
        <p class="sentence">${blogs[i].content}</p>
            <p>POSTED By: <span>${blogs[i].username}</span></p>
    </article>`
    };
};

loadBlogs();