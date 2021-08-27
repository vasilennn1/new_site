'use strict'
// let t = document.querySelector(".wrapper");

// window.addEventListener('resize', function (event) {
//     document.body.style.width="100%";
//     console.log("ss");
// }, true);

let c = document.querySelectorAll(".card");
let k = document.querySelector('.view-works')
for (let elem of c) {
    elem.onmouseover = function (event) {
        event.preventDefault();
            elem.classList.add('current-card');
            if (!elem.querySelector(".view-works")) {
            let button = document.createElement("button");
            button.classList.add("view-works");
            button.textContent ="Смотреть работы";
            elem.append(button);
            }
        }
    elem.onmouseout = function (event) {
        event.preventDefault();
        if (!k) {
            elem.classList.remove('current-card');
            elem.lastChild.remove();  
        }
        // remove(document.getElementsByClassName("view-works"));
       

    }
     }