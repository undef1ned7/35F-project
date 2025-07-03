let btn = document.querySelector(".mobile-btn");

const toggleMenu = (menuClassName, showClassName) => {
  let menu = document.querySelector(`.${menuClassName}`);
  if (menu.className.includes(showClassName)) {
    menu.className = menuClassName;
  } else {
    menu.className += ` ${showClassName}`;
  }
};

btn.addEventListener("click", () => {
  toggleMenu("header-nav", "header-nav-active");
});
