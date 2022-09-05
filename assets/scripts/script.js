//===============================================================================================
// hide navbar and collapse links on downwards scroll
window.addEventListener("scroll", hideNav);
let lastPosY = window.scrollY;
navbarHeight = 50;
const navbar = document.querySelector("nav");
const navLogo = document.getElementsByClassName("navbar-brand")[0];

function hideNav() {
    if (window.scrollY > navbarHeight) {
        if (lastPosY < window.scrollY) {
            navbar.classList.add("hide-nav");
            document.getElementsByClassName("navbar-collapse")[0].classList.remove("show");
        } else {
            navbar.classList.remove("hide-nav");
        }
        lastPosY = window.scrollY;
    }
}

//===============================================================================================
// Load More Stories button - news.html
function loadMoreStories() {
    const hiddenSection = document.getElementsByClassName("hidden-content")[0];
    const loadMoreStories =
        document.getElementsByClassName("load-more-stories")[0];
    hiddenSection.classList.remove("hidden");
    loadMoreStories.classList.add("hidden");
}

//===============================================================================================
// clickable indicator buttons on details.html banner, check user is on about page
if (window.location.pathname.includes("about.html")) {
    const banner = document.getElementById("d-banner");
    let bannerWidth = document.getElementById("d-banner").clientWidth;
    const circles = document.getElementsByClassName("detail-circle");
    new ResizeObserver(calc_bannerWidth).observe(banner);
    circles[0].style.opacity = "0.95";
    // mobile scrolling check
    banner.addEventListener("scroll", onScroll);

    // recalculate element width on window resize (px)
    function calc_bannerWidth() {
        bannerWidth = Math.max(document.getElementById("d-banner").clientWidth || 0);
    }

    // set horizontal scroll by calculating width * index
    function currentImg(n) {
        for (i = 0; i < circles.length; i++) {
            circles[i].style.opacity = "0.5";
        }
        circles[n].style.opacity = "0.95";
        banner.scrollLeft = bannerWidth * n;
    }

    // calculate horizontal scrolling relative to element width
    function onScroll() {
        let count = 0;
        let num = banner.scrollLeft - bannerWidth / 2;
        while (num > 0) {
            num = num - bannerWidth;
            count++;
        }
        circles[count].style.opacity = "0.95";
        for (i = 0; i < circles.length; i++) {
            if (i != count) {
                circles[i].style.opacity = "0.5";
            }
        }
    }

    // add auto scroll on set interval
    let time = setInterval(autoScroll, 5000);
    document.getElementById("d-banner-wrapper").addEventListener("click", stopScroll, false);

    // disable autoscroll
    function stopScroll() {
        clearInterval(time);
    }

    function autoScroll() {
        currentImg(Math.floor(Math.random() * circles.length));
    }
}

//========================================================================================
// [15] w3resource. 2022. JavaScript : email validation - w3resource. [online] Available at: [Accessed 5 September 2022].
// validate email, change notification default message
function InvalidMsg(textbox) {
    if (textbox.value === "") {
        textbox.setCustomValidity("Required email address");
    } else if (textbox.validity.typeMismatch) {
        textbox.setCustomValidity("Please enter a valid email address");
    } else {
        textbox.setCustomValidity("");
    }
    console.log("Test");
    return true;
}

//========================================================================================
// [13] Goncalves, T., 2020. How to Implement Dark Mode with CSS and JavaScript. [online] PullRequest. Available at: [Accessed 4 September 2022]. 
// switch dark/light themes
// change icons based on theme
const themeSwitcher = document.getElementById("theme-switcher");
if (localStorage.getItem("theme") == "light") {
    themeSwitcher.src = "assets/icons/moon.svg";
} else {
    themeSwitcher.src = "assets/icons/sun.svg";
}
document.addEventListener("DOMContentLoaded", function (event) {
    // display theme from local storage
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));

    const themeSwitcher = document.getElementById("theme-switcher");

    themeSwitcher.onclick = function () {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme == "light") {
            themeSwitcher.src = "assets/icons/sun.svg";
        } else {
            themeSwitcher.src = "assets/icons/moon.svg";
        }
        // Switch between `dark` and `light`
        const switchToTheme = currentTheme === "dark" ? "light" : "dark";
        
        // store theme in local storage to retrieve for all pages
        localStorage.setItem("theme", switchToTheme);

        document.documentElement.setAttribute("data-theme", switchToTheme);
    };
});
