let audio = [];

function createaudio(url) {
    audio.push(new Audio(url));
}

for (let i = 0; i <= urls.length; i++) createaudio(urls[i]);

function playaudio(i) {
    if (!audio[i].paused)
    {
        audio[i].pause();
        audio[i].currentTime = 0;
        return;
    }
    
    for (j = 0; j < audio.length; j++)
    {
        if (!audio[j].paused)
        {
            audio[j].pause();
            audio[j].currentTime = 0;
        }
        else
        {
            audio[i].play();
        }
    }
}

let but1 = document.querySelector('#departbutt');
let but2 = document.querySelector('#returnbutt');
let di = document.querySelectorAll('.depart');
let ve = document.querySelectorAll('.return');

function selectdepart() {
    but1.style.backgroundColor = "darkgray";
    but2.style.backgroundColor = "lightgray";

    for (let i = 0; i < di.length; i++)
    {
        di[i].style.display = "block";
    }

    for (let i = 0; i < ve.length; i++)
    {
        ve[i].style.display = "none";
    }

    for (let i = 0; i <= urls.length; i++) {
        audio[i].pause();
        audio[i].currentTime = 0;
    }
}

function selectreturn() {
    but1.style.backgroundColor = "lightgray";
    but2.style.backgroundColor = "darkgray";
    
    for (let i = 0; i < di.length; i++)
    {
        di[i].style.display = "none";
    }

    for (let i = 0; i < ve.length; i++)
    {
        ve[i].style.display = "block";
    }

    for (let i = 0; i <= urls.length; i++) {
        audio[i].pause();
        audio[i].currentTime = 0;
    }
}
