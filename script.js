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

// Contact Form — Formspree submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const btn = document.getElementById('contactSubmitBtn');
    const responseDiv = document.getElementById('formResponse');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        btn.disabled = true;
        btn.textContent = 'Sending...';
        responseDiv.style.display = 'none';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                responseDiv.innerHTML = '&#10003; Message sent! I will get back to you soon.';
                responseDiv.style.cssText = 'display:block; color:#00FFA3; font-weight:600; font-size:1.1rem;';
                form.reset();
            } else {
                const data = await res.json();
                const msg = data.errors ? data.errors.map(err => err.message).join(', ') : 'Submission failed. Please try again.';
                responseDiv.innerHTML = '&#10007; ' + msg;
                responseDiv.style.cssText = 'display:block; color:#ff6b6b; font-weight:600; font-size:1.1rem;';
            }
        } catch {
            responseDiv.innerHTML = '&#10007; Network error. Please try again or email me directly.';
            responseDiv.style.cssText = 'display:block; color:#ff6b6b; font-weight:600; font-size:1.1rem;';
        } finally {
            btn.disabled = false;
            btn.textContent = 'Send Message';
        }
    });
});





