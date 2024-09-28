const $catalogbtn = document.getElementById("catalog");
const $roomsbtn = document.getElementById("btn_rooms");

const $catalog = document.getElementById("full_catalog");
const $rooms = document.getElementById("rooms");

const $header = document.getElementById("header");
const $categories = document.getElementById("categories");

const $catalogitems = document.getElementsByClassName("catalog_item");

$catalogbtn.addEventListener("click", () => {
  const have_class = $catalog.classList.contains("hide");

  if (have_class) {
    $catalog.classList.remove("hide");
    $catalog.classList.add("flex-row");

    $catalog.classList.add("fixed");
    $header.classList.add("fixed");
    $categories.classList.add("fixed");
  } else {
    $catalog.classList.add("hide", "fixed");
    $catalog.classList.remove("flex-row");

    $catalog.classList.remove("fixed");
    $header.classList.remove("fixed");
    $categories.classList.remove("fixed");
  }
});

$roomsbtn.addEventListener("click", () => {
  const have_class = $rooms.classList.contains("hide");

  if (have_class) {
    $rooms.classList.remove("hide");
    $rooms.classList.add("flex-row");

    $rooms.classList.add("fixed");
    $header.classList.add("fixed");
    $categories.classList.add("fixed");
  } else {
    $rooms.classList.add("hide", "fixed");
    $rooms.classList.remove("flex-row");

    $rooms.classList.remove("fixed");
    $header.classList.remove("fixed");
    $categories.classList.remove("fixed");
  }
});
