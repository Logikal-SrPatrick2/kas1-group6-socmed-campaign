/* KAS | Song Player
   ------------------------------------------------------------
   TO CHANGE A SONG: edit its block below.
   TO ADD A SONG:    copy a block, paste it at the end, change the text.
   Open a song with the page address, e.g.  song-player.html?song=4
   (0 = first song in this list, 1 = second, ...). Same order as the
   song-selection page.
   ------------------------------------------------------------ */
const songs = [
  {
    title: "Bagong Pagsilang",
    artist: "Levi Celerio | Felipe Padilla de Leon",
    cover: "./static/img/BagongPagsilang1.png", // album cover image
    released: "TBA",                              // release year
    info: "Background information, themes and messages of the song go here.",
    audio: "",
    lyrics: "",                                    // e.g. "./static/audio/bagong-pagsilang.mp3" (leave empty for no sound)
  },
  {
    title: "Masagana-99 Theme Song",
    artist: "Gene Generoso | Emil Mijares | The Entrolezos",
    cover: "./static/img/Masagana1.png",
    released: "TBA",
    info: "Background information, themes and messages of the song go here.",
    audio: "",
    lyrics: "",
  },
  {
  title: "Oy Utol, Buto’t Balat Ka Na’y Natutulog Ka Pa",
  artist: "Heber Bartolome",
  cover: "./static/img/Oy Utol1.png",
  released: "TBA",
  info: "Background information, themes and messages of the song go here.",
  audio: "",
  lyrics: "",
  },
  {
    title: "Saranggola ni Pepe",
    artist: "Celeste Legaspi",
    cover: "./static/img/Saranggola ni Pepe1.png",
    released: "TBA",
    info: "Background information, themes and messages of the song go here.",
    audio: "",
    lyrics: `Lorem ipsum
Dolor sit amet
Consectetur adipiscing
Elit sed do

Eiusmod tempor
Incididunt ut labore
Et dolore magna
Aliqua enim`,
  },
  {
    title: "Halina",
    artist: "Jess Santiago",
    cover: "./static/img/Halina1.png",
    released: "TBA",
    info: "Background information, themes and messages of the song go here.",
    audio: "",
    lyrics: "",
  },
  {
    title: "Pira-pirasong Balita",
    artist: "Paul Galang",
    cover: "./static/img/Pirapirasong Balita1.png",
    released: "TBA",
    info: "Background information, themes and messages of the song go here.",
    audio: "",
    lyrics: "",
  },
  {
    title: "Martsa ng Bayan",
    artist: "Jess Santiago",
    cover: "./static/img/Martsa ng Bayan1.png",
    released: "TBA",
    info: "Background information, themes and messages of the song go here.",
    audio: "",
    lyrics: "",
  },
];

/* ---------- nothing below needs editing per song ---------- */

const PLAY_PATH = "M8 5v14l11-7z";
const PAUSE_PATH = "M7 5h4v14H7zM13 5h4v14h-4z";

const player = document.getElementById("player");
const playBtn = document.getElementById("play");
const playIcon = document.getElementById("playIcon");
const audio = new Audio();

// which song? read ?song=N from the address, default to the first
const n = Number(new URLSearchParams(location.search).get("song"));
const song = songs[Number.isInteger(n) && songs[n] ? n : 0];

document.title = `KAS | ${song.title}`;
document.getElementById("cover").src = song.cover;
// vinyl image shares the cover's filename, with 1 -> 2 (e.g. Halina1.png -> Halina2.png)
document.getElementById("record").src = song.cover.replace(/1\.png$/, "2.png");
document.getElementById("cover").alt = `${song.title} album cover`;
document.getElementById("title").textContent = song.title;
document.getElementById("artist").textContent = song.artist;
document.getElementById("released").textContent = song.released || "TBA";
document.getElementById("info").textContent = song.info;
const lyricsContent = document.getElementById("lyricsContent");

lyricsContent.innerHTML = "";

(song.lyrics || "Lyrics are not available yet.")
  .split("\n")
  .forEach(line => {
    const span = document.createElement("span");
    span.textContent = line || "\u00A0";
    lyricsContent.appendChild(span);
  });
if (song.audio) audio.src = song.audio;

function setPlaying(on) {
  player.classList.toggle("is-playing", on);
  playIcon.setAttribute("d", on ? PAUSE_PATH : PLAY_PATH);
  playBtn.setAttribute("aria-label", on ? "Pause" : "Play");
}

playBtn.addEventListener("click", () => {
  const on = !player.classList.contains("is-playing");
  setPlaying(on);
  if (!song.audio) return; // no audio file yet: the record just spins
  if (on) audio.play().catch(() => setPlaying(false));
  else audio.pause();
});

audio.addEventListener("ended", () => setPlaying(false));

// ---------- progress bar ----------
const progress = document.getElementById("progress");
audio.addEventListener("timeupdate", () => {
  if (audio.duration) progress.value = (audio.currentTime / audio.duration) * 100;
});
progress.addEventListener("input", () => {
  if (audio.duration) audio.currentTime = (progress.value / 100) * audio.duration;
});

// ---------- previous / next / shuffle / repeat ----------
const current = songs.indexOf(song);
const goTo = (i) => (location.search = `?song=${(i + songs.length) % songs.length}`);
document.getElementById("prev").addEventListener("click", () => goTo(current - 1));
document.getElementById("next").addEventListener("click", () => goTo(current + 1));
document.getElementById("shuffle").addEventListener("click", () => {
  let i;
  do { i = Math.floor(Math.random() * songs.length); } while (songs.length > 1 && i === current);
  goTo(i);
});
const repeatBtn = document.getElementById("repeat");
repeatBtn.addEventListener("click", () => {
  audio.loop = !audio.loop;
  repeatBtn.setAttribute("aria-pressed", audio.loop);
});

// lyrics
const playerLayout = document.getElementById("playerLayout");
const lyricsBtn = document.getElementById("lyricsBtn");
const lyricsPanel = document.getElementById("lyricsPanel");

lyricsBtn.addEventListener("click", () => {
  const open = lyricsPanel.hidden;

  lyricsPanel.hidden = !open;
  playerLayout.classList.toggle("show-lyrics", open);

  lyricsBtn.textContent = open ? "CLOSE LYRICS" : "LYRICS";
  lyricsBtn.setAttribute("aria-expanded", String(open));
});