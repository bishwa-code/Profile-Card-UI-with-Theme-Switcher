let coloredContainer = document.querySelectorAll(".color-use");
let colors = document.querySelectorAll(".colors");
let changes = document.querySelectorAll(".change");
let btn = document.querySelectorAll(".btn");
let followBtn = document.getElementById("follow-btn");
let contactBtn = document.getElementById("contact-btn");

colors.forEach((color) => {
    color.addEventListener("click", () => {
        let colorId = color.getAttribute("id");

        for (let container of coloredContainer) {
            container.style.backgroundColor = `var(--${colorId})`;
        }

        for (let change of changes) {
            change.style.color = `var(--${colorId})`;
        }

        for (let button of btn) {
            button.style.borderColor = `var(--${colorId})`;
        }

        followBtn.style.backgroundColor = `var(--${colorId})`;

        contactBtn.style.color = `var(--${colorId})`;
    });
})