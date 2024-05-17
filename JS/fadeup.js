
// Fade Up Animation
const fadeUpElements = document.querySelectorAll(".fade-up , .fade-right , .fade-left");

function isElementOutOfView(element) {
    return (
        element.getBoundingClientRect().top >
        (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}

function displayFadeElement(element, scrolledClass) {
    element.classList.add(scrolledClass);
}

function hideFadeElement(element, scrolledClass) {
    element.classList.remove(scrolledClass);
}

function getScrolledClass(element) {
    if (element.classList.contains("fade-up")) {
        return "fade-up-scrolled";
    }
    else if (element.classList.contains("fade-right")) {
        return "fade-right-scrolled";
    }
    else if (element.classList.contains("fade-left")) {
        return "fade-left-scrolled";
    }
    return "";
}

function scrollRevealCheck() {
    fadeUpElements.forEach((element) => {
      const scrolledClass = getScrolledClass(element);
      if (!isElementOutOfView(element)) {
        displayFadeElement(element, scrolledClass);
      } else {
        hideFadeElement(element, scrolledClass);
      }
    });
  }

document.addEventListener("scroll", (e) => {
    scrollRevealCheck();
});

scrollRevealCheck();



