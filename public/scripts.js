// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation for logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo img');
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(20px)';
    logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
    }, 100);
});