const container = document.querySelector(".container");
const coffes = [
    {
        name:"Boats",
        image:"images/img1.jpg"
    },
    {
        name:"Black & White",
        image:"images/img2.jpg"
    },
    {
        name:"Shocking",
        image:"images/img3.jpg"
    },
    {
        name:"Rchitecto",
        image:"images/img4.jpg"
    },
    {
        name:"Majestic",
        image:"images/img5.jpg"
    },
    {
        name:"Wolf",
        image:"images/img6.jpg"
    },
    {
        name:"Play",
        image:"images/img7.jpg"
    },
    {
        name:"Goku",
        image:"images/img8.jpg"
    },
    {
        name:"Only",
        image:"images/img9.jpg"
    }
];

const showCoffees = () => {
    let output = "";
    coffes.forEach(
        ({ name, image }) =>
        (output += `
            <div class="card">
                <img class="card--avatar" src="${image}">
                <h1 clas="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
            </div>
        `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}