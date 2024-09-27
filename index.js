const $catalogbtn = document.getElementById("catalog");
const $catalog = document.getElementById("full_catalog");

const $catalogitems = document.getElementsByClassName("catalog_item");

$catalogbtn.addEventListener("click", () => {
  let a = $catalog.classList.contains("hide");

  if (a) {
    $catalog.classList.remove("hide");
  } else {
    $catalog.classList.add("hide");
  }

  console.log(a);
});

// const have_select =
