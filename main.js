// import "./style.css";

// console.clear();
const $composition = document.querySelector(".composition");
const $trg = document.querySelector(".header__trg-menu");
// const $content = document.querySelector('.menu-fs__content')
// const $links = document.querySelector('.menu-fs__content a')

const menuOpen = () => {
  if ($composition.classList.contains("is-menufs")) {
    // for you guys to play around.. Have fun =)
    $composition.classList.replace("is-menufs", "is-menufs-close");
  } else if ($composition.classList.contains("is-menufs-close")) {
    $composition.classList.replace("is-menufs-close", "is-menufs");
  } else {
    $composition.classList.add("is-menufs");
  }
};

$trg.addEventListener("click", menuOpen);
