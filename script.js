// Typed Text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['Senior Cloud Engineer', 'AWS Cloud Architect', 'Kubernetes Expert', 'Terraform Specialist', 'CI/CD Automation Engineer'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
    });
});

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close menu when any nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector(".about");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutSection);
    });





