// Gentle playful animation on load
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".info-box, .image-wrapper");

  elements.forEach((el, index) => {
    el.animate(
      [
        { transform: "translateY(10px)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 }
      ],
      {
        duration: 600,
        delay: index * 150,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  });
});

const translations = {
  de: {
    description: "<br>Neugierig?<br>Spiele mit uns, bekomme ein Geschenk und hab noch mächtig Spaß dabei!<br>",
    time: "Beginn: 31.12.2025 - 18:30 Uhr",
    location: "Ort: Peter Sigmayr Platz 19, 39030 Mitterolang",
    rules_title: "🐾 Die Regeln",
    rule1: "Bringe ein Geschenk im Wert von unter 10€ mit",
    rule2: "Folge dem Elefanten 🐘",
    rule3: "Hab Spaß (Pflichtregel)",
  },

  it: {
    description: "<br>Curioso?<br>Gioca con noi, ricevi un regalo e divertiti un sacco!<br>",
    time: "Inizio: 31.12.2025 - 18:30",
    location: "Luogo: Piazza Peter Sigmayr, 19, 39030 Valdaora di Mezzo BZ",
    rules_title: "🐾 Le regole",
    rule1: "Porta un regalo del valore inferiore a 10€",
    rule2: "Segui l’elefante 🐘",
    rule3: "Divertiti (regola obbligatoria)",
  },

  en: {
    description: "<br>Curious?<br>Play with us, get a gift, and have loads of fun!<br>",
    time: "Starts on the 31st of December at 6:30 PM",
    location: "Location: Peter Sigmayr Platz 19, 39030 Mitterolang",
    rules_title: "🐾 The Rules",
    rule1: "Bring a gift worth under €10",
    rule2: "Follow the elephant 🐘",
    rule3: "Have fun (mandatory rule)"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll(".language-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.querySelectorAll(".language-switch button").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Default language
const savedLang = localStorage.getItem("lang") || "de";
setLanguage(savedLang);
