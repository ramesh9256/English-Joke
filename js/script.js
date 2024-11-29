// api = "https://official-joke-api.appspot.com/random_joke"


let box = document.querySelector(".joke-box");
let api = "https://official-joke-api.appspot.com/random_joke";
let button = document.querySelector("button");

button.addEventListener("click", () =>{
    box.textContent="";
    fetch(api)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        let setup = data.setup;
        let punchline = data.punchline;
    
        let box1 = document.createElement("div");
        box1.classList.add("box1");
        box1.innerHTML = `
            <p>${setup}</p>
            <p>${punchline}</p>
        `
        box.append(box1);
    })
})

