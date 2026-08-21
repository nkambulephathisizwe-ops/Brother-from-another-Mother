/*
    Memorial Website
    ----------------
    You can add interactive features here later.

    For now, the website works without
    any additional JavaScript.
*/


// Fade-in animation when sections enter the screen

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});
