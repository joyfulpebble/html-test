const targetElement = document.querySelector(".point");
const tooltip = document.getElementById("tooltip");

const element = document.getElementById("p_1_1");
const style = window.getComputedStyle(element);
const top = style.getPropertyValue("top").split("").splice(0, 3).join("");
const left = style.getPropertyValue("left").split("").splice(0, 3).join("");

let stable = false;

targetElement.addEventListener("mouseenter", function () {
  tooltip.style.top = `${+top - 140}px`;
  tooltip.style.left = `${+left - 220}px`;
  tooltip.style.display = "flex";

  targetElement.classList.add("point_active");
});

tooltip.addEventListener("mouseenter", function () {
  stable = true;
  tooltip.style.display = "flex";
});

tooltip.addEventListener("mouseleave", function () {
  stable = false;
  tooltip.style.display = "none";
  targetElement.classList.remove("point_active");
});

targetElement.addEventListener("mouseleave", function () {
  setTimeout(() => {
    if (!stable) {
      tooltip.style.display = "none";
      targetElement.classList.remove("point_active");
    }
  }, 200);
});
