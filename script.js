let show = document.getElementById("showEaster");

function showFunc(){
    event.preventDefault()
    document.getElementById("easterEgg").style.display = "block";
}

document.body.addEventListener("keydown", (event) => {
    if (event.key === "Control"){
        show.addEventListener("click", showFunc);
        console.log("touche app")
    }
});

document.body.addEventListener("keyup", (event) => {
    if (event.key === "Control"){
        show.removeEventListener("click", showFunc);
        console.log("touche rel")
    }
});
