const generateBtn = document.getElementById("generateBtn");
const result = document.querySelector(".result");

const paletteData = [
{
    name:"Royal Aurora",
    colors:["#8B5CF6","#A78BFA","#C4B5FD","#DDD6FE","#4C1D95"]
},
{
    name:"Ocean Pulse",
    colors:["#2563EB","#3B82F6","#60A5FA","#DBEAFE","#1E3A8A"]
},
{
    name:"Nature Flow",
    colors:["#16A34A","#22C55E","#4ADE80","#DCFCE7","#14532D"]
},
{
    name:"Sunset Glow",
    colors:["#F97316","#FB923C","#FDBA74","#FFEDD5","#9A3412"]
},
{
    name:"Rose Dream",
    colors:["#E11D48","#F43F5E","#FB7185","#FFE4E6","#881337"]
},
{
    name:"Cyber Neon",
    colors:["#06B6D4","#22D3EE","#67E8F9","#CFFAFE","#164E63"]
},
{
    name:"Golden Hour",
    colors:["#EAB308","#FACC15","#FDE047","#FEF9C3","#854D0E"]
},
{
    name:"Forest Mist",
    colors:["#166534","#15803D","#22C55E","#DCFCE7","#052E16"]
},
{
    name:"Midnight Sky",
    colors:["#0F172A","#1E293B","#334155","#CBD5E1","#020617"]
},
{
    name:"Lavender Bloom",
    colors:["#9333EA","#A855F7","#C084FC","#F3E8FF","#581C87"]
},
{
    name:"Coral Reef",
    colors:["#F43F5E","#FB7185","#FDA4AF","#FFE4E6","#9F1239"]
},
{
    name:"Arctic Ice",
    colors:["#0284C7","#38BDF8","#7DD3FC","#E0F2FE","#082F49"]
},
{
    name:"Emerald Shine",
    colors:["#10B981","#34D399","#6EE7B7","#D1FAE5","#064E3B"]
},
{
    name:"Desert Sand",
    colors:["#D97706","#F59E0B","#FCD34D","#FEF3C7","#78350F"]
},
{
    name:"Cherry Blossom",
    colors:["#EC4899","#F472B6","#F9A8D4","#FCE7F3","#831843"]
},
{
    name:"Electric Violet",
    colors:["#7C3AED","#8B5CF6","#A78BFA","#EDE9FE","#4C1D95"]
},
{
    name:"Deep Space",
    colors:["#111827","#1F2937","#374151","#D1D5DB","#030712"]
},
{
    name:"Mint Breeze",
    colors:["#14B8A6","#2DD4BF","#5EEAD4","#CCFBF1","#134E4A"]
},
{
    name:"Ruby Fire",
    colors:["#DC2626","#EF4444","#F87171","#FEE2E2","#7F1D1D"]
},
{
    name:"Peach Sunrise",
    colors:["#FB7185","#FDA4AF","#FBCFE8","#FFF1F2","#BE123C"]
}
];

let lastPalette = -1;

generateBtn.addEventListener("click", () => {

    result.classList.add("show");

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * paletteData.length);
    } while (randomIndex === lastPalette);

    lastPalette = randomIndex;

    const selected = paletteData[randomIndex];

    document.getElementById("paletteName").textContent =
    selected.name;

    const cards = document.querySelectorAll(".color-card");

    selected.colors.forEach((color, index) => {

        cards[index]
        .querySelector(".color-preview")
        .style.background = color;

        cards[index]
        .querySelector("p")
        .textContent = color;

        cards[index]
        .setAttribute("data-color", color);

    });

});

document.getElementById("copyPalette")
.addEventListener("click",()=>{

    const colors = [];

    document.querySelectorAll(".color-card p")
    .forEach(item=>{

        colors.push(item.textContent);

    });

    navigator.clipboard.writeText(
        colors.join(", ")
    );

    alert("Palette Copied!");

});
