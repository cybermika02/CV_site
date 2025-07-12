// Animation de la navbar au scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', function() {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Animation des éléments de la timeline
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimelineItems() {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkTimelineItems);
window.addEventListener('load', checkTimelineItems);

// Animation des sections (opacité / translation)
const sections = document.querySelectorAll('section');

function animateSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);

// Soumission du formulaire de contact
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Merci pour votre message ! Je vous répondrai dès que possible.');
    contactForm.reset();
});

// Effet de pulsation sur les boutons
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 1s ease infinite';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// Navigation fluide (scroll doux)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Fermer le menu mobile si ouvert
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    });
});
