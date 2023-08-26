const menuIcon = document.querySelector("#menu-icon");
const menuClose = document.querySelector(".menu-close");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = mobileNav.querySelectorAll("li");
 
menuIcon.addEventListener("click", function () {
    toggleMobileNav();
});
 
menuClose.addEventListener("click", function () {
    toggleMobileNav();
});
 
mobileNavItems.forEach(function (item) {
    item.addEventListener("click", function () {
        mobileNav.style.display = "none";
    });
});
 
function toggleMobileNav() {
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}