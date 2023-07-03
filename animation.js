document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", fadeUpHandler);
    fadeUpHandler();
});

function fadeUpHandler() {
    var elements = document.getElementsByClassName("fade-up");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (isElementInViewport(element)) {
            element.classList.add("fade-up-show");
        }
    }
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}