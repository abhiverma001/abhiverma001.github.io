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





