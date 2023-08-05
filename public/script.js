// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to the container div to handle checkbox clicks
    const container = document.querySelector(".box");
    container.addEventListener("change", (event) => {
        if (event.target.type === "checkbox") {
            const checkbox = event.target;
            const taskParagraph = checkbox.nextElementSibling;
            if (taskParagraph) {
                taskParagraph.classList.toggle("completed");
            }
        }
    });
});