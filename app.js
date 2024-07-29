let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let li = document.createElement('li');
    let del = document.createElement('button');
    del.innerText = "Delete";
    del.classList.add("delete");
    li.innerText = input.value + " ";
    li.appendChild(del);
    ul.appendChild(li);
    input.value = '';
})

// let cross = document.querySelectorAll(".delete");

// for (crs of cross) {
//     crs.addEventListener("click", function () {
//         console.log(this.parentElement);
//         this.parentElement.remove();
//     })
// }

ul.addEventListener('click',function(event){
    if(event.target.nodeName == "BUTTON")
        event.target.parentElement.remove();
})

