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



function selectdepart() {
    document.querySelector('#departbutt').style.backgroundColor = "darkgray";
    document.querySelector('#returnbutt').style.backgroundColor = "lightgray";
    
    let di = document.querySelectorAll('.depart');
    let ve = document.querySelectorAll('.return');
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
    document.querySelector('#departbutt').style.backgroundColor = "lightgray";
    document.querySelector('#returnbutt').style.backgroundColor = "darkgray";
    
    let di = document.querySelectorAll('.depart');
    let ve = document.querySelectorAll('.return');
    
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
