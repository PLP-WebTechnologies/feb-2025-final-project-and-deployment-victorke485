document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Image Slider
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideElements.length;
        showSlide(currentSlide);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slideElements.length) % slideElements.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', nextSlide);
        setInterval(nextSlide, 5000);
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name.length < 2) {
                formMessage.textContent = 'Name must be at least 2 characters.';
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formMessage.textContent = 'Please enter a valid email.';
                return;
            }

            if (message.length < 10) {
                formMessage.textContent = 'Message must be at least 10 characters.';
                return;
            }

            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.color = 'green';
            contactForm.reset();
            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000);

            // Save to localStorage (for demo purposes)
            localStorage.setItem('contactFormSubmission', JSON.stringify({ name, email, message }));
        });
    }
});