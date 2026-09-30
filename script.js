/*
    THE LAST SHIFT
    Website V2
*/


/* =========================
   SMOOTH SCROLL
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const target =
                link.getAttribute("href");

            if (
                target &&
                target !== "#"
            ) {

                event.preventDefault();

                const element =
                    document.querySelector(target);

                if (element) {

                    element.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


/* =========================
   NAVBAR EFFECT
========================= */

window.addEventListener(
    "scroll",
    () => {

        const topbar =
            document.querySelector(".topbar");

        if (!topbar) return;


        if (window.scrollY > 40) {

            topbar.style.background =
                "rgba(7,10,11,.92)";

            topbar.style.backdropFilter =
                "blur(8px)";

        } else {

            topbar.style.background =
                "linear-gradient(#080909cc,transparent)";

            topbar.style.backdropFilter =
                "none";

        }

    }
);