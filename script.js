// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Back to top button click handler
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // For Netlify forms, we'll just show a success message
        // The actual form submission is handled by Netlify
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-stats .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        footer.innerHTML = footer.innerHTML.replace('2025', new Date().getFullYear());
    }
});

// Load projects from Netlify CMS (if available)
async function loadProjects() {
    try {
        // This would typically fetch from your CMS API
        // For now, we'll keep the static projects
        console.log('Projects loaded from static content');
    } catch (error) {
        console.log('Using static project content');
    }
}

// Fix domain-specific scaling issues
function fixDomainScalingIssues() {
    // Force viewport reset
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
    
    // Fix iOS Safari viewport height issues
    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // Prevent zoom on input focus (iOS)
    document.querySelectorAll('input, textarea, select').forEach(element => {
        element.addEventListener('focus', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('meta[name="viewport"]').setAttribute('content', 
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            }
        });
    });
    
    // Force image dimensions
    document.querySelectorAll('.about-image img').forEach(img => {
        img.style.maxWidth = '320px';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '0 auto';
    });
    
    // Log domain info for debugging
    console.log('Domain:', window.location.hostname);
    console.log('Viewport width:', window.innerWidth);
    console.log('Device pixel ratio:', window.devicePixelRatio);
    console.log('User agent:', navigator.userAgent);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    fixDomainScalingIssues();
});

// Run fixes again after images load
window.addEventListener('load', () => {
    setTimeout(fixDomainScalingIssues, 100);
});
