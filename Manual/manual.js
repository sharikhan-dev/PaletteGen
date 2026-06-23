const primaryHex = document.getElementById("primaryHex");
const accentHex = document.getElementById("accentHex");

const primaryPicker = document.getElementById("primaryPicker");
const accentPicker = document.getElementById("accentPicker");

const generateBtn = document.getElementById("manualGenerateBtn");

const paletteBoxes =
document.querySelectorAll(".palette-color");

/* =========================
   Sync Picker & HEX
========================= */

primaryPicker.addEventListener("input", () => {
    primaryHex.value = primaryPicker.value.toUpperCase();
});

accentPicker.addEventListener("input", () => {
    accentHex.value = accentPicker.value.toUpperCase();
});

primaryHex.addEventListener("input", () => {
    if (/^#[0-9A-Fa-f]{6}$/.test(primaryHex.value)) {
        primaryPicker.value = primaryHex.value;
    }
});

accentHex.addEventListener("input", () => {
    if (/^#[0-9A-Fa-f]{6}$/.test(accentHex.value)) {
        accentPicker.value = accentHex.value;
    }
});

/* =========================
   HEX → RGB
========================= */

function hexToRgb(hex) {

    hex = hex.replace("#", "");

    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };

}

/* =========================
   RGB → HEX
========================= */

function rgbToHex(r, g, b) {

    return (
        "#" +
        [r, g, b]
            .map(x => {
                const hex =
                    Math.max(0, Math.min(255, Math.round(x)))
                    .toString(16);

                return hex.length === 1
                    ? "0" + hex
                    : hex;
            })
            .join("")
    ).toUpperCase();

}

/* =========================
   Color Blend
========================= */

function blendColors(color1, color2, factor) {

    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);

    const r =
        c1.r + factor * (c2.r - c1.r);

    const g =
        c1.g + factor * (c2.g - c1.g);

    const b =
        c1.b + factor * (c2.b - c1.b);

    return rgbToHex(r, g, b);

}

/* =========================
   Lighten
========================= */

function lighten(hex, percent) {

    const rgb = hexToRgb(hex);

    return rgbToHex(
        rgb.r + (255 - rgb.r) * percent / 100,
        rgb.g + (255 - rgb.g) * percent / 100,
        rgb.b + (255 - rgb.b) * percent / 100
    );

}

/* =========================
   Generate Palette
========================= */

generateBtn.addEventListener("click", () => {

    const primary =
        primaryHex.value.trim();

    const accent =
        accentHex.value.trim();

    if (
        !/^#[0-9A-Fa-f]{6}$/.test(primary) ||
        !/^#[0-9A-Fa-f]{6}$/.test(accent)
    ) {

        alert("Please enter valid HEX colors");
        return;

    }

    const palette = [

        primary.toUpperCase(),

        blendColors(primary, accent, 0.25),

        blendColors(primary, accent, 0.50),

        blendColors(primary, accent, 0.75),

        accent.toUpperCase(),

        lighten(accent, 30)

    ];

    paletteBoxes.forEach((box, index) => {

        box.style.background =
            palette[index];

        box.innerHTML =
            `<span>${palette[index]}</span>`;

        box.dataset.color =
            palette[index];

    });

});

/* =========================
   Copy Color
========================= */

paletteBoxes.forEach(box => {

    box.addEventListener("click", () => {

        const color =
            box.dataset.color;

        if (!color) return;

        navigator.clipboard
            .writeText(color);

        alert(color + " copied!");

    });

});
function closeCard() {
    document.getElementById("welcomeCard").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

window.addEventListener("load", () => {

    const card = document.getElementById("welcomeCard");
    const overlay = document.getElementById("overlay");

    if (!card || !overlay) return;

    card.style.display = "none";
    overlay.style.display = "none";

    setTimeout(() => {
        card.style.display = "block";
        overlay.style.display = "block";
    }, 3000);

});