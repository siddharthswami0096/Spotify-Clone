console.log("Let's Write Javascript");

const audioplayer = document.getElementById("audioplayer");
const backwardbtn = document.getElementById("backwardbtn");
const backward10sbtn = document.getElementById("backward10sbtn");
const playbtn = document.getElementById("playbtn");
const forward10sbtn = document.getElementById("forward10sbtn");
const forwardbtn = document.getElementById("forwardbtn");
const currentsongdisplay = document.getElementById("currentsong");
const volumeslider = document.getElementById("volumeslider");
let currentsongindex = 0;

const songs = [
    { name: 'Husn', src: 'assests/songs/Husn.mp3' },
    { name: 'Tu Hai Kahan', src: 'assests/songs/Tu_Hai_Kahan.mp3' },
    { name: 'Aam Jahe Munde', src: 'assests/songs/AamJaheMunde.mp3' },
    { name: 'Iraaday', src: 'assests/songs/Iraaday.mp3' },
    { name: 'Aankhein Khuli Hon Ya', src: 'assests/songs/AankheinKhuliHonYa.mp3' },
    { name: 'Soulmate', src: 'assests/songs/Soulmate.mp3' },
    { name: 'Bekhayali', src: 'assests/songs/Bekhayali.mp3' },
    { name: 'Nadaan Parindey', src: 'assests/songs/NadaanParindey.mp3' },


];

function playsong() {
    audioplayer.src = songs[currentsongindex].src;
    audioplayer.play();
    playbtn.textContent = '⏸';
    currentsongdisplay.textContent = songs[currentsongindex].name;
}

function pausesong() {
    audioplayer.pause();
    playbtn.textContent = '▶';
}

function playnextsong() {
    currentsongindex = (currentsongindex + 1) % songs.length;
    playsong();
}

function playprevioussong() {
    currentsongindex = (currentsongindex - 1 + songs.length) % songs.length;
    playsong();
}

function moveforwardby10s() {
    audioplayer.currentTime += 10;
}

function moveBackwardby10s() {
    audioplayer.currentTime -= 10;
}

playbtn.addEventListener("click", () => {
    if (audioplayer.paused) {
        playsong();
    } else {
        pausesong();
    }
});

backwardbtn.addEventListener("click", playprevioussong);
backward10sbtn.addEventListener("click", moveBackwardby10s);
forwardbtn.addEventListener("click", playnextsong);
forward10sbtn.addEventListener("click", moveforwardby10s);

volumeslider.addEventListener("input", () => {
    audioplayer.volume = volumeslider.value;
});
