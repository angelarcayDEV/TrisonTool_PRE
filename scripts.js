// Acción para el botón de formatear el pendrive
document.getElementById("formatButton").addEventListener("click", function () {
    fetch('/format-usb', { method: 'POST' })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => alert('Error al formatear: ' + error));
});

// Acción para el botón de descarga de MKD 2.9.1 OS
document.getElementById("downloadMKD").addEventListener("click", function () {
    window.location.href = '/download-mkd';
});

// Acción para el botón de descarga de Interactive Screen 1.7
document.getElementById("downloadInteractive").addEventListener("click", function () {
    window.location.href = '/download-interactive';
});

// Traducciones para idiomas
const translations = {
    en: {
        title: "USB TRISON TOOL",
        manageUSB: "MANAGE USB STICK",
        downloadMKD: "DOWNLOAD MKD 2.9.1",
        downloadInteractive: "DOWNLOAD Interactive Screen 1.7",
        downloadLinux: "DOWNLOAD Linux IOP 1.1"
    },
    es: {
        title: "HERRAMIENTA USB TRISON",
        manageUSB: "GESTIONAR PENDRIVE",
        downloadMKD: "DESCARGAR MKD 2.9.1",
        downloadInteractive: "DESCARGAR Pantalla Interactiva 1.7",
        downloadLinux: "DESCARGAR Linux IOP 1.1"
    },
    fr: {
        title: "OUTIL USB TRISON",
        manageUSB: "GÉRER LA CLÉ USB",
        downloadMKD: "TÉLÉCHARGER MKD 2.9.1",
        downloadInteractive: "TÉLÉCHARGER Écran Interactif 1.7",
        downloadLinux: "TÉLÉCHARGER Linux IOP 1.1"
    },
    de: {
        title: "USB TRISON WERKZEUG",
        manageUSB: "USB-STICK VERWALTEN",
        downloadMKD: "MKD 2.9.1 HERUNTERLADEN",
        downloadInteractive: "Interactive Screen 1.7 HERUNTERLADEN",
        downloadLinux: "Linux IOP 1.1 HERUNTERLADEN"
    }
};

// Cambiar idioma
const changeLanguage = (lang) => {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.getElementById("title").textContent = translations[lang].title;
};

// Listener para cambiar idioma
document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = e.target.closest("a").getAttribute("data-lang");
        changeLanguage(lang);
    });
});

// Idioma predeterminado
changeLanguage("en");
