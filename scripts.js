// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Mobile Menu Links
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = item.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Animation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        if (scrollY > (sectionTop - windowHeight + sectionHeight / 3)) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize animations
window.onload = () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    setTimeout(() => {
        document.querySelector('.hero').style.opacity = '1';
        document.querySelector('.hero').style.transform = 'translateY(0)';
    }, 300);
};
