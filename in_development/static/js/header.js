const mobileMenu = (function () {
  const mobileMenuBtn = document.querySelector("#menu-container");
  const mobileMenu = document.querySelector(".mobile-menu");
  let state = closed;

  /*const checkScrollPos = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > window.innerHeight - 60) {
      header.classList.add("solid-bg");
    } else {
      header.classList.remove("solid-bg");
    }
  };*/

  const showMenu = function () {
    document.body.classList.toggle("stop-scrolling");
    mobileMenu.classList.toggle("show-menu");
  };

  const menuAnimation = bodymovin.loadAnimation({
    container: document.querySelector("#menu-container"),
    path: "../static/animations/menu.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
    name: "menuAnimation",
  });

  const animateMenu = function () {
    if (state === "closed") {
      menuAnimation.playSegments([28, 50], true);
      state = "open";
    } else {
      menuAnimation.playSegments([0, 20], true);
      state = "closed";
    }
  };

  //window.addEventListener("scroll", checkScrollPos);
  menuAnimation.goToAndStop(0, true);
  menuAnimation.setSpeed(2);
  mobileMenuBtn.addEventListener("click", showMenu);
  mobileMenuBtn.addEventListener("click", animateMenu);
})();
