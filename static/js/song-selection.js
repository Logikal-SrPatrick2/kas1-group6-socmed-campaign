const songs = [
  { title: "Bagong Pagsilang",                              artist: "Levi Celerio | Felipe Padilla de Leon",         cover: "./static/img/BagongPagsilang1.png" },
  { title: "Masagana-99 Theme Song",                        artist: "Gene Generoso | Emil Mijares | The Entrolezos", cover: "./static/img/Masagana1.png" },
  { title: "Oy Utol, Buto’t Balat Ka Na’y Natutulog Ka Pa", artist: "Heber Bartolome",                               cover: "./static/img/Oy Utol1.png" },
  { title: "Saranggola ni Pepe",                            artist: "Celeste Legaspi",                               cover: "./static/img/Saranggola ni Pepe1.png" },
  { title: "Halina",                                        artist: "Jess Santiago",                                 cover: "./static/img/Halina1.png" },
  { title: "Pira-pirasong Balita",                          artist: "Paul Galang",                                   cover: "./static/img/Pirapirasong Balita1.png" },
  { title: "Martsa ng Bayan",                               artist: "Jess Santiago",                                 cover: "./static/img/Martsa ng Bayan1.png" },
];

const carousel = document.getElementById('carousel');
const info = document.getElementById('info');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const n = songs.length;
let index = 0;

const cards = songs.map((s, i) => {
  const b = document.createElement('button');
  b.className = 'card';
  b.setAttribute('role', 'option');
  b.setAttribute('aria-label', `${s.title} by ${s.artist}`);
  b.style.setProperty('--c1', s.c1);
  b.style.setProperty('--c2', s.c2);
  b.innerHTML = s.cover
    ? `<img class="cover" src="${s.cover}" alt="">`
    : `<div class="cover">${s.title}</div>`;
  b.addEventListener('click', () => {
  if (i === index) {
    location.href = `./song-player.html?song=${i}`;
  } else {
    select(i);
  }
});
  carousel.appendChild(b);
  return b;
});

function offsetOf(i) {
  let d = (i - index) % n;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

function render(animate = true) {
  cards.forEach((card, i) => {
    const d = offsetOf(i);
    card.hidden = Math.abs(d) > 2;
    card.classList.toggle('is-active', d === 0);
    card.setAttribute('aria-selected', d === 0);
    card.tabIndex = d === 0 ? 0 : -1;
    card.style.setProperty('--x', d * 1.15);
    card.style.setProperty('--s', d === 0 ? 1 : 0.78);
    card.style.setProperty('--o', d === 0 ? 1 : Math.abs(d) === 1 ? 0.55 : 0.2);
    card.style.setProperty('--b', d === 0 ? 1 : 0.6);
    card.style.setProperty('--z', 10 - Math.abs(d));
  });

  titleEl.textContent = songs[index].title;
  artistEl.textContent = songs[index].artist;

  if (animate) {
    info.classList.remove('swap');
    void info.offsetWidth; // restart the animation
    info.classList.add('swap');
  }
}

function select(i) { index = (i + n) % n; render(); }
const next = () => select(index + 1);
const prev = () => select(index - 1);

document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', prev);

document.addEventListener('keydown', e => {
  if (e.target.matches('input, textarea')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
});

render(false);