/* =====================================================================
   ZONE DE CONFIGURATION : tout ce que tu veux changer est ICI.
   Images : remplace simplement les fichiers dans src/ (même nom),
   ou change les chemins ci-dessous. Si un fichier manque, un placeholder s'affiche.
   ===================================================================== */
const portfolioConfig = {
  // TODO: identité
  name: "Edouard LE LAY",
  short: "Edouard",
  lastUpdated: "September 2026",
  status: "ONLINE",                                 // compteur fictif
  avatar: "src/images/tete.JPG",       // <- remplace ce fichier par ta photo
  welcome: "Bienvenue sur mon Portfolio!",
  // TODO: Remplacer par ma vraie présentation
  description: "Je suis étudiant en BUT Informatique à l'IUT de Lannion et je m'intéresse particulièrement au développement logiciel et à la programmation.",
  about: [
    "Je suis actuellement étudiant en BUT Informatique et je développe mes compétences dans différents domaines à travers mes projet pro ou perso.",
    "Ici c'est mon portfolio, je me suis inspiré des sites des années 2000 et les vieilles version de Wondows (xp, vista, 7)"
  ],
  fun: ["Guitariste à ses heures perdues", "J'aime tout les style de musiques (certains plus que d'autres)", "Pro player Sea Of Thieves (Allégance 100 Serviteurs de la Flamme)","Aesthetic Futiger Aero on top"],
  // TODO: liens
  nofun:["Ce site a été fait par IA (et remodeler à mes soins faut pas abuser) parce que je suis trop NULLL en design et en web en general..."],
  email: "lelayedouard@gmail.com",
  github: "https://github.com/LELAYEdouard",
  linkedin: "https://linkedin.com/in/edouard-le-lay-89ab73349",
  // Nav : [libellé, fichier, clé de page]. Ajoute une page = ajoute une ligne + un fichier HTML.
  nav: [["Accueil","index.html","index"],["À propos","about.html","about"],["Formation","formation.html","formation"],
        ["Compétences","skills.html","skills"],["Projets","projects.html","projects"],["Contact","contact.html","contact"]],
  currently: { working: "Un projet perso en JavaScript (TODO)", learning: "Les bases de données avancées (TODO)", listening: "Une chanson (TODO) - Artiste" },
  updates: [["2026-09","Mise en ligne de la version 1.0 !"],["2026-09","Ajout de la page Projets"],["2026-08","Site under construction..."]],
  // Liens de la barre latérale : [texte, url]
  links: [["Mon GitHub","https://github.com/LELAYEdouard"],["Mon inspiration","https://frutigeraeroarchive.org/"],["Mon CV","src/images/CV_Edouard_LE_LAY.pdf","CV_Edouard_LE_LAY.pdf"]],
  // Badges 88x31 : mets src:"src/badges/mon-badge.gif" (+ href). Sans src, un badge CSS s'affiche.
  badges: [{href:"https://frutigeraeroarchive.org/",src:"https://frutigeraeroarchive.org/images/buttons/frutigeraeroarchive_button.png",label:"Frutiger Aero Archive"},{href:"https://marshdotcom.neocities.org/",src:"https://frutigeraeroarchive.org/images/buttons/marshdotcom.png",label:"marshdotcom"},{href:"",src:"https://yesterhost.neocities.org/archive/buttons/button145.png",label:"Logo Wii"},{href:"",src:"https://yesterhost.neocities.org/archive/buttons/button316.png",label:"Ubuntu"},{href:"",src:"https://anlucas.neocities.org/263gggk.gif",label:"Internet FREE"}],
  // Décorations GIF/PNG libres dans le ciel : {src:"src/gifs/cloud.gif", style:"top:20%;left:5%;width:80px"}
  decorations: [],
  // Compétences : pas de pourcentages, juste des badges.
  skills: { "Langages":["C","Java","Python"], "Web":["HTML","CSS","JavaScript","Bootstrap"], "Base de Données":["SQL","NoSQL","MongoDB"],"Systeme":["Windows","Linux","Bash","PHP","Docker"],"Gestion de Projet":["GitHub","Teams","Gantt","SCRUM / KANBAN"],"Conception":["Figma","Ergonomie","UML"]},
  // Timeline formation (TODO: remplacer par tes vraies infos)
  timeline: [
    {when:"2026 - 2027 · Semestres 5-6", title:"BUT Informatique - IUT de Lannion - Parcours C", text:"Gestion et l’exploitation des données: approfondissement des bases de données, des systèmes, du Big Data, des technologies NoSQL et de l’administration des données."},
    {when:"2025 - 2026 · Semestres 3-4", title:"BUT Informatique - IUT de Lannion - Parcours A", text:"Conception et le développement d’applications: aborde la programmation, les bases de données, le développement web, l’architecture logicielle et les méthodes de test"},
    {when:"2024 - 2025 · Semestres 1-2", title:"BUT Informatique - IUT de Lannion", text:"Formation universitaire en informatique couvrant le développement logiciel, les bases de données, les réseaux, les systèmes, la programmation et la gestion de projets."},
    {when:"2022 - 2024", title:"Collège-Lycée Jean XXIII - Quintin",text:"Spécialités Numérique et Sciences Informatiques / Mathématiques Options Matématiques expertes"}
  ],
  // PROJETS : copie un bloc pour en ajouter un. image/gif = chemins vers src/ (optionnels).
  projects: [
    {name:"Compilateur", year:"2026", desc:"Compilateur de mon langage de programmation", tech:["C","Assembleur x86","Git"],
     image:"src/images/LLL.png", gif:"", github:"https://github.com/LELAYEdouard/CompilateurLL", demo:"",
     context:"Projet personnel pour découvrir le bas niveau, langage hautement inspiré du C.", role:"Analyse et géneration d'arbre syntaxique, géneration du code assembleur."},
    {name:"Site Web En K D'Besoin", year:"2026", desc:"Projet informatique réalisé dans le cadre de ma formation.", tech:["HTML","CSS","JavaScript","MYSQL"],
     image:"src/images/stage.png", gif:"", github:"https://github.com/ton-pseudo/projet-1", demo:"http://www.enkdbesoin.fr",
     context:"Stage de 2ème année de BUT Informatique", role:"Synthese de besoins, conception, maquettage, implementation."},
    {name:"Marketplace Alizon", year:"2025 - 2026", desc:"Marketplace fictive permettant la gestion complete d'achat et de vente de produit. De la création de compte à la gestion des stocks", tech:["HTML","SCSS","JavaScript","PHP","Git","MYSQL"],
     image:"", gif:"", github:"https://github.com/ytanneau/SAE3_B21-SoftArmor", demo:"",
     context:"SAÉ du BUT Informatique", role:"Conception, maquettage, développement, AGILE."},
    {name:"",year:"",desc:"",image:"",gif:"",github:"",tech:[],context:"",role:"",demo:""}
  ]
};

/* =====================================================================
   MOTEUR : normalement, pas besoin d'y toucher.
   ===================================================================== */
const C = portfolioConfig, $ = s => document.querySelector(s);
const img = (src, alt, x = "") => src ? `<img src="${src}" alt="${alt}" onerror="this.remove()" ${x}>` : "";
const win = (t, b, c = "") => `<section class="win ${c}"><h2><span class="t">${t}</span>
<button class="wb" data-a="min" aria-label="Réduire ${t}">–</button><button class="wb x" data-a="closed" aria-label="Fermer ${t}">×</button></h2>
<div class="win-body">${b}</div></section>`;
const tags = a => `<p>${a.map(t => `<span class="tag">${t}</span>`).join(" ")}</p>`;
const links = a => `<ul>${a.map(([t, u, cv]) => cv ? `<li><a href="${u}" download="${cv}">${t}</a></li>` : `<li><a  href="${u}">${t}</a></li>`).join("")}</ul>`;
const badges = () => C.badges.map(b => b.src ? `<a  href="${b.href || "#"}"><img src="${b.src}" width="88" height="31" alt="${b.label}"></a>` : `<span class="b88">${b.label}</span>`).join("");
const project = p => win(p.name + ".exe",
  `<div class="shot">${img(p.image, "Capture du projet " + p.name)}${img(p.gif, "", 'class="g"')}</div>
   <p><b>${p.year}</b> - ${p.desc}</p><p><b>Contexte :</b> ${p.context}<br><b>Ce que j'ai fait :</b> ${p.role}</p>${tags(p.tech)}
   <p>${p.demo ? `<a class="btn" target="_blank" rel="noopener noreferrer" href="${p.demo}">VIEW PROJECT</a> ` : ""}<a target="_blank" rel="noopener noreferrer" class="btn green" href="${p.github}">GITHUB</a></p>`);
const chips = a => `<div class="chips">${a.map(s => `<span class="chip">${s}</span>`).join(" ")}</div>`;
const digits = String(C.visitors).padStart(6, "0").split("").map(d => `<span>${d}</span>`).join("");

const pages = {
  index: () => `<div class="home"><div>
    ${win("About me", `<div class="avatar">${img(C.avatar, "Avatar de " + C.short)}</div><p class="c"><b>${C.name}</b><br>BUT Informatique - IUT de Lannion</p><p class="c"><a class="btn" href="about.html">En savoir plus</a></p>`)}
    ${win("Links", links(C.links))}
    ${win("Badge wall", `<div class="badges">${badges()}</div>`)}
  </div><div>
    ${win("Welcome.txt", `<p class="hello">Hello! I'm ${C.short}</p><p><b>${C.welcome}</b></p><p>${C.description}</p>
      <p><a class="btn" href="projects.html">Mes projets</a> <a class="btn green" href="contact.html">Me contacter</a></p>`)}
    ${win("My projects", C.projects.map(p => `<p><b>${p.name}</b> (${p.year}) - ${p.desc}<br>${tags(p.tech)}</p>`).join("") + `<a class="btn" href="projects.html">Tout voir</a>`)}
  </div><div>
    ${win("Status", `<p><span class="dot"></span> <b>${C.status}</b></p><p>Last updated: ${C.lastUpdated}</p>`)}
    ${win("Latest updates", `<ul>${C.updates.map(([d, t]) => `<li><code>${d}</code> ${t}</li>`).join("")}</ul>`)}
    ${win("Now playing", `<div id="player"><p>🎧 ${C.currently.listening}</p><button class="btn" id="play" aria-pressed="false">▶ Play</button> <span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>
      <p><small>Lecteur visuel (pas de son). TODO: ajouter un &lt;audio&gt; ici.</small></p></div>`)}
  </div></div>`,
  about: () => `<div class="wrap">${win("About me.txt", `<div class="avatar">${img(C.avatar, "Avatar de " + C.short)}</div>${C.about.map(t => `<p>${t}</p>`).join("")}`)}
    ${win("Fun stuff", `<ul>${C.fun.map(f => `<li>${f}</li>`).join("")}</ul>`)}
    ${win("Not Fun stuff :(", `<ul>${C.nofun.map(f => `<li>${f}</li>`).join("")}</ul>`)}
    ${win("Updates / Changelog", `<ul>${C.updates.map(([d, t]) => `<li><code>${d}</code> ${t}</li>`).join("")}</ul>`)}</div>`,
  formation: () => `<div class="wrap"><div class="tl">${C.timeline.map(t => win(t.title, `<div class="when">${t.when}</div><p>${t.text}</p>`)).join("")}</div></div>`,
  skills: () => `<div class="wrap">${Object.entries(C.skills).map(([k, v]) => win(k, chips(v))).join("")}
    ${win("Note", `<p>Pas de barres de niveau : je préfère montrer ce que j'ai utilisé dans mes projets.</p>`)}</div>`,
  projects: () => `<div class="wrap"><p class="c"><b>Quelques-uns des projets réalisés pendant ma formation et dans le cadre de mes expérimentations personnelles.</b></p><div class="cards">${C.projects.map(project).join("")}</div></div>`,
  contact: () => `<div class="wrap">${win("Contact.exe", `<ul><li>📧 <a href="mailto:${C.email}">${C.email}</a></li><li>🐙 <a target="_blank" rel="noopener noreferrer" href="${C.github}">GitHub</a></li><li>💼 <a target="_blank" rel="noopener noreferrer" href="${C.linkedin}">LinkedIn</a></li></ul>`)}
    </div>`
};

const page = document.body.dataset.page;
document.body.insertAdjacentHTML("afterbegin", `<header class="top"><h1 class="logo">${C.short}.exe<small>~ the personal homepage of ${C.name} ~</small></h1>
  <nav class="nav" aria-label="Navigation principale">${C.nav.map(([l, h, k]) => `<a class="btn" d href="${h}"${k === page ? ' aria-current="page"' : ""}>${l}</a>`).join("")}</nav></header>`);
$("#app").innerHTML = pages[page]();
$("#app").insertAdjacentHTML("afterend", `<footer class="foot"><div class="marq"><span>★ Welcome to ${C.short}.exe ★ Best viewed with any browser at 1024x768 ★ Sign my guestbook (soon!) ★</span></div>
  <p><span class="b88 uc">UNDER CONSTRUCTION</span> Last updated: ${C.lastUpdated}</p></footer>
  <div id="dock"><a class="btn green" href="#" aria-label="Retour en haut">▲ Top</a><div class="wins"></div><time id="clock"></time></div>`);

/* Décor : nuages, bulles, poissons + tes GIFs (config.decorations) */
const d = document.createElement("div"); d.id = "deco"; d.setAttribute("aria-hidden", "true");
d.innerHTML = [8, 22, 38].map((t, i) => `<div class="cloud" style="top:${t}%;animation-delay:-${i * 23}s"></div>`).join("")
  + Array.from({length: 14}, () => { const s = 10 + Math.random() * 34; return `<i class="bubble" style="left:${Math.random() * 100}%;width:${s}px;height:${s}px;animation-duration:${9 + Math.random() * 12}s;animation-delay:-${Math.random() * 12}s"></i>`; }).join("")
  + `<span class="fish" style="top:72%">🐠</span><span class="fish" style="top:58%;animation-delay:-13s">🐟</span>`
  + C.decorations.map(x => `<div class="decoration" style="${x.style || ""}">${img(x.src, x.alt || "")}</div>`).join("");
document.body.prepend(d);

/* Fenêtres : réduire / fermer / déplacer + barre des tâches */
let z = 10;
document.querySelectorAll(".win").forEach(w => {
  const b = document.createElement("button"), h = w.querySelector("h2");
  b.className = "btn"; b.textContent = w.querySelector(".t").textContent; $("#dock .wins").append(b);
  const sync = () => b.setAttribute("aria-pressed", !w.classList.contains("closed") && !w.classList.contains("min"));
  sync();
  w.addEventListener("click", e => { const a = e.target.dataset.a; if (a) { w.classList.toggle(a === "min" ? "min" : "closed"); sync(); } });
  b.onclick = () => { w.classList.contains("closed") ? w.classList.remove("closed", "min") : w.classList.toggle("min"); sync(); };
  let sx, sy, ox = 0, oy = 0;
  h.addEventListener("pointerdown", e => {
    if (e.target.closest("button") || innerWidth < 900) return;
    sx = e.clientX - ox; sy = e.clientY - oy; w.style.zIndex = ++z; h.setPointerCapture(e.pointerId);
    h.onpointermove = v => { ox = v.clientX - sx; oy = v.clientY - sy; w.style.transform = `translate(${ox}px,${oy}px)`; };
    h.onpointerup = () => { h.onpointermove = null; };
  });
});

/* Petits détails : lecteur visuel, horloge, formulaire */
const pl = $("#player");
if (pl) $("#play").onclick = e => { const on = pl.classList.toggle("playing"); e.target.setAttribute("aria-pressed", on); e.target.textContent = on ? "⏸ Pause" : "▶ Play"; };
const tick = () => $("#clock").textContent = new Date().toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"}); tick(); setInterval(tick, 30000);
const cf = $("#cf"); if (cf) cf.onsubmit = e => { e.preventDefault(); $("#cfs").textContent = "Démo visuelle : aucun message envoyé (backend requis). Écris-moi par email !"; };
