document
.getElementById("closePage")
.addEventListener("click", () => {

    window.location.href =
    "../index.html";

});



const form = document.getElementById("reportForm");

const emailBtn =
document.querySelector(".email-btn");

const telegramBtn =
document.querySelector(".telegram-btn");

/* =========================
   Form Validation
========================= */

function validateForm() {

    const name =
    form.querySelector('input[type="text"]');

    const email =
    form.querySelector('input[type="email"]');

    const issue =
    form.querySelector("select");

    const subject =
    form.querySelectorAll('input[type="text"]')[1];

    const description =
    form.querySelector("textarea");

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        issue.value === "" ||
        subject.value.trim() === "" ||
        description.value.trim() === ""
    ) {

        alert(
            "Please fill all required fields."
        );

        return false;
    }

    return true;
}

/* =========================
   Email Button
========================= */

emailBtn.addEventListener("click", () => {

    if (!validateForm()) return;

    alert(
        "✅ Report ready to send via Email."
    );

});

/* =========================
   Telegram Button
========================= */

telegramBtn.addEventListener("click", () => {

    if (!validateForm()) return;

    alert(
        "✅ Report ready to send via Telegram."
    );

});

/* =========================
   Prevent Refresh
========================= */

form.addEventListener("submit", (e) => {
    e.preventDefault();
});