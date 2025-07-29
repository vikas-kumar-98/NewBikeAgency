//................Start Contact Us....................
        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.querySelector('.preloader');
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
        
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
        
        // Scroll Down Button
        document.getElementById('scroll-down').addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector('.container').offsetTop - 80,
                behavior: 'smooth'
            });
        });
        
        // Back to Top Button
        const backToTopBtn = document.getElementById('back-to-top');
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Highlight Today in Business Hours
        const today = new Date().getDay();
        const hoursItems = document.querySelectorAll('.hours-item');
        
        // Adjust for Sunday (0 in JS but 6 in our list)
        let todayIndex;
        if (today === 0) { // Sunday
            todayIndex = 2;
        } else if (today === 6) { // Saturday
            todayIndex = 1;
        } else { // Weekdays (Monday-Friday)
            todayIndex = 0;
        }
        
        hoursItems[todayIndex].querySelector('.day').classList.add('today');
        
        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
        
        // Form Validation
        const contactForm = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validate name
            const name = document.getElementById('name');
            if (name.value.trim() === '') {
                name.parentElement.classList.add('error');
                isValid = false;
            } else {
                name.parentElement.classList.remove('error');
            }
            
            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.parentElement.classList.add('error');
                isValid = false;
            } else {
                email.parentElement.classList.remove('error');
            }
            
            // Validate subject
            const subject = document.getElementById('subject');
            if (subject.value === '') {
                subject.parentElement.classList.add('error');
                isValid = false;
            } else {
                subject.parentElement.classList.remove('error');
            }
            
            // Validate message
            const message = document.getElementById('message');
            if (message.value.trim() === '') {
                message.parentElement.classList.add('error');
                isValid = false;
            } else {
                message.parentElement.classList.remove('error');
            }
            
            // If form is valid, show success message
            if (isValid) {
                // Here you would typically send the form data to the server
                // For demo purposes, we'll just show the success message
                successMessage.style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
        
        // Animate elements when they come into view
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.contact-form-container, .contact-info-container, .map-section');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.animationPlayState = 'running';
                }
            });
        };
        
        // Run once on page load
        animateOnScroll();
        
        // Run on scroll
        window.addEventListener('scroll', animateOnScroll);
    //................End Contact Us....................