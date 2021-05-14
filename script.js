const misicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const ProgressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


// Song titles

const songs = ['hey', 'summer', 'ukulele', 'ainebi', 'tamada']

//keep track of songs
let songIndex = 1

// Initially load song info DOM

loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src =`music/${song}.mp3`
    cover.src =`images/${song}.jpg`
}