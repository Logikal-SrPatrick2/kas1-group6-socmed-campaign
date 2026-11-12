// ------------------------------------------------------------
// TIMESTAMPS: replace each  at: "??:??"  with the time that paragraph
// starts, as "m:ss", e.g. at: "0:12" or at: "1:05".
// A paragraph stays highlighted until the next timed paragraph starts.
//   until: "m:ss"  (optional) hides it earlier.
//   same: N        reuses the lyrics + annotation of section N in this
//                  song (N counts from 0), for repeated choruses.
// ------------------------------------------------------------
const songs = [
  {
    title: "Bagong Pagsilang",
    artist: "Levi Celerio | Felipe Padilla de Leon",
    cover: "./static/img/BagongPagsilang1.png",
    released: "1973",
    info: "Bagong Pagsilang demonstrates how the Marcos administration wanted Filipinos to perceive the New Society. Its lyrics establish the government's promise, not proof that the promise was fulfilled.",
    audio: "./static/audio/Bagong Pagsilang.mp3",
    sections: [
      { // 0
        label: "Chorus", at: "0:11",
        lines: `May bagong silang.
May bago nang buhay,
Bagong bansa, bagong galaw
Sa Bagong Lipunan!`,
        note: [
          `The lyrics announce the birth of a supposedly new Philippines. The words "bagong silang" and "bagong buhay" symbolize a fresh beginning, suggesting that the country is leaving its previous problems behind.`,
          `Following the declaration of Martial Law in September 1972, Marcos promoted the Bagong Lipunan as a national transformation emphasizing discipline, order, unity, and development.`,
        ],
      },
      { // 1
        at: "0:27",
        lines: `Magbabago ang lahat, tungo sa pag-unlad,
At ating itanghal: Bagong Lipunan!`,
        note: [
          `The lyrics promise that everything will change for the better and that the country will move toward development.`,
          `The Marcos government used the New Society campaign to promote its political and economic programs.`,
        ],
      },
      { same: 0, at: "0:52" }, // 2 (repeat)
      { same: 1, at: "1:08" }, // 3 (repeat)
      { // 4
        label: "Verse", at: "1:31",
        lines: `Ang gabi'y nagmaliw nang ganap,
At lumipas na ang magdamag.
Madaling araw ay nagdiriwang.
May umagang namasdan.`,
        note: [
          `Night and darkness represent a difficult past, while dawn represents hope, renewal, and a brighter future.`,
        ],
      },
      { // 5
        at: "1:48",
        lines: `Ngumiti na ang pag-asa
Sa umagang anong ganda!`,
        note: [
          `The lyrics personify hope as something that has returned to the country. The beautiful morning symbolizes the anticipated benefits of the New Society.`,
        ],
      },
      { same: 0, at: "1:56" }, // 6 (final chorus)
      { same: 1, at: "2:12" }, // 7
    ],
  },
  {
    title: "Masagana-99 Theme Song",
    artist: "Gene Generoso | Emil Mijares | The Entrolezos",
    cover: "./static/img/Masagana1.png",
    released: "1973",
    info: "The Masagana-99 jingle is how the government promoted its agricultural policy. It shows how development was communicated through music, but it cannot independently establish the program's success. ",
    audio: "./static/audio/Masagana-99 - Theme Song.mp3",
    sections: [
      {
        label: "Verse 1", at: "0:10",
        lines: `Ang diwa ng bayanihan,
lumaganap sa mga palayan.
Magsasaka'y nagsama-sama,
pinasibol ang pag-asa.`,
        note: [
          `The lyrics portray farmers working together through cooperation and collective effort. Bayanihan becomes the central value behind the program's agricultural vision.`,
          `Masagana-99 was introduced in 1973 to increase rice production through high-yielding rice varieties, modern agricultural inputs, and supervised credit for farmers.`,
        ],
      },
      {
        at: "0:25",
        lines: `Ang Luzon at ang Visayas,
pati na nga sa Mindanao,
nilinang ang mga lupa;
pinagyaman bawat araw.`,
        note: [
          `By mentioning Luzon, Visayas, and Mindanao, the song presents agricultural development as a nationwide effort. The lyrics imply that the benefits of the program reached farmers throughout the archipelago.`,
          `Masagana-99 was promoted as a national agricultural program rather than a project limited to a particular region. It aimed to increase rice production through modern farming techniques and supervised credit.`,
        ],
      },
      {
        at: "0:43",
        lines: `Kaban-kaban na karagdagan
ay nakamtan sa sakahan.
Pati na rin ang buong bayan,
nakibahagi sa kaunlaran.`,
        note: [
          `This describes the benefits of agricultural development spreading from farms to the entire nation. It portrays improvements in farming as a source of national prosperity.`,
          `The lyrics connect the success of farmers with the success of the entire country. This presents the program as proof that the New Society was delivering economic development to ordinary Filipinos.`,
          `The program's early production gains were significant, but its financial and environmental costs require consideration. The supervised credit system also exposed participating farmers and rural financial institutions to repayment risks. The full program history is more complicated than the song's portrayal of shared prosperity.`,
        ],
      },
      {
        at: "0:57",
        lines: `Paunlarin natin ang palayan
sa makabagong paraan.
Makisapi sa kilusan.
Masagana-99!`,
        note: [
          `The lyrics call on farmers to improve rice production using modern agricultural methods and to participate in the Masagana-99 initiative.`,
          `The phrase "makisapi sa kilusan" frames participation in the program as a collective movement. It makes agricultural modernization appear not merely as an economic policy but as a shared national mission associated with the New Society.`,
          `The use of modern agricultural inputs contributed to increased production, but it also raised concerns about farmers' dependence on purchased inputs, debt, and environmental consequences.`,
        ],
      },
    ],
  },
  {
    title: "Oy Utol, Buto’t Balat Ka Na’y Natutulog Ka Pa",
    artist: "Heber Bartolome",
    cover: "./static/img/Oy Utol1.png",
    released: "1973",
    info: "While the government-sponsored song announces a new and hopeful society, Bartolome asks listeners to look at the suffering that may exist behind the appearance of happiness. Its strongest historical contribution is documenting a contemporary artist's critical perspective on hunger, fear, repression, and public silence.",
    audio: "./static/audio/Oy Utol, Buto't Balat Ka Na'y Natutulog Ka Pa.mp3",
    sections: [
      {
        label: "Verse 1", at: "0:09",
        lines: `Masdan niyo ang ating paligid
Akala mo'y walang ligalig
May saya at mayro'ng awit
Ngunit may namimilipit
At siya'y humihibik`,
        note: [
          `The speaker asks listeners to look beyond the seemingly happy environment. Although there is music and celebration, someone nearby is suffering.`,
          `The contrast between "may saya at mayro'ng awit" and "may namimilipit" challenges the idea that visible celebration represents the condition of the entire population.`,
        ],
      },
      {
        label: "Verse 2", at: "0:53",
        lines: `Masdan niyo ang ating buhay
Masdan niyo ang kapalaran
Bakit may nahihirapan?
Bakit may sumisigaw?`,
        note: [
          `The lyrics challenge listeners to examine the actual conditions of people's lives instead of accepting appearances. The questions draw attention to suffering and the voices of people demanding attention.`,
          `The Martial Law period also involved political repression, economic hardship, and restrictions on public expression.`,
        ],
      },
      {
        label: "Verse 3", at: "1:35",
        lines: `Kay hirap nang tumawa kung hungkag ang 'yong tiyan
Kay hirap nang mangusap kung bibig mo'y may tapal
Kay hirap nang mabuhay kung kalagaya'y ganyan
Kay hirap nang lumaban kung takot ka sa kalaban`,
        note: [
          `The lyrics identify four conditions that make ordinary life difficult: hunger, inability to speak, suffering, and fear of confronting a powerful opponent.`,
        ],
      },
      { // no annotation for the wordless part
        at: "2:07",
        lines: `Ah ay
Ah yay yay yay yay yay yay yay`,
      },
      {
        label: "Verse 4", at: "2:52",
        lines: `Walang tutulong
Walang tutulong sa atin
Walang pag-asa kundi ikaw at ako rin
At kung tayo'y mananahimik at di kikilos
Ang dapat sa atin ay tawaging mga g*go`,
        note: [
          `The speaker argues that people cannot simply wait for someone else to solve their problems. Remaining silent and inactive allows injustice to continue.`,
          `During Martial Law, public assembly, political organizing, and criticism were restricted. Protest musicians used their songs to encourage political awareness and participation.`,
        ],
      },
      {
        label: "Final verse", at: "3:29",
        lines: `Di niyo ba nalalaman
Kung bakit tayo'y nagkaganyan
Bakit may nahihirapan
Bakit may sumisigaw
Bakit may namimilipit
At sila'y humihibik

Maging ako'y nahihirapan
Kaya ngayo'y sumisigaw
Sumisigaw!`,
        note: [
          `The speaker moves from observing other people's suffering to recognizing his own. The final act of shouting symbolizes refusing to remain silent.`,
          `Protest music became an alternative means of communicating concerns that were not adequately represented in government-controlled media. Artists used music to discuss issues that could be difficult or dangerous to address openly.`,
          `The song transforms suffering into a call for awareness. It presents speaking out as a response to injustice.`,
        ],
      },
    ],
  },
  {
    title: "Saranggola ni Pepe",
    artist: "Celeste Legaspi",
    cover: "./static/img/Saranggola ni Pepe1.png",
    released: "1977",
    info: "Saranggola ni Pepe shows how political criticism could be communicated indirectly through metaphor. Using surreal and seemingly playful imagery. Its lyrics can be interpreted as a reflection on authoritarianism, silencing, and the suppression of individual expression. ",
    audio: "./static/audio/Saranggola Ni Pepe.mp3",
    sections: [
      { // 0
        label: "Verse 1", at: "0:12",
        lines: `Matayog ang lipad ng saranggola ni Pepe
Matayog ang pangarap ng matandang bingi`,
        note: [
          `The first line introduces a kite flying high, suggesting ambition, aspiration, and freedom. The second introduces a deaf old man with similarly lofty dreams. The contrast invites listeners to question the relationship between a leader's ambitions and the people affected by them.`,
          `The "matandang bingi" can be read as a symbol of authority that refuses to hear the concerns of ordinary people. The contrast between high ambitions and deafness suggests that political aspirations may be disconnected from public needs.`,
          `The government promoted national renewal, but its restrictions on the press, political opposition, and public criticism limited the ability of Filipinos to challenge official decisions.`,
        ],
      },
      { // 1
        at: "0:20",
        lines: `Umihip ang hangin, nawala sa paningin
Sigaw ng kahapon, nilamon ng alon`,
        note: [
          `These images can represent the disappearance of people's hopes, memories, and grievances.`,
          `The dictatorship restricted the circulation of information and controlled much of the mainstream media. Accounts that challenged the government could be suppressed or excluded from public discussion.`,
        ],
      },
      { // 2
        at: "0:28",
        lines: `Malabo ang tunog ng kampanilya ni Padre
Maingay ang taginting rosaryo ng babae`,
        note: [
          `The lyrics juxtapose a faint church bell with the louder sound of a woman's rosary. The imagery evokes religious life and the presence of faith in everyday Filipino society.`,
          `Religious institutions and church figures became important voices in discussions of human rights and political repression during the dictatorship. Some clergy and religious organizations criticized government abuses and supported victims.`,
        ],
      },
      { // 3
        at: "0:36",
        lines: `Nay, nay, nay, nay
Nay, nay, nay, nay
Nay, nay, nay, nay
Nay-`,
      },
      { same: 0, label: "Verse 2", at: "0:51" }, // 4
      { // 5
        at: "0:59",
        lines: `Hinuli ang ibon, pinagsuot ng pantalon
Tinali ng pisi, hindi na nagsinturon`,
        note: [
          `A bird, naturally associated with freedom, is captured and made to wear clothing. Its freedom is replaced by imposed restrictions.`,
          `The arrest and detention of political opponents and activists became defining features of Martial Law. Restrictions on assembly, expression, and organizing limited individual and collective freedoms.`,
        ],
      },
      { // 6
        at: "1:08",
        lines: `Dumaan ang jeepney at gumuhit pa sa kalye
Mauling ang iniwan, hindi na tinabi`,
        note: [
          `The seemingly mundane scene contrasts with the unusual and troubling images in the surrounding lyrics. Everyday Filipino life continued during Martial Law, even as political restrictions and social inequalities shaped people's experiences.`,
        ],
      },
      { same: 3, at: "1:16" }, // 7
      { same: 0, label: "Verse 3", at: "1:31" }, // 8
      { // 9
        at: "1:40",
        lines: `Pinilit umawit ang naglaro'y isang ingit
Lumuha ang langit at ang mundo ay nanliit`,
        note: [
          `The image suggests that forced expression cannot produce genuine happiness or freedom.`,
          `The forced song can be interpreted as a metaphor for compelled conformity, people may be expected to celebrate the government even when their real feelings are different.`,
        ],
      },
      { // 10
        at: "1:48",
        lines: `Kumakaway sa bakod ang anghel na nakatanod
Sumusuway sa utos puso'y sinusunod`,
        note: [
          `This suggests a moral presence watching over a boundary. The final line emphasizes following one's conscience even when doing so means disobeying an order.`,
          `The lyrics can be read as an affirmation that moral responsibility does not always align with obedience to political authority.`,
        ],
      },
      { same: 3, at: "1:56" }, // 11
    ],
  },
  {
    title: "Halina",
    artist: "Jess Santiago",
    cover: "./static/img/Halina1.png",
    released: "Late 1970s",
    info: "Halina presents three different social experiences: labor exploitation, agrarian injustice, and urban displacement. It directly challenges the idea that the New Society's promise of progress was experienced equally by all Filipinos.",
    audio: "./static/audio/Halina.mp3",
    sections: [
      {
        label: "Verse 1", at: "0:20",
        lines: `Si Lina ay isang magandang dalaga
Panggabi sa isang pabrika ng tela`,
        note: [
          `Lina is introduced as a young woman who works the night shift in a textile factory. Her occupation establishes her as part of the industrial working class.`,
          `Industrial workers were among the sectors affected by labor policies, workplace conditions, and restrictions on organizing during Martial Law.`,
        ],
      },
      {
        at: "0:31",
        lines: `Sumapi sa union, sumama sa welga
Biglang nagkagulo, nawala si Lina`,
        note: [
          `Labor organizing and strikes became politically sensitive under Martial Law. Restrictions on collective action and the treatment of labor activists affected workers who attempted to assert their rights.`,
          `The lyrics connect participation in labor activism with the danger of disappearing. They challenge the idea that the government protected everyone equally under its promise of social order.`,
        ],
      },
      {
        at: "0:43",
        lines: `Nang muling makita’y hubad at patay na`,
        note: [
          `Torture, killings, and enforced disappearances were documented during Martial Law. The song reflects the fear surrounding abuses against people perceived as opponents of the government or established interests.`,
          `Lina's fate contradicts the image of a peaceful society in which citizens could freely exercise their rights.`,
        ],
      },
      {
        label: "Chorus", at: "0:54",
        lines: `Halina, halina
Damitan ang bangkay at sa ating puso’y
Hayaang humimlay si Lina.`,
        note: [
          `The invitation to dress Lina's body and allow her to rest in people's hearts expresses mourning and remembrance.`,
          `Victims of Martial Law and their families often faced difficulties seeking justice, recognition, and accountability.`,
          `Republic Act No. 10368 recognizes victims of gross human rights violations during the Marcos regime and establishes mechanisms for recognition and reparation.`,
        ],
      },
      {
        label: "Verse 2", at: "1:29",
        lines: `Isang magsasaka si Pedro Pilapil
Walang kaulayaw kundi ang bukirin`,
        note: [
          `Pedro is introduced as a farmer whose life revolves around his agricultural land. The field represents both his livelihood and his identity.`,
          `Land ownership and agrarian inequality remained important issues in rural Philippine society during the dictatorship. Marcos introduced Presidential Decree No. 27 in 1972, which covered certain rice and corn lands.`,
          `Presidential Decree No. 27, landmark law that emancipated tenant farmers working on private agricultural lands primarily devoted to rice and corn under sharecrop or lease-tenancy systems`,
        ],
      },
      {
        at: "??:??",
        lines: `Ngunit isang araw, may biglang dumating
Ang saka ni Pedro’y kanilang inangkin
Tumutol si Pedro, at siya ay binaril`,
        note: [
          `The sequence illustrates the danger faced by people who resist the loss of their livelihood.`,
          `Land disputes, unequal land ownership, and rural violence were persistent problems during the Marcos period. The government's land reform initiatives did not eliminate agrarian inequality.`,
        ],
      },
      {
        label: "Chorus", at: "2:05",
        lines: `Halina, halina
At sa ating puso’y hayaang maghasik
Ng punla si Pedro Pilapil.`,
        note: [
          `Although Pedro is killed, the lyrics imagine his memory planting seeds in people's hearts. The seed symbolizes the continuation of his hopes and struggle.`,
          `Farmers' movements and agrarian activism continued during Martial Law despite political repression.`,
        ],
      },
      {
        label: "Verse 3", at: "2:39",
        lines: `Sina Aling Maria’y doon nakatira
Sa tabi ng isang bundok ng basura`,
        note: [
          `The description immediately establishes her family's poverty and difficult living conditions.`,
          `Rapid urbanization and uneven economic development contributed to the growth of informal settlements and urban poverty during the period.`,
        ],
      },
      {
        at: "2:52",
        lines: `Ngunit isang araw binuldozer sila
Sapagkat darating ang mga turista
Nawalan ng bahay ang isang pamilya`,
        note: [
          `The family is demolished and displaced because tourists are expected to arrive. Their home is removed to improve the appearance of the area.`,
          `The Marcos administration promoted tourism, international prestige, and modernization. Large-scale urban projects and beautification initiatives were part of its development image.`,
        ],
      },
      {
        label: "Chorus", at: "3:15",
        lines: `Halina, halina
At sa ating puso’y ipagtayo ng tahanan
Sina Aling Maria.
Halina, halina.`,
        note: [
          `The response to displacement is not simply sympathy but a call for solidarity and action.`,
          `Housing and urban poverty remained major social concerns during the dictatorship.`,
        ],
      },
    ],
  },
  {
    title: "Martsa ng Bayan",
    artist: "Jess Santiago",
    cover: "./static/img/Martsa ng Bayan1.png",
    released: "Early 1980s",
    info: "The song was composed in the 1980s and became an anti-dictatorship protest anthem. It was performed during protest activities and was associated with calls for collective action involving different sectors and political visions against the Marcos regime. ",
    audio: "./static/audio/Martsa ng Bayan.mp3",
    sections: [
      { // 0
        label: "Verse 1", at: "0:03",
        lines: `Manggagawa at magsasaka,
Kabataan at propesyonal,
Mga alagad ng simbahan,
Negosyante at pinunong makabayan!`,
        note: [
          `The song identifies different sectors of Philippine society: workers, farmers, students, professionals, religious workers, businesspeople, and nationalist leaders.`,
          `Opposition to Marcos was not limited to one political group. Different sectors participated in activism, public demonstrations, and anti-dictatorship organizing. This contrasts with the Marcos regime's repression of these very sectors through arrests, intimidation, and human rights violations. Rather than genuinely uniting the people, the New Society Movement silenced those who challenged its authority, exposing the contradiction between its promise of national unity and its actual practices. (Pawilen, 2020)`,
        ],
      },
      { // 1
        at: "0:18",
        lines: `Tayo na at magkapit-bisig!
Tapusin ang daang-taong pananahimik!
Panahon na upang ang ating tinig
Ay marinig sa buong daigdig!`,
        note: [
          `The lyrics call on people to stand together and end a prolonged period of silence. The act of raising their voices represents the demand to be heard.`,
          `Martial Law restricted political expression, public assembly, and independent media. This challenges the Marcosian New Society, which restricted freedom of expression through censorship, media closures, and the suppression of public assemblies during Martial Law. The regime's portrayal of an orderly and progressive society therefore distorted the reality of a population deprived of fundamental freedoms. (Amnesty International Public Statement, 2018)`,
        ],
      },
      { // 2
        label: "Verse 2", at: "0:33",
        lines: `Tayo na at magsama-sama
Sa pagdurog sa imperyalista!`,
        note: [
          `The lyrics call for collective action against imperialism, emphasizing national independence and resistance to external political and economic influence.`,
          `Anti-imperialist and nationalist ideas were important parts of the political movements of the 1970s and 1980s. Discussions included foreign influence, economic dependence, and the presence of American military bases in the Philippines.`,
        ],
      },
      { // 3
        at: "0:41",
        lines: `Tayo na at magka-isa,
Lansagin ang pasistang diktadura!`,
        note: [
          `These lines directly call for unity against a fascist dictatorship.`,
          `By the 1980s, opposition to the Marcos regime had intensified amid economic crisis, political repression, and the assassination of Benigno Aquino Jr. in 1983. The line directly challenges the Marcos regime, which presented itself as a nationalist government while exercising authoritarian control over the country. The existence of widespread state repression, arbitrary arrests, torture, and extrajudicial killings contradicts the New Society's claims of national liberation and genuine social transformation.`,
        ],
      },
      { // 4
        at: "0:48",
        lines: `Nasa atin ang tunay na lakas!
Tiyak nasa atin ang bukas!`,
        note: [
          `This argues that the people themselves possess the power to determine the country's future. They shift political agency away from a single ruler and toward collective action.`,
          `The 1980s saw increasing public mobilization against Marcos. The People Power Revolution in February 1986 demonstrated how civilian participation, together with other political developments, contributed to the end of his rule. This contradicts the Marcosian New Society's concentration of political and economic power within the Marcos family and its associates. The regime's cronyism and oligarchic practices reveal how its supposed commitment to national development primarily benefited politically connected individuals rather than the Filipino people.`,
        ],
      },
      { same: 0, at: "0:56" }, // 5 (repeat of verse 1 ...)
      { same: 1, at: "1:11" }, // 6
      { same: 2, at: "1:26" }, // 7
      { same: 3, at: "1:34" }, // 8
      { same: 4, at: "1:41" }, // 9
      { // 10
        label: "Outro", at: "1:49",
        lines: `Tayo na at magka-isa
Isulong ang pambansang demokrasya!`,
        note: [
          `The song concludes by calling for national unity in advancing national democracy. The future is framed as a political project that should be pursued collectively.`,
          `National democracy was an ideological framework associated with left-wing nationalist movements and organizations during the period. It emphasized national sovereignty, democratic rights, and social transformation. The Marcosian New Society promoted a supposedly democratic and progressive society while dismantling democratic institutions, restricting political participation, and maintaining authoritarian rule. This contradiction demonstrates how the movement's nationalist and democratic image failed, i.e., why call for unity and national democracy if the New Society movement was already successful in bringing unity and national democracy?`,
        ],
      },
    ],
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

document.title = `DATIPHAPON | ${song.title}`;
document.getElementById("cover").src = song.cover;
// vinyl image shares the cover's filename, with 1 -> 2 (e.g. Halina1.png -> Halina2.png)
document.getElementById("record").src = song.cover.replace(/1\.png$/, "2.png");
document.getElementById("cover").alt = `${song.title} album cover`;
document.getElementById("title").textContent = song.title;
document.getElementById("artist").textContent = song.artist;
document.getElementById("released").textContent = song.released || "TBA";
document.getElementById("info").textContent = song.info;

if (song.audio) audio.src = song.audio;

// ---------- synced lyrics + annotations (paragraph by paragraph) ----------
const lyricsContent = document.getElementById("lyricsContent");
const annotationBox = document.getElementById("annotationBox");
const annotationLabel = document.getElementById("annotationLabel");
const annotationText = document.getElementById("annotationText");

function parseTime(str) {
  const m = /^(\d+):(\d{2}(?:\.\d+)?)$/.exec((str || "").trim());
  return m ? Number(m[1]) * 60 + Number(m[2]) : null;
}

// resolve `same: N` repeats and number the annotations
let noteCount = 0;
const sections = [];
(song.sections || []).forEach((s, i) => {
  const base = s.same !== undefined ? song.sections[s.same] : s;
  let no = null;
  if (base.note && base.note.length) {
    no = base === s ? ++noteCount : sections[s.same].no;
  }
  sections.push({
    label: s.label !== undefined ? s.label : base.label,
    lines: base.lines,
    note: base.note || null,
    no,
    from: parseTime(s.at),
    to: parseTime(s.until),
    el: null,
  });
});

lyricsContent.innerHTML = "";
if (!sections.length) {
  lyricsContent.textContent = "Lyrics are not available yet.";
} else {
  if (sections.some((s) => s.from !== null)) lyricsContent.classList.add("has-sync");
  sections.forEach((sec) => {
    const block = document.createElement("div");
    block.className = "lyric-block";
    if (sec.label) {
      const lab = document.createElement("div");
      lab.className = "lyric-label";
      lab.textContent = sec.label.toUpperCase();
      block.appendChild(lab);
    }
    const txt = document.createElement("div");
    txt.className = "lyric-text";
    txt.textContent = sec.lines;
    block.appendChild(txt);

    if (sec.from !== null) {
      block.classList.add("is-synced");
      block.title = "Jump to this part";
      block.addEventListener("click", () => {
        if (!song.audio) return;
        audio.currentTime = sec.from;
        updateSync(sec.from, true);
      });
    }
    sec.el = block;
    lyricsContent.appendChild(block);
  });
}

let activeIdx = -1;

function showAnnotation(sec) {
  if (!sec || !sec.note) {
    annotationBox.hidden = true;
    return;
  }
  annotationLabel.textContent = "ANNOTATION " + String(sec.no).padStart(2, "0");
  annotationText.innerHTML = "";
  sec.note.forEach((para) => {
    const p = document.createElement("p");
    p.textContent = para;
    annotationText.appendChild(p);
  });
  annotationBox.scrollTop = 0;
  annotationBox.hidden = false;
}

function updateSync(t, force = false) {
  // active = the timed paragraph with the latest start time that has passed
  let idx = -1;
  let best = -1;
  sections.forEach((s, i) => {
    if (s.from !== null && s.from <= t && s.from >= best && !(s.to !== null && t >= s.to)) {
      idx = i;
      best = s.from;
    }
  });
  if (idx === activeIdx && !force) return;

  if (activeIdx >= 0) sections[activeIdx].el.classList.remove("is-active");
  activeIdx = idx;

  if (idx >= 0) {
    const el = sections[idx].el;
    el.classList.add("is-active");
    if (!lyricsPanel.hidden) {
      const top =
        el.getBoundingClientRect().top -
        lyricsContent.getBoundingClientRect().top +
        lyricsContent.scrollTop;
      lyricsContent.scrollTo({ top: top - 8, behavior: "smooth" });
    }
  }
  showAnnotation(idx >= 0 ? sections[idx] : null);
}

audio.addEventListener("timeupdate", () => updateSync(audio.currentTime));
audio.addEventListener("seeked", () => updateSync(audio.currentTime));

// ---------- play / pause ----------
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

// ---------- lyrics panel ----------
const lyricsBtn = document.getElementById("lyricsBtn");
const lyricsPanel = document.getElementById("lyricsPanel");
const playerLayout = document.getElementById("playerLayout");

lyricsBtn.addEventListener("click", () => {
  const open = lyricsPanel.hidden;
  lyricsPanel.hidden = !open;
  playerLayout.classList.toggle("show-lyrics", open);
  lyricsBtn.setAttribute("aria-expanded", String(open));
  if (open) updateSync(audio.currentTime, true);
});