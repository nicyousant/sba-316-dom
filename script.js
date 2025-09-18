let title = document.querySelector('title')
title.textContent = "In Loving Memory of Abuelita Gloria"

const favoriteThings = ["reading the Bible","playing dominoes", "listening to Spanish music", "getting her nails done"];


const header = document.querySelector('header')
// header.textContent = "In Memory of Abuelita Gloria"

// Cache at least one element using getElementById
const abuela = document.getElementById('rounded-img');
console.log(window)


// https://dev.to/sakaz22/hiding-and-revealing-things-with-javascript-pageyoffset-4f2i
// window.addEventListener("scroll", scrollUp);

// function scrollUp(e) {
//     let flowerPop = document.getElementById("flower-pop");
//     if(window.pageYOffset <500){
//         const myWindow = window.open("", "MsgWindow", "width=200,height=100");
//   myWindow.innerHTML = "<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>";
//     }
    // else{
    //     navigation.style.display = "none";
    // }
// }

// how can I slow down the transition between photos? 

abuela.addEventListener('mouseover', function() 
    {
        abuela.src = 'images/abuela1946.jpg'; // Change to the new image source
    }
);

abuela.addEventListener('mouseout', function() 
    {
        abuela.src = 'images/abuela406x464.png'; // Change back to the original image source
    }
);

let inPerson = document.getElementById('in-person');
let onZoom = document.getElementById('zoom');
let notAttend = document.getElementById('regrets');

// based on radio button input user should receive a different response
// pop-up window? new HTML page? or update current HTML page? 

const commentList = document.getElementById("comments");
const favMemories = document.getElementById("favMemories");

// Cache at least one element using querySelector or querySelectorAll.
const submitComments = document.querySelector('#submitComments');
submitComments.addEventListener('click', function (e) {
    e.preventDefault();
    const listItem = document.createElement("li");
    listItem.innerText = commentList.value;
    console.log(commentList.value)
    favMemories.prepend(listItem);
    commentList.value = "";

})



// const favMemory = document.getElementById('favMemory');
// document.createElement("li")

const inPersonSelected = document.querySelector('input[id="in-person"]');
// const inPersonSelected2 = document.querySelector('#in-person');
const zoomSelected = document.querySelector('input[id="zoom"]');
const regretsSelected = document.querySelector('input[id="regrets"]');
// console.log(inPersonSelected2)

const submitForm = document.getElementById('submitForm')


// Include at least one form and/or input with DOM event-based validation. 
// (This can be the same form or input as the one above, 
// but should include event-based validation in addition to the HTML attribute validation.)

submitForm.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(inPersonSelected)
    if (inPersonSelected.checked) {
        window.alert(`Here's the address: `);
    } else if (zoomSelected.checked) {
        window.alert(`Here are the Zoom details: `);
    } else {
        window.alert('You will be missed.');
    }
})







// const topMenuLinks = topMenuEl.querySelectorAll("a");
// topMenuEl.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (e.target.tagName != "A") {
//         return;
//     } else {
//         console.log(e.target.textContent);

// How do I implement this?

// const app = document.getElementById("app");

// // A builder function to make the
// // created DOM structures consistent.
// function createPost(title, content) {
//   // Using an HTML template clone
//   const postTemplate = document.getElementById("postTemplate");
//   const clone = postTemplate.content.cloneNode(true);

//   // We can use selectors to find different nodes
//   // within the template clone itself.
//   const heading = clone.querySelector("h3");
//   const body = clone.querySelector("p");

//   heading.textContent = title;
//   body.innerHTML = content;

//   return clone;
// }

// // Now, we can use the function to build consistent
// // post elements using custom data. 

//   posts.forEach((post) => {
//     app.appendChild(createPost(post.title, post.body));
//   });

