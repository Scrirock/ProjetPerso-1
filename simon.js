let rng = null;
let flag = 0;
let i = 0;
let y = 0;
let ordre = [];
let ordreVerif = [];
let jeu = 0;

function wrong(){
    let wrong = new Audio();
    wrong.src = "wrong.wav";
    wrong.play();
    flag = 0;
    i = 0;
    jeu = 0;
    ordreVerif = [];
    y = 0;
}

function win(){
    let win = new Audio();
    win.src = "win.wav";
    win.play();
    flag = 0;
    i = 0;
    jeu = 0;
    ordreVerif = [];
    y = 0;
}

function rouge(){
    if (jeu === 1) {
        let rouge = new Audio();
        rouge.src = "rouge.wav";
        rouge.play();
        document.getElementById("rouge").style.background= "red";
        ordre.push("r");

        if (flag === 1) {
            if (ordre[i] === ordreVerif[i]) {
                i++;
                if (i === 4) win();
            } else wrong();
        }
        setTimeout(() => {document.getElementById("rouge").style.background= "#212121";}, 200);
    }
}

function bleu(){
    if (jeu === 1) {
        let bleu = new Audio();
        bleu.src = "bleu.wav";
        bleu.play();
        document.getElementById("bleu").style.background= "blue";
        ordre.push("b");

        if (flag === 1) {
            if (ordre[i] === ordreVerif[i]) {
                i++;
                if (i === 4) win();
            } else wrong();
        }
        setTimeout(() => {document.getElementById("bleu").style.background= "#212121";}, 200);
    }
}

function jaune(){
    if (jeu === 1) {
        let jaune = new Audio();
        jaune.src = "jaune.wav";
        jaune.play();
        document.getElementById("jaune").style.background= "yellow";
        ordre.push("j");

        if (flag === 1) {
            if (ordre[i] === ordreVerif[i]) {
                i++;
                if (i === 4) win();
            } else wrong();
        }
        setTimeout(() => {document.getElementById("jaune").style.background= "#212121";}, 200);
    }
}

function vert(){
    if (jeu === 1) {
        let vert = new Audio();
        vert.src = "vert.wav";
        vert.play();
        document.getElementById("vert").style.background= "green";
        ordre.push("v");

        if (flag === 1) {
            if (ordre[i] === ordreVerif[i]) {
                i++;
                if (i === 4) win();
            } else wrong();
        }
        setTimeout(() => {document.getElementById("vert").style.background= "#212121";}, 200);
    }
}

function go(){
    let go = new Audio();
    go.src = "go.wav";
    go.play();
    jeu = 1;
    let brol = setInterval(() => {
        rng = getRandomInt(4)
        switch (rng) {
            case 0:
                rouge();
                ordreVerif.push("r");
                break;
            case 1:
                bleu();
                ordreVerif.push("b");
                break;
            case 2:
                vert();
                ordreVerif.push("v");
                break;
            case 3:
                jaune();
                ordreVerif.push("j");
                break;
        }
        if (y === 3){
            clearInterval(brol);
            ordre = [];
            flag = 1;
        }
        y++;
        }, 1000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById("rouge").addEventListener("click", rouge);
document.getElementById("bleu").addEventListener("click", bleu);
document.getElementById("vert").addEventListener("click", vert);
document.getElementById("jaune").addEventListener("click", jaune);
document.getElementById("go").addEventListener("click", go);

let sombre = 1;

function exit(){
    let theme = document.getElementById("exit");

    if (sombre === 0){
        theme.style.backgroundColor = "#9b9b9b"
        theme.style.color = "#212121"
        document.body.style.backgroundColor = "#9b9b9b"
        sombre = 1;
    }
    else {
        theme.style.backgroundColor = "#212121"
        theme.style.color = "#9b9b9b"
        document.body.style.backgroundColor = "#212121"
        sombre = 0;
    }

}

document.getElementById("theme").addEventListener("click", exit);