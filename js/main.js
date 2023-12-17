/* Created by Tivotal */

const tabBox = document.querySelector(".nav-pills");
const tabs = document.querySelectorAll(".nav-item");
const icons = document.querySelectorAll(".icon i");

let isDragging = false;

const Dragging = (e) => {
    if (!isDragging) return;
    tabBox.classList.add("dragging");
    tabBox.scrollLeft -= e.movementX;
    handleIcons(tabBox.scrollLeft);
};

const stopDrag = () => {
    tabBox.classList.remove("dragging");
    isDragging = false;
};

icons[1].addEventListener("click", () => {
    let scrollWidth = (tabBox.scrollLeft += 150);
    handleIcons(scrollWidth);
});

icons[0].addEventListener("click", () => {
    let scrollWidth = (tabBox.scrollLeft += -150);
    handleIcons(scrollWidth);
});

const handleIcons = (width) => {
    let maxScrollWidth = tabBox.scrollWidth - tabBox.clientWidth;
    icons[0].parentElement.style.display = width <= 0 ? "none" : "flex";

    icons[1].parentElement.style.display =
        maxScrollWidth - width <= 1 ? "none" : "flex";
};

tabBox.addEventListener("mousedown", () => (isDragging = true));
tabBox.addEventListener("mousemove", Dragging);
tabBox.addEventListener("mouseup", stopDrag);


const text = document.getElementById("text");
const tabs1 = document.querySelectorAll(".tab");
const checkboxes = document.querySelectorAll('[data-menu]');

function myFunction(event) {
    const menu = document.getElementById(event.dataset.menu);

    function hideAll() {
        tabs1.forEach((tab) => {
            tab.style.display = "none";
            tab.classList.remove("active");
        });
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        event.checked = true;
    }

    if (event.checked == true) {
        hideAll();
        text.style.display = "block";
        menu.style.display = "block";
        menu.classList.add("active");
    } else {
        text.style.display = "none";
        hideAll();
    }
}


checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => { myFunction(checkbox); });
});