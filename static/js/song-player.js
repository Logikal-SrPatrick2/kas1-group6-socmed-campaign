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
    released: "1973", // release year
    info: "Bagong Pagsilang demonstrates how the Marcos administration wanted Filipinos to perceive the New Society. Its lyrics establish the government's promise, not proof that the promise was fulfilled.",
    audio: "",
    lyrics: `May bagong silang.
May bago nang buhay,
Bagong bansa, bagong galaw
Sa Bagong Lipunan!
Magbabago ang lahat, tungo sa pag-unlad,
At ating itanghal: Bagong Lipunan!

May bagong silang.
May bago nang buhay,
Bagong bansa, bagong galaw
Sa Bagong Lipunan!
Magbabago ang lahat, tungo sa pag-unlad,
At ating itanghal: Bagong Lipunan!

Ang gabi'y nagmaliw nang ganap,
At lumipas na ang magdamag.
Madaling araw ay nagdiriwang.
May umagang namasdan.
Ngumiti na ang pag-asa
Sa umagang anong ganda!

May bagong silang.
May bago nang buhay,
Bagong bansa, bagong galaw
Sa Bagong Lipunan!
Magbabago ang lahat, tungo sa pag-unlad,
At ating itanghal: Bagong Lipunan!`,
    annotations: `
May bagong silang.
May bago nang buhay,
Bagong bansa, bagong galaw
Aa Bagong Lipunan!

- Annotation 01
The lyrics announce the birth of a supposedly new Philippines. The words "bagong silang" and "bagong buhay" symbolize a fresh beginning, suggesting that the country is leaving its previous problems behind.

Following the declaration of Martial Law in September 1972, Marcos promoted the Bagong Lipunan as a national transformation emphasizing discipline, order, unity, and development.


Magbabago ang lahat, tungo sa pag-unlad,
At ating itanghal: Bagong Lipunan!

- Annotation 02
The lyrics promise that everything will change for the better and that the country will move toward development.

The Marcos government used the New Society campaign to promote its political and economic programs.


Verse 2

Ang gabi'y nagmaliw nang ganap,
At lumipas na ang magdamag.
Madaling araw ay nagdiriwang.
May umagang namasdan.

- Annotation 03
Night and darkness represent a difficult past, while dawn represents hope, renewal, and a brighter future.


Ngumiti na ang pag-asa
Sa umagang anong ganda!

- Annotation 04
The lyrics personify hope as something that has returned to the country. The beautiful morning symbolizes the anticipated benefits of the New Society.
`,
  },
  {
    title: "Masagana-99 Theme Song",
    artist: "Gene Generoso | Emil Mijares | The Entrolezos",
    cover: "./static/img/Masagana1.png",
    released: "1973",
    info: "The Masagana-99 jingle is how the government promoted its agricultural policy. It shows how development was communicated through music, but it cannot independently establish the program's success. ",
    audio: "",
    lyrics: `Ang diwa ng bayanihan,
lumaganap sa mga palayan.
Magsasaka'y nagsama-sama,
pinasibol ang pag-asa.

Ang Luzon at ang Visayas,
pati na nga sa Mindanao,
nilinang ang mga lupa;
pinagyaman bawat araw.

Kaban-kaban na karagdagan
ay nakamtan sa sakahan.
Pati na rin ang buong bayan,
nakibahagi sa kaunlaran.

Paunlarin natin ang palayan
sa makabagong paraan.
Makisapi sa kilusan.
Masagana-99!`,
  },
  {
    title: "Oy Utol, Buto’t Balat Ka Na’y Natutulog Ka Pa",
    artist: "Heber Bartolome",
    cover: "./static/img/Oy Utol1.png",
    released: "1973",
    info: "While the government-sponsored song announces a new and hopeful society, Bartolome asks listeners to look at the suffering that may exist behind the appearance of happiness. Its strongest historical contribution is documenting a contemporary artist's critical perspective on hunger, fear, repression, and public silence.",
    audio: "",
    lyrics: `Masdan niyo ang ating paligid
Akala mo'y walang ligalig
May saya at mayro'ng awit
Ngunit may namimilipit
At siya'y humihibik

Masdan niyo ang ating buhay
Masdan niyo ang kapalaran
Bakit may nahihirapan?
Bakit may sumisigaw?

Kay hirap nang tumawa 
kung hungkag ang 'yong tiyan
Kay hirap nang mangusap 
kung bibig mo'y may tapal

Kay hirap nang mabuhay 
kung kalagaya'y ganyan
Kay hirap nang lumaban 
kung takot ka sa kalaban

Ah ay
Ah yay yay yay yay yay yay yay

Walang tutulong
Walang tutulong sa atin
Walang pag-asa kundi ikaw at ako rin
At kung tayo'y mananahimik at di kikilos
Ang dapat sa atin ay tawaging mga g*go

Di niyo ba nalalaman
Kung bakit tayo'y nagkaganyan
Bakit may nahihirapan
Bakit may sumisigaw
Bakit may namimilipit
At sila'y humihibik

Maging ako'y nahihirapan
Kaya ngayo'y sumisigaw
Sumisigaw!`,
  },
  {
    title: "Saranggola ni Pepe",
    artist: "Celeste Legaspi",
    cover: "./static/img/Saranggola ni Pepe1.png",
    released: "1977",
    info: "Saranggola ni Pepe shows how political criticism could be communicated indirectly through metaphor. Using surreal and seemingly playful imagery. Its lyrics can be interpreted as a reflection on authoritarianism, silencing, and the suppression of individual expression. ",
    audio: "",
    lyrics: `Matayog ang lipad ng saranggola ni Pepe
Matayog ang pangarap ng matandang bingi
Umihip ang hangin, nawala sa paningin
Sigaw ng kahapon, nilamon ng alon
Malabo ang tunog ng kampanilya ni Padre
Maingay ang taginting rosaryo ng babae

Nay, nay, nay, nay
Nay, nay, nay, nay
Nay, nay, nay, nay
Nay-

Matayog ang lipad ng saranggola ni Pepe
Matayog ang pangarap ng matandang bingi
Hinuli ang ibon, pinagsuot ng pantalon
Tinali ng pisi, hindi na nagsinturon
Dumaan ang jeepney at gumuhit pa sa kalye
Mauling ang iniwan, hindi na tinabi

Nay, nay, nay, nay
Nay, nay, nay, nay
Nay, nay, nay, nay
Nay-

Matayog ang lipad ng saranggola ni Pepe
Matayog ang pangarap ng matandang bingi
Pinilit umawit ang naglaro'y isang ingit
Lumuha ang langit at ang mundo ay nanliit
Kumakaway sa bakod ang anghel na nakatanod
Sumusuway sa utos puso'y sinusunod

Nay, nay, nay, nay
Nay, nay, nay, nay
Nay, nay, nay, nay
Nay-`,
  },
  {
    title: "Halina",
    artist: "Jess Santiago",
    cover: "./static/img/Halina1.png",
    released: "Late 1970s",
    info: "Halina presents three different social experiences: labor exploitation, agrarian injustice, and urban displacement. It directly challenges the idea that the New Society's promise of progress was experienced equally by all Filipinos.",
    audio: "",
    lyrics: `Si Lina ay isang magandang dalaga
Panggabi sa isang pabrika ng tela
Sumapi sa union, sumama sa welga
Biglang nagkagulo, nawala si Lina
Nang muling makita’y hubad at patay na

Halina, halina
Damitan ang bangkay at sa ating puso’y
Hayaang humimlay si Lina.

Isang magsasaka si Pedro Pilapil
Walang kaulayaw kundi ang bukirin
Ngunit isang araw, may biglang dumating
Ang saka ni Pedro’y kanilang inangkin
Tumutol si Pedro, at siya ay binaril

Halina, halina
At sa ating puso’y hayaang maghasik
Ng punla si Pedro Pilapil.

Sina Aling Maria’y doon nakatira
Sa tabi ng isang bundok ng basura
Ngunit isang araw binulldozer sila
Sapagkat darating ang mga turista
Nawalan ng bahay ang isang pamilya

Halina, halina
At sa ating puso’y ipagtayo ng tahanan
Sina aling Maria.
Halina, halina.`,
  },
  {
    title: "Martsa ng Bayan",
    artist: "Jess Santiago",
    cover: "./static/img/Martsa ng Bayan1.png",
    released: "Early 1980s",
    info: "The song was composed in the 1980s and became an anti-dictatorship protest anthem. It was performed during protest activities and was associated with calls for collective action involving different sectors and political visions against the Marcos regime. ",
    audio: "",
    lyrics: `Manggagawa at magsasaka,
Kabataan at propesyonal,
Mga alagad ng simbahan,
Negosyante at pinunong makabayan!
Tayo na at magkapit-bisig!
Tapusin ang daang-taong pananahimik!
Panahon na upang ang ating tinig
Ay marinig sa buong daigdig!

Tayo na at magsama-sama
Sa pagdurog sa imperyalista!
Tayo na at magka-isa,
Lansagin ang pasistang diktadura!
Nasa atin ang tunay na lakas!
Tiyak nasa atin ang bukas!	

Manggagawa at magsasaka,
Kabataan at propesyonal,
Mga alagad ng simbahan,
Negosyante at pinunong makabayan!
Tayo na at magkapit-bisig!
Tapusin ang daang-taong pananahimik!
Panahon na upang ang ating tinig
Ay marinig sa buong daigdig!

Tayo na at magsama-sama
Sa pagdurog sa imperyalista!
Tayo na at magka-isa,
Lansagin ang pasistang diktadura!
Nasa atin ang tunay na lakas!
Tiyak nasa atin ang bukas!	

Tayo na at magka-isa
Isulong ang pambansang demokrasya!`,
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

(song.lyrics || "Lyrics are not available yet.").split("\n").forEach((line) => {
  const span = document.createElement("span");
  span.textContent = line || "\u00A0";
  lyricsContent.appendChild(span);
});
const annotationContent = document.getElementById("annotationContent");

annotationContent.innerHTML = "";

(song.annotations || "Annotations are not available yet.")
  .split("\n")
  .forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line || "\u00A0";
    annotationContent.appendChild(span);
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
  if (audio.duration)
    progress.value = (audio.currentTime / audio.duration) * 100;
});
progress.addEventListener("input", () => {
  if (audio.duration)
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// ---------- previous / next / shuffle / repeat ----------
const current = songs.indexOf(song);
const goTo = (i) =>
  (location.search = `?song=${(i + songs.length) % songs.length}`);
document
  .getElementById("prev")
  .addEventListener("click", () => goTo(current - 1));
document
  .getElementById("next")
  .addEventListener("click", () => goTo(current + 1));
document.getElementById("shuffle").addEventListener("click", () => {
  let i;
  do {
    i = Math.floor(Math.random() * songs.length);
  } while (songs.length > 1 && i === current);
  goTo(i);
});
const repeatBtn = document.getElementById("repeat");
repeatBtn.addEventListener("click", () => {
  audio.loop = !audio.loop;
  repeatBtn.setAttribute("aria-pressed", audio.loop);
});

// lyrics
const lyricsBtn = document.getElementById("lyricsBtn");
const annotationBtn = document.getElementById("annotationBtn");
const lyricsPanel = document.getElementById("lyricsPanel");
const annotationPanel = document.getElementById("annotationPanel");
const playerLayout = document.getElementById("playerLayout");

lyricsBtn.addEventListener("click", () => {
  const alreadyOpen = !lyricsPanel.hidden;

  lyricsPanel.hidden = alreadyOpen;
  annotationPanel.hidden = true;

  playerLayout.classList.toggle("show-lyrics", !alreadyOpen);

  lyricsBtn.setAttribute("aria-expanded", String(!alreadyOpen));
  annotationBtn.setAttribute("aria-expanded", "false");
});

annotationBtn.addEventListener("click", () => {
  const alreadyOpen = !annotationPanel.hidden;

  annotationPanel.hidden = alreadyOpen;
  lyricsPanel.hidden = true;

  playerLayout.classList.toggle("show-lyrics", !alreadyOpen);

  annotationBtn.setAttribute("aria-expanded", String(!alreadyOpen));
  lyricsBtn.setAttribute("aria-expanded", "false");
});
