let audio = [];

function createaudio(url) {
    audio.push(new Audio(url));
}

for (let i = 0; i <= urls.length; i++) createaudio(urls[i]);

let playbut = document.querySelectorAll('.playbutton')

function playaudio(i) {
    if (!audio[i].paused)
    {
        audio[i].pause();
        audio[i].currentTime = 0;
        playbut[i].src = "play_button.jpg";
        return;
    }
    
    for (let j = 0; j < audio.length; j++)
    {
        if (!audio[j].paused)
        {
            audio[j].pause();
            audio[j].currentTime = 0;
            playbut[j].src = "play_button.jpg";
        }
        else
        {
            audio[i].play();
            playbut[i].src = "stop_button.jpg";
            audio[i].addEventListener('ended', function() {
                playbut[i].src = "play_button.jpg"
            });
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
