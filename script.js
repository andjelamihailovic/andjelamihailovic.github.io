const KONTAKT_MEJL = "a56rtist@gmail.com";

// Tekstovi za pojedine kategorije (ovde kasnije možeš upisati tekstove iz 1.txt - 4.txt)
const OPISI_KATEGORIJA = {
  "Moji počeci": "",
  "Portreti kućnih ljubimaca": "",
  "Portreti po želji": "",
  "Crno-beli portreti": ""
};

const KATEGORIJE = [
  "Svi radovi",
  "Moji počeci",
  "Portreti kućnih ljubimaca",
  "Portreti po želji",
  "Crno-beli portreti"
];

const SVI_RADOVI = [
  // Moji počeci
  { kategorija: "Moji počeci", fajl: "Dodir svetlosti-Ulje na platnu, 20 × 20 cm, 2024.jpeg" },
  { kategorija: "Moji počeci", fajl: "Plutajuća tišina-Ulje na platnu, 30 × 40 cm, 2025.jpeg" },
  { kategorija: "Moji počeci", fajl: "Pogled večnosti-Ulje na platnu, 30 × 40 cm, 2024.jpeg" },

  // Portreti kućnih ljubimaca
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Čuvar-Ulje na platnu, 20 × 30 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Gospodin-Ulje na platnu, 30 × 40 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Helga-Ulje na papiru, format A3, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Iskra-Ulje na platnu, 20 × 25 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Otisak-Ulje na platnu, 50 × 40 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Pogled-Ulje na platnu, 30 × 40 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Prodornost-Ulje na papiru, format A5, 2025.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Saputnik-Ulje na platnu, 30 × 45 cm, 2025.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Tišina kopita-Ulje na platnu, 50 × 40 cm, 2025.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Trag-Ulje na platnu, 50 × 40 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "U srcu-Ulje na platnu, 20 × 20 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Uzajamnost-Ulje na platnu, 30 × 30 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Zala-Ulje na papiru, format A4, 2026.jpeg" },

  // Portreti po želji
  { kategorija: "Portreti po želji", fajl: "Bezuslovno-Ulje na platnu, 20 × 20 cm, 2026.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Boje leta-Ulje na platnu, 50 × 40 cm, 2026.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Koreni-Ulje na platnu, 35 × 45 cm, 2026.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Neraskidivo-Ulje na platnu, 20 × 20 cm, 2025.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Odraz-Ulje na platnu, 20 × 20 cm, 2026.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Trag vremena-Ulje na platnu, 30 × 40 cm, 2026.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Zajedno-Ulje na platnu, 30 × 40 cm, 2025.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Zauvek-Ulje na platnu, 20 × 30 cm, 2025.jpeg" },

  // Crno-beli portreti
  { kategorija: "Crno-beli portreti", fajl: "Andrew-Grafitna olovka, format A4, 2024.jpeg" },
  { kategorija: "Crno-beli portreti", fajl: "Autoportret-Grafitna olovka, format A5, 2025.jpeg" },
  { kategorija: "Crno-beli portreti", fajl: "Ophélie-Ugalj na papiru, format A5, 2025.jpeg" },
  { kategorija: "Crno-beli portreti", fajl: "Pokret-Grafitna olovka, format A4, 2024.jpeg" },
  { kategorija: "Crno-beli portreti", fajl: "Susret-Grafitna olovka, 25 × 35 cm, 2026.jpeg" },
  { kategorija: "Crno-beli portreti", fajl: "Toplina-Ugalj na papiru, format A4, 2024.jpeg" }
];

const SLIDESHOW_RADOVI = [
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Čuvar-Ulje na platnu, 20 × 30 cm, 2026.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Tišina kopita-Ulje na platnu, 50 × 40 cm, 2025.jpeg" },
  { kategorija: "Portreti kućnih ljubimaca", fajl: "Prodornost-Ulje na papiru, format A5, 2025.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Koreni-Ulje na platnu, 35 × 45 cm, 2026.jpeg" },
  { kategorija: "Portreti po želji", fajl: "Boje leta-Ulje na platnu, 50 × 40 cm, 2026.jpeg" },
  { kategorija: "Crno-beli portreti", fajl: "Andrew-Grafitna olovka, format A4, 2024.jpeg" },
  { kategorija: "Moji počeci", fajl: "Pogled večnosti-Ulje na platnu, 30 × 40 cm, 2024.jpeg" }
];

function parsirajRad(rad) {
  const bezEkstenzije = rad.fajl.replace(/\.[^.]+$/, "");
  const crtica = bezEkstenzije.indexOf("-");
  const naziv = crtica !== -1 ? bezEkstenzije.slice(0, crtica).trim() : bezEkstenzije;
  const detalji = crtica !== -1 ? bezEkstenzije.slice(crtica + 1).trim() : "";
  const putanja = encodeURI(`images/${rad.kategorija}/${rad.fajl}`);
  return { ...rad, naziv, detalji, putanja };
}

const obradjeniRadovi = SVI_RADOVI.map(parsirajRad);
let aktivnaKategorija = "Svi radovi";
let trenutniLightboxIndeks = 0;

// MOBILNI MENI
const meniDugme = document.querySelector("[data-meni-dugme]");
const navigacija = document.querySelector("[data-navigacija]");

if (meniDugme && navigacija) {
  meniDugme.addEventListener("click", () => {
    const otvoreno = navigacija.classList.toggle("otvorena");
    meniDugme.setAttribute("aria-expanded", String(otvoreno));
  });

  navigacija.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigacija.classList.remove("otvorena");
      meniDugme.setAttribute("aria-expanded", "false");
    });
  });
}

// LOGO FALLBACK
const logoOkvir = document.querySelector("[data-logo-okvir]");
const logoSlika = logoOkvir?.querySelector("img");
if (logoSlika) {
  logoSlika.addEventListener("error", () => {
    logoOkvir.classList.add("skriven");
  });
}

// SLIDESHOW U HERO SEKCIJI
const scena = document.querySelector("[data-slideshow-scena]");
const tockiceKontejner = document.querySelector("[data-slideshow-tockice]");
const dugmePrethodna = document.querySelector("[data-slideshow-prethodna]");
const dugmeSledeca = document.querySelector("[data-slideshow-sledeca]");

if (scena && tockiceKontejner) {
  const slajdoviPodaci = SLIDESHOW_RADOVI.map(parsirajRad);
  let aktivniSlajd = 0;
  let tajmer = null;

  slajdoviPodaci.forEach((rad, indeks) => {
    const slajd = document.createElement("div");
    slajd.className = indeks === 0 ? "slajd aktivan" : "slajd";

    const img = document.createElement("img");
    img.src = rad.putanja;
    img.alt = `${rad.naziv} — ${rad.detalji}`;
    if (indeks > 0) img.loading = "lazy";

    const natpis = document.createElement("div");
    natpis.className = "slajd-natpis";
    natpis.innerHTML = `<strong>${rad.naziv}</strong> <span>${rad.detalji}</span>`;

    slajd.append(img, natpis);
    scena.appendChild(slajd);

    const tockica = document.createElement("button");
    tockica.type = "button";
    tockica.className = indeks === 0 ? "tockica aktivna" : "tockica";
    tockica.setAttribute("aria-label", `Slika ${indeks + 1}: ${rad.naziv}`);
    tockica.addEventListener("click", () => {
      prikaziSlajd(indeks);
      pokreniAutomatski();
    });
    tockiceKontejner.appendChild(tockica);
  });

  const sviSlajdovi = scena.querySelectorAll(".slajd");
  const sveTockice = tockiceKontejner.querySelectorAll(".tockica");

  function prikaziSlajd(noviIndeks) {
    aktivniSlajd = (noviIndeks + sviSlajdovi.length) % sviSlajdovi.length;
    sviSlajdovi.forEach((s, i) => s.classList.toggle("aktivan", i === aktivniSlajd));
    sveTockice.forEach((t, i) => t.classList.toggle("aktivna", i === aktivniSlajd));
  }

  function pokreniAutomatski() {
    clearInterval(tajmer);
    tajmer = setInterval(() => prikaziSlajd(aktivniSlajd + 1), 4500);
  }

  dugmePrethodna?.addEventListener("click", () => {
    prikaziSlajd(aktivniSlajd - 1);
    pokreniAutomatski();
  });

  dugmeSledeca?.addEventListener("click", () => {
    prikaziSlajd(aktivniSlajd + 1);
    pokreniAutomatski();
  });

  pokreniAutomatski();
}

// GALERIJA I FILTERI
const taboviKontejner = document.querySelector("[data-tabovi]");
const opisKategorijeEl = document.querySelector("[data-opis-kategorije]");
const galerijaMreza = document.querySelector("[data-galerija]");

function trenutnoVidljivi() {
  if (aktivnaKategorija === "Svi radovi") return obradjeniRadovi;
  return obradjeniRadovi.filter((r) => r.kategorija === aktivnaKategorija);
}

function osveziTabove() {
  if (!taboviKontejner) return;
  taboviKontejner.innerHTML = "";
  KATEGORIJE.forEach((kat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = kat === aktivnaKategorija ? "tab-dugme aktivan" : "tab-dugme";
    btn.textContent = kat;
    btn.addEventListener("click", () => {
      aktivnaKategorija = kat;
      osveziTabove();
      prikaziGaleriju();
    });
    taboviKontejner.appendChild(btn);
  });
}

function prikaziGaleriju() {
  if (!galerijaMreza) return;

  const opis = OPISI_KATEGORIJA[aktivnaKategorija];
  if (opisKategorijeEl) {
    if (aktivnaKategorija !== "Svi radovi" && opis && opis.trim() !== "") {
      opisKategorijeEl.textContent = opis;
      opisKategorijeEl.hidden = false;
    } else {
      opisKategorijeEl.hidden = true;
    }
  }

  galerijaMreza.innerHTML = "";
  const vidljivi = trenutnoVidljivi();

  vidljivi.forEach((rad, indeks) => {
    const kartica = document.createElement("figure");
    kartica.className = "rad-kartica";

    const okvir = document.createElement("div");
    okvir.className = "rad-okvir";

    const img = document.createElement("img");
    img.src = rad.putanja;
    img.alt = `${rad.naziv} — ${rad.detalji}`;
    img.loading = "lazy";

    img.addEventListener("error", () => {
      okvir.innerHTML = `<div class="rad-placeholder">Slika u pripremi:<br>${rad.naziv}</div>`;
    });

    okvir.appendChild(img);

    const potpis = document.createElement("figcaption");
    potpis.className = "rad-potpis";
    potpis.innerHTML = `
      <p class="rad-naziv">${rad.naziv}</p>
      <p class="rad-detalji">${rad.detalji}</p>
    `;

    kartica.append(okvir, potpis);
    kartica.addEventListener("click", () => otvoriLightbox(indeks));
    galerijaMreza.appendChild(kartica);
  });
}

osveziTabove();
prikaziGaleriju();

// LIGHTBOX
const lightbox = document.querySelector("[data-lightbox]");
const lbSlika = document.querySelector("[data-lightbox-slika]");
const lbNapomena = document.querySelector("[data-lightbox-napomena]");
const lbNaziv = document.querySelector("[data-lightbox-naziv]");
const lbDetalji = document.querySelector("[data-lightbox-detalji]");
const lbBrojac = document.querySelector("[data-lightbox-brojac]");

function osveziLightbox() {
  const lista = trenutnoVidljivi();
  if (!lista.length || !lightbox) return;
  trenutniLightboxIndeks = (trenutniLightboxIndeks + lista.length) % lista.length;
  const rad = lista[trenutniLightboxIndeks];

  if (lbNapomena) lbNapomena.hidden = true;
  if (lbSlika) {
    lbSlika.hidden = false;
    lbSlika.src = rad.putanja;
    lbSlika.alt = `${rad.naziv} — ${rad.detalji}`;
  }
  if (lbNaziv) lbNaziv.textContent = rad.naziv;
  if (lbDetalji) lbDetalji.textContent = rad.detalji;
  if (lbBrojac) lbBrojac.textContent = `${trenutniLightboxIndeks + 1} / ${lista.length}`;
}

if (lbSlika) {
  lbSlika.addEventListener("error", () => {
    lbSlika.hidden = true;
    if (lbNapomena) lbNapomena.hidden = false;
  });
}

function otvoriLightbox(indeks) {
  trenutniLightboxIndeks = indeks;
  osveziLightbox();
  lightbox?.showModal();
}

document.querySelector("[data-zatvori]")?.addEventListener("click", () => lightbox?.close());
document.querySelector("[data-prethodni]")?.addEventListener("click", () => {
  trenutniLightboxIndeks -= 1;
  osveziLightbox();
});
document.querySelector("[data-sledeci]")?.addEventListener("click", () => {
  trenutniLightboxIndeks += 1;
  osveziLightbox();
});

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox?.open) return;
  if (e.key === "ArrowLeft") {
    trenutniLightboxIndeks -= 1;
    osveziLightbox();
  } else if (e.key === "ArrowRight") {
    trenutniLightboxIndeks += 1;
    osveziLightbox();
  }
});

// MODAL PRIVATNOSTI
const modalPrivatnost = document.querySelector("[data-privatnost]");
document.querySelector("[data-otvori-privatnost]")?.addEventListener("click", () => {
  modalPrivatnost?.showModal();
});
document.querySelectorAll("[data-zatvori-privatnost]").forEach((btn) => {
  btn.addEventListener("click", () => modalPrivatnost?.close());
});
modalPrivatnost?.addEventListener("click", (e) => {
  if (e.target === modalPrivatnost) modalPrivatnost.close();
});

// KONTAKT FORMA
const forma = document.querySelector("[data-forma]");
const formaPoruka = document.querySelector("[data-forma-poruka]");

if (forma && formaPoruka) {
  forma.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!forma.checkValidity()) {
      formaPoruka.textContent = "Molimo popunite sva obavezna polja ispravno.";
      formaPoruka.hidden = false;
      forma.reportValidity();
      return;
    }

    const ime = forma.ime.value.trim();
    const email = forma.email.value.trim();
    const tehnika = forma.tehnika.value;
    const poruka = forma.poruka.value.trim();

    const naslov = encodeURIComponent(`Upit za portret — ${ime}`);
    const telo = encodeURIComponent(
      `Ime i prezime: ${ime}\nEmail: ${email}\nTehnika: ${tehnika}\n\nPoruka:\n${poruka}`
    );

    formaPoruka.textContent = `Otvaram vaš program za e-poštu kako biste poslali upit na ${KONTAKT_MEJL}.`;
    formaPoruka.hidden = false;

    window.location.href = `mailto:${KONTAKT_MEJL}?subject=${naslov}&body=${telo}`;
  });
}