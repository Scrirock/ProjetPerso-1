let rng = null;
let i = 0;
let flag = 0;
let ordre = [];
let ordreVerif = [];
let jeu = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function wrong(){
    let wrong = new Audio();
    wrong.src = "wrong.wav";
    wrong.play();
    flag = 0;
    i = 0;
    jeu = 0;
}

function win(){
    let win = new Audio();
    win.src = "win.wav";
    win.play();
    flag = 0;
    i = 0;
    jeu = 0;
}

async function rouge(){
    if (jeu === 1) {
        let rouge = new Audio();
        rouge.src = "rouge.wav";
        rouge.play();
        document.getElementById("rouge").style.opacity = "1";
        ordre.push("r");

        if (flag === 1) {
            if (ordre[i] === ordreVerif[i]) {
                i++;
                if (i === 4) win();
            } else wrong();
        }
        await sleep(200);
        document.getElementById("rouge").style.opacity = ".5";
    }
}

async function bleu(){
    if (jeu === 1) {
        let bleu = new Audio();
        bleu.src = "bleu.wav";
        bleu.play();
        document.getElementById("bleu").style.opacity = "1";
        ordre.push("b");

        if (flag === 1) {
            if (ordre[i] === ordreVerif[i]) {
                i++;
                if (i === 4) win();
            } else wrong();
        }
        await sleep(200);
        document.getElementById("bleu").style.opacity = ".5";
    }
}

async function jaune(){
    if (jeu === 1) {
        let jaune = new Audio();
        jaune.src = "jaune.wav";
        jaune.play();
        document.getElementById("jaune").style.opacity = "1";
        ordre.push("j");

        if (flag === 1) {
            if (ordre[i] === ordreVerif[i]) {
                i++;
                if (i === 4) win();
            } else wrong();
        }
        await sleep(200);
        document.getElementById("jaune").style.opacity = ".5";
    }
}

async function vert(){
    if (jeu === 1) {
        let vert = new Audio();
        vert.src = "vert.wav";
        vert.play();
        document.getElementById("vert").style.opacity = "1";
        ordre.push("v");

        if (flag === 1) {
            if (ordre[i] === ordreVerif[i]) {
                i++;
                if (i === 4) win();
            } else wrong();
        }
        await sleep(200);
        document.getElementById("vert").style.opacity = ".5";
    }
}

async function go(){
    let go = new Audio();
    go.src = "go.wav";
    await go.play();
    jeu = 1;
    await sleep(1000);
    while (i<4){
        rng = getRandomInt(4)
        switch (rng){
            case 0:
                rouge();
                ordreVerif.push("r");
                await sleep(200);
                document.getElementById("rouge").style.opacity = ".5";
                break;
            case 1:
                bleu();
                ordreVerif.push("b");
                await sleep(200);
                document.getElementById("bleu").style.opacity = ".5";
                break;
            case 2:
                vert();
                ordreVerif.push("v");
                await sleep(200);
                document.getElementById("vert").style.opacity = ".5";
                break;
            case 3:
                jaune();
                ordreVerif.push("j");
                await sleep(200);
                document.getElementById("jaune").style.opacity = ".5";
                break;
        }
        await sleep(1000);
        i++;
    }
    i = 0;
    ordre = [];
    flag = 1;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
