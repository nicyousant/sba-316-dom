let title = document.querySelector('title')
title.textContent = "In Loving Memory of Abuelita Gloria"

const header = document.querySelector('header')
// header.textContent = "In Memory of Abuelita Gloria"


const abuela = document.getElementById('rounded-img');

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

let inPerson = document.getElementById('in-person')
let onZoom = document.getElementById('zoom')
let notAttend = document.getElementById('regrets')

