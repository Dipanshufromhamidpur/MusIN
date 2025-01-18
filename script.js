// Smooth Scroll to Sections
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial Carousel (Optional)
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
if (testimonials.length > 1) {
    setInterval(() => {
        testimonials[currentIndex].style.display = 'none'; // Hide current
        currentIndex = (currentIndex + 1) % testimonials.length; // Move to next
        testimonials[currentIndex].style.display = 'block'; // Show next
    }, 5000); // Change every 5 seconds
}

// Responsive Navigation (Optional for Mobile)
const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}