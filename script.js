/* =========================================================
   ABHI ROHITH PORTFOLIO
   BASIC INTERACTIONS
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");


    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (navLinks.classList.contains("active")) {

                    icon.classList.remove("fa-bars");

                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            }

        });


        /* Close mobile menu after clicking a link */

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });

    }



    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const topBtn = document.getElementById("topBtn");


    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                topBtn.style.display = "flex";

            } else {

                topBtn.style.display = "none";

            }

        });


        topBtn.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (!menuBtn || !navLinks) return;

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedMenuButton =
            menuBtn.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });


});