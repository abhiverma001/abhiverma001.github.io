# 🚀 abhiverma001.github.io — Personal Portfolio

> Live at **[abhiverma001.github.io](https://abhiverma001.github.io)**

A responsive, single-page personal portfolio website for **Abhishek Verma** — AWS-Certified Senior Cloud Engineer with 8+ years of experience in DevOps, cloud infrastructure, Kubernetes, and CI/CD automation.

---

## 📋 Sections

| Section | Description |
|---|---|
| **Hero** | Introduction, typing animation, social links, CV download |
| **Stats** | 8+ Years experience · 4 Industry Awards · 15+ Technologies · 4 Certifications |
| **About** | Bio, contact details, education, languages |
| **Skills** | Cloud Platform, Containers, IaC, CI/CD, Monitoring/Security, Scripting |
| **Projects** | 6 DevOps project cards with tech tags |
| **Experience** | 5-role vertical timeline (Waters Corp, Infosys, Innoitus, Globtier, Kutumbh Care) |
| **Certifications** | AWS SAA, AWS DevOps Pro, Terraform Associate, CKA |
| **Contact** | Contact info + Formspree-powered contact form |

---

## 🛠️ Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no build tools, no framework
- **Bootstrap 5.3** — grid system and form utilities
- **Font Awesome 6.6** — icons
- **Bootstrap Icons 1.8** — supplementary icons
- **Typed.js 2.1** — cycling profession titles in hero
- **Formspree** — contact form backend (works on static hosting)
- **Google Fonts – Jost** — primary typeface
- **GitHub Pages** — hosting

---

## 📁 Project Structure

```
abhiverma001.github.io/
├── index.html              # Main single-page portfolio
├── style.css               # All styles + responsive media queries
├── animation.css           # Entry/scroll animations (keyframes)
├── script.js               # Typed.js init, hamburger menu, contact form handler
├── Abhishek_Verma_CV.pdf   # Downloadable CV
├── images/
│   └── abhi.png            # Profile photo
└── achived-portfolios/     # Older portfolio versions (reference only)
```

---

## ✨ Features

- **Responsive design** — hamburger nav menu, fluid layout for mobile/tablet/desktop
- **Typing animation** — cycles through 5 professional titles
- **Smooth scroll & fade-in** — Intersection Observer API for about section
- **Working contact form** — async fetch to Formspree; inline success/error messages, no page reload
- **CV download** — direct PDF download button in navbar and hero
- **Dark theme** — custom CSS variables for consistent colour scheme

---

## ⚡ Local Development

No build step required — just open the file directly:

```bash
# Clone the repo
git clone https://github.com/abhiverma001/abhiverma001.github.io.git
cd abhiverma001.github.io

# Open in browser (any of the following)
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Or use VS Code's **Live Server** extension for hot-reload during development.

---

## 📬 Contact Form Setup (Formspree)

The contact form uses [Formspree](https://formspree.io) — a free service compatible with static hosting:

1. Sign up at [formspree.io](https://formspree.io) and create a new form
2. Copy your form endpoint (e.g. `https://formspree.io/f/xyzabcde`)
3. In `index.html`, replace `YOUR_FORM_ID` in the form's `action` attribute:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xyzabcde" method="POST">
   ```
4. Push to GitHub — form submissions will be emailed to you directly

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
