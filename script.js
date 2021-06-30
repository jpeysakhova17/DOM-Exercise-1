"use strict";

function main () {
    //1
    document.querySelector("#grow-me").classList.add("big");

    //2
    document.querySelector("#shrink-me").classList.remove("big");

    //3
    document.querySelectorAll("li").forEach(function(li) {
        console.log(li.textContent);
    })
    //could also use a loop for this:
    // for(let li of document.querySelectorAll("li")) {
    //     console.log(li.textContent);
    // }
    //could do another type of loop also:
    // for(let i=0; i<document.querySelectorAll("li").length; i++) {
    //     document.querySelectorAll("li") [i].textContent;
    // }

    //4
    document.querySelector("a").setAttribute("href", "https://www.example.com");
    document.querySelector("a").textContent = "somewhere";

    //5
    document.querySelector("#hide-me").style.display = "none";
    
    //6
    document.querySelector("#show-me").style.display = "block";

    //7
    let inputValue = document.querySelector("#name").value;
    // document.querySelector("h1").textContent = "Welcome" + inputValue;
    document.querySelector("h1").textContent = `Welcome ${inputValue}`;
}

//could also have done it like this:
// let main = function () {}
// let main = () => {}

