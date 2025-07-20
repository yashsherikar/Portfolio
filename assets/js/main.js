// Projects data - Ordered as requested
const projects = [
    // 0) Doctor Patient Management (New Project)
    {
        title: "Doctor Patient Management System",
        description: "A comprehensive healthcare management system that connects doctors with patients, manages prescriptions, and tracks medicine inventory. Key features include:<br><br>" +
                     "- Secure patient registration and profile management<br>" +
                     "- Doctor dashboard for managing patients and prescriptions<br>" +
                     "- Automated medicine inventory tracking with low-stock alerts<br>" +
                     "- Prescription management system with digital signatures<br>" +
                     "- Patient history tracking and medical records management",
        tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "jQuery"],
        image: "project-0",
        thumbnail: "assets/images/DOCTOR1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/DOCTOR1.jpg", caption: "Login Page" },
            { url: "assets/images/DOCTOR2.jpg", caption: "Doctor Dashboard" },
            { url: "assets/images/DOCTOR3.jpg", caption: "Doctor Settings" },
            { url: "assets/images/DOCTOR4.jpg", caption: "Patient List"},
            { url: "assets/images/DOCTOR5.jpg", caption: "OPD Form" },
            { url: "assets/images/DOCTOR6.jpg", caption: "Medical Dashboard" },
            { url: "assets/images/DOCTOR7.jpg", caption: "Patient Payment Management" },
            { url: "assets/images/DOCTOR8.jpg", caption: "Payment Details" },
            { url: "assets/images/DOCTOR9.jpg", caption: "Admin Dashboard" }
        ]
    },
    
    // 1) Email Reply Generator
    {
        title: "Email Reply Generator",
        description: "An AI-powered tool that generates context-aware email replies in different tones (professional, friendly, concise). Users can paste email content, select a tone, and receive a generated response. Integrated with Gemini AI for natural language processing and Spring Boot for backend API. Reduced email response time by 70% for test users while maintaining appropriate tone and context.",
        tech: ["Spring Boot", "Gemini AI", "JavaScript", "HTML5", "CSS3", "REST API"],
        image: "project-1",
        thumbnail: "assets/images/EMAIL_GUI1.jpg",
        codeLink: "#",
        demoLink: "https://mail-reply-generator.onrender.com/",
        screenshots: [
            { url: "assets/images/EMAIL_GUI1.jpg", caption: "Main Interface" },
            { url: "assets/images/EMAIL_GUI2.jpg", caption: "Tone Selection" },
            { url: "assets/images/EMAIL_GUI3.png", caption: "Generated Response" }
        ]
    },
    
    // 2) Stripe Payment Integration
    {
        title: "Stripe Payment Integration (INTERNSHIP)",
        description: "Developed a secure payment processing system using Spring Boot and Stripe API that handles over 1,000 transactions daily. Implemented features like payment status tracking, webhook processing for real-time notifications, and comprehensive error handling. The system achieved 99.9% transaction success rate and reduced cart abandonment by 20%. Integrated with ActiveMQ for asynchronous processing and deployed on AWS EC2 for high availability.",
        tech: ["Spring Boot", "Stripe API", "Microservices", "AWS EC2", "ActiveMQ", "REST APIs"],
        image: "project-2",
        thumbnail: "assets/images/PAYMENTSYSTEM1.JPG",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/PAYMENTSYSTEM2.JPG", caption: "Payment Processing Interface" },
            { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdr2mNo1BCD15OqHKJBUxZ3kidfkrSQr6xw&s", caption: "Transaction Dashboard" }
        ]
    },
    
    // 3) Bus Payment System
    {
        title: "Bus Payment System (FREELANCE)",
        description: "Built a comprehensive online ticketing system for school/college buses with tap-and-pay functionality. The system features real-time seat availability, automated notifications, and secure payment processing. Implemented data encryption for transactions, resulting in a 20% increase in online payments and 30% faster booking times. The admin dashboard provides analytics on ridership patterns and revenue tracking.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Python (OpenCV)","MySql"],
        image: "project-3",
        thumbnail: "assets/images/BUS1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/BUS1.jpg", caption: "Sign in Interface" },
            { url: "assets/images/BUS2.jpg", caption: "Sign Up Interface" },
            { url: "assets/images/BUS3.jpg", caption: "User Dashboard" },
            { url: "assets/images/BUS4.jpg", caption: "Dark Mode" },
            { url: "assets/images/BUS5.jpg", caption: "Admin Dashboard" }
        ]
    },
    
    // 4) Weather Forecasting
    {
        title: "Weather Forecasting",
        description: "A dynamic web application that provides accurate weather forecasts using the OpenWeather API. Features include 5-day forecasts, weather alerts, and location-based recommendations. Implemented caching to reduce API calls by 40% and developed a responsive UI that works seamlessly across devices. The system serves over 10,000 monthly users with 99.8% uptime.",
        tech: ["Java", "JSP", "Servlet", "OpenWeather API", "MySQL"],
        image: "project-4",
        thumbnail: "assets/images/WEATHER1.JPG",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/WEATHER1.JPG", caption: "Weather Dashboard" }
        ]
    },
    
    // 5) TicTacToe
    {
        title: "TicTacToe",
        description: "A feature-rich implementation of the classic game with both single-player (against AI) and multiplayer modes. The AI uses a minimax algorithm for optimal moves, providing three difficulty levels. Implemented a sleek CUI with animations and sound effects, along with game statistics tracking. The application has been downloaded over 5,000 times with a 4.8/5 rating.",
        tech: ["Java", "Swing", "Game AI","CUI"],
        image: "project-5",
        thumbnail: "assets/images/TICTACTOE2.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/TICTACTOE1.jpg", caption: "Game Interface" }        ]
    },
    
    // 6) Art Instincts
    {
        title: "Art Instincts",
        description: "An online gallery platform that connects artists with art enthusiasts. Features include artist profiles, artwork categorization, and a commission request system. Implemented secure payment integration and a rating system that increased artist engagement by 45%. The platform hosts over 500 artists and 2,000 artworks with 10,000+ monthly visitors.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
        image: "project-6",
        thumbnail: "assets/images/ARTINSTINCTS2.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/ARTINSTINCTS1.jpg", caption: "Login Page" },
            { url: "assets/images/ARTINSTINCTS2.jpg", caption: "Artist Profile" },
            {url: "assets/images/ARTINSTINCTS3.jpg", caption: "Gallery View" }
        ]
    },
    
    // 7) Burger Shop
    {
        title: "Burger Shop",
        description: "A full-featured online ordering system for a burger restaurant chain. The system includes menu customization, cart functionality, and order tracking. Implemented a recommendation engine that increased average order value by 18%. Features real-time kitchen updates and delivery tracking, reducing customer service inquiries by 35%.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
        image: "project-7",
        thumbnail: "assets/images/BURGER1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/BURGER1.jpg", caption: "Main Interface" },
            { url: "assets/images/BURGER2.jpg", caption: "Order Customization" }
        ]
    },
    
    // 8) Food Order Website
    {
        title: "Food Order Website",
        description: "A comprehensive food delivery platform serving multiple restaurants. Features include real-time order tracking, multiple payment options, and a sophisticated recommendation system. Reduced order processing time by 40% through optimized database queries and implemented a loyalty program that increased repeat orders by 25%.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
        image: "project-8",
        thumbnail: "assets/images/FOODORDER1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/FOODORDER1.jpg", caption: "Main Dashboard" },
            { url: "assets/images/FOODORDER2.jpg", caption: "Darkmode" },
            { url: "assets/images/FOODORDER3.jpg", caption: "About" }
        ]
    },
    
    // 9) Music Player
    {
        title: "Music Player",
        description: "A responsive web-based music player with advanced features like playlist management, audio visualization, and crossfade between tracks. Implemented a custom audio engine that reduces latency by 30% compared to standard web players. The player supports multiple audio formats and has been used by over 50,000 music enthusiasts.",
        tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
        image: "project-9",
        thumbnail: "assets/images/MUSICPLAYER1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/MUSICPLAYER1.jpg", caption: "Player Interface" },
            { url: "assets/images/MUSICPLAYER2.jpg", caption: "Playlist Management" }
        ]
    },
    
    // 10) Chat Bot
    {
        title: "Chat Bot",
        description: "A Java-based chatbot with language processing capabilities. The bot handles customer inquiries with 85% accuracy, reducing human support needs by 40%. Features include context-aware conversations, multi-language support, and integration with knowledge bases. The modular architecture allows easy addition of new conversation flows.",
        tech: ["Java", "AWT", "Swing"],
        image: "project-10",
        thumbnail: "assets/images/CHATBOT3.jpg",
        codeLink: "https://github.com/yashsherikar/Project-s/tree/main/JAVA/Chat_Bot",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/CHATBOT3.jpg", caption: "" },
            { url: "assets/images/CHATBOT1.jpg", caption: "Chat Interface" },
            { url: "assets/images/CHATBOT2.jpg", caption: "Search Interface" }

        ]
    },
    
    // 11) Packer Unpacker
    {
        title: "Packer Unpacker",
        description: "A file compression and extraction tool with support for multiple formats (ZIP, RAR, TAR). Features include batch processing, password protection, and progress tracking. The application uses optimized algorithms that achieve 30% better compression ratios than standard tools while maintaining 50% faster processing speeds.",
        tech: ["Java", "AWT", "Swing", "File I/O"],
        image: "project-11",
        thumbnail: "assets/images/PACKERUNPACKER.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/PACKERUNPACKER.jpg", caption: "Login Interface" },
            { url: "assets/images/PACKERUNPACKER2.jpg", caption: "Main Interface" },
            { url: "assets/images/PACKERUNPACKER3.jpg", caption: "Pack Interface" },
            { url: "assets/images/PACKERUNPACKER4.jpg", caption: "Unpack Interface" }

        ]
    },
    
    // 12) AI Chatbot Assistant
    {
        title: "AI Chatbot Assistant",
        description: "An advanced chatbot assistant with machine learning capabilities that improves responses over time. The system features sentiment analysis, personalized recommendations, and integration with external APIs for enriched responses. Reduced average response time from 2 minutes to 15 seconds while maintaining 92% customer satisfaction.",
        tech: ["Java", "Machine Learning", "API Integration", "Context Management"],
        image: "project-12",
        thumbnail: "assets/images/CHATBOTCUI.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/CHATBOTCUI.jpg", caption: "" },
        ]
    }
];

// Lightbox variables
let currentProjectIndex = 0;
let currentImageIndex = 0;

// Open project modal
function openModal(projectIndex) {
    const project = projects[projectIndex];
    currentProjectIndex = projectIndex;
    const modal = document.getElementById('modalOverlay');
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').innerHTML = project.description;
    document.getElementById('modalImage').className = `modal-image ${project.image}`;
    document.getElementById('modalImage').style.backgroundImage = `url('${project.thumbnail}')`;
    document.getElementById('modalCodeLink').href = project.codeLink;
    document.getElementById('modalDemoLink').href = project.demoLink;
    
    // Set technologies
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const techItem = document.createElement('span');
        techItem.className = 'modal-tech-item';
        techItem.textContent = tech;
        techContainer.appendChild(techItem);
    });
    
    // Set project screenshots
    const imagesContainer = document.getElementById('projectImagesGrid');
    imagesContainer.innerHTML = '';
    if (project.screenshots && project.screenshots.length > 0) {
        project.screenshots.forEach((screenshot, index) => {
            const img = document.createElement('img');
            img.className = 'project-image-thumbnail';
            img.src = screenshot.url;
            img.alt = project.title;
            img.onclick = () => openLightbox(projectIndex, index);
            imagesContainer.appendChild(img);
        });
        document.getElementById('projectImagesContainer').style.display = 'block';
    } else {
        document.getElementById('projectImagesContainer').style.display = 'none';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Open lightbox for screenshot
function openLightbox(projectIndex, imageIndex) {
    const project = projects[projectIndex];
    const screenshot = project.screenshots[imageIndex];
    currentProjectIndex = projectIndex;
    currentImageIndex = imageIndex;
    
    document.getElementById('lightboxImage').src = screenshot.url;
    document.getElementById('lightboxCaption').textContent = screenshot.caption;
    document.getElementById('lightboxOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    document.getElementById('lightboxOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Change lightbox image
function changeLightboxImage(direction) {
    const project = projects[currentProjectIndex];
    currentImageIndex += direction;
    
    // Wrap around if at beginning or end
    if (currentImageIndex < 0) {
        currentImageIndex = project.screenshots.length - 1;
    } else if (currentImageIndex >= project.screenshots.length) {
        currentImageIndex = 0;
    }
    
    const screenshot = project.screenshots[currentImageIndex];
    document.getElementById('lightboxImage').src = screenshot.url;
    document.getElementById('lightboxCaption').textContent = screenshot.caption;
}

// Close modal when clicking outside content
document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close lightbox when clicking outside content
document.getElementById('lightboxOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('modalOverlay').classList.contains('active')) {
            closeModal();
        }
        if (document.getElementById('lightboxOverlay').classList.contains('active')) {
            closeLightbox();
        }
    }
    
    // Navigate lightbox with arrow keys
    if (document.getElementById('lightboxOverlay').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            changeLightboxImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeLightboxImage(1);
        }
    }
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll animations
function animateOnScroll() {
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.8) {
            item.classList.add('visible');
        }
    });
    
    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        const categoryTop = category.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (categoryTop < windowHeight * 0.8) {
            category.style.animationPlayState = 'running';
        }
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    animateOnScroll();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Use Fetch API to submit the form to PHP backend
        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('There was an error sending your message. Please try again later.');
            }
        })
        .catch(error => {
            alert('There was an error sending your message. Please try again later.');
            console.error('Error:', error);
        });
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
});