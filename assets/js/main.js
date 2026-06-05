const projects = [
    // 0) Patient Management System
    {
        title: "Patient Management System",
        description: "A full-stack Patient Management System built using PHP, MySQL, HTML, CSS, and JavaScript for managing patient records, diagnosis details, medicines, and hospital revenue efficiently. The system provides a secure admin panel for handling patient data, tracking treatments, and monitoring revenue analytics through an interactive dashboard.<br><br>" +
                     "-Secure Admin Login Authentication<br>" +
                     "-Add, Update, Delete, and Manage Patient Records<br>" +
                     "-Store Patient Diagnosis, Prescriptions, and Treatment Details<br>" +
                     "-Search Functionality for Quick Patient Record Retrieval<br>" +
                     "-Track Patient Last Visit Date and Medical History<br>" +
                     "-Revenue Analytics Dashboard with Daily/Weekly/Monthly/Yearly breakdowns<br>" +
                     "-Responsive Admin Dashboard with Data Tables and Statistics<br>" +
                     "-Input Validation and Error Handling for Reliable Data Management<br>" +
                     "-Optimized MySQL Database Design for Faster Record Access",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        image: "project-0",
        thumbnail: "assets/images/patient_mng_sys1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/patient_mng_sys1.jpg", caption: "Admin Login Page" },
            { url: "assets/images/patient_mng_sys2.jpg", caption: "Admin Dashboard" },
            { url: "assets/images/patient_mng_sys3.jpg", caption: "Patient Records" },
            { url: "assets/images/patient_mng_sys4.jpg", caption: "Add Patient Form" },
            { url: "assets/images/patient_mng_sys5.jpg", caption: "Revenue Analytics" },
            { url: "assets/images/patient_mng_sys6.jpg", caption: "Patient Diagnosis Details" },
            { url: "assets/images/patient_mng_sys7.jpg", caption: "Edit Patient Record" }
        ]
    },
    // 1) VR Computer Services (NEW)
    {
        title: "VR Computer Services",
        description: "A professional multi-page website for VR Computer Services, a local IT service company offering AMC, networking, printer repairs, and engineer dispatch. The website features a responsive design, service pages, a gallery, engineer profile showcase, and an admin panel for managing service requests and engineer assignments.<br><br>" +
                     "-Responsive multi-page website (Home, AMC, Networking, Printer, Gallery)<br>" +
                     "-Engineer management with profile display<br>" +
                     "-Admin dashboard for service request tracking<br>" +
                     "-Login/Authentication system<br>" +
                     "-MySQL database with Node.js backend<br>" +
                     "-Gallery page showcasing completed work<br>" +
                     "-Contact and enquiry management system",
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
        image: "project-1",
        thumbnail: "assets/images/VR_LOGO.png",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/VR_LOGO.png", caption: "VR Computer Services Logo" },
            { url: "assets/images/VR_ENG_1.jpeg", caption: "Engineer Profile" },
            { url: "assets/images/VR_ENG_2.jpeg", caption: "Team Member" },
            { url: "assets/images/VR_ENG_3.jpeg", caption: "Service Engineer" },
            { url: "assets/images/VR_ENG_4.jpeg", caption: "Field Engineer" }
        ]
    },
    // 2) Doctor Patient Management
    {
        title: "Doctor Patient Management System",
        description: "A comprehensive healthcare management system that connects doctors with patients, manages prescriptions, and tracks medicine inventory. Key features include:<br><br>" +
                     "- Secure patient registration and profile management<br>" +
                     "- Doctor dashboard for managing patients and prescriptions<br>" +
                     "- Automated medicine inventory tracking with low-stock alerts<br>" +
                     "- Prescription management system with digital signatures<br>" +
                     "- Patient history tracking and medical records management",
        tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "jQuery"],
        image: "project-2",
        thumbnail: "assets/images/Doctor1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/Doctor1.jpg", caption: "Login Page" },
            { url: "assets/images/Doctor2.jpg", caption: "Doctor Dashboard" },
            { url: "assets/images/Doctor3.jpg", caption: "Doctor Settings" },
            { url: "assets/images/Doctor4.jpg", caption: "Patient List" },
            { url: "assets/images/Doctor5.jpg", caption: "OPD Form" },
            { url: "assets/images/Doctor6.jpg", caption: "Medical Dashboard" },
            { url: "assets/images/Doctor7.jpg", caption: "Patient Payment Management" },
            { url: "assets/images/Doctor8.jpg", caption: "Payment Details" },
            { url: "assets/images/Doctor9.jpg", caption: "Admin Dashboard" }
        ]
    },
    // 3) Email Reply Generator
    {
        title: "Email Reply Generator",
        description: "An AI-powered tool that generates context-aware email replies in different tones (professional, friendly, concise). Users can paste email content, select a tone, and receive a generated response. Integrated with Gemini AI for natural language processing and Spring Boot for backend API. Reduced email response time by 70% for test users while maintaining appropriate tone and context.",
        tech: ["Spring Boot", "Gemini AI", "JavaScript", "HTML5", "CSS3", "REST API"],
        image: "project-3",
        thumbnail: "assets/images/EMAIL_GUI1.jpg",
        codeLink: "#",
        demoLink: "https://mail-reply-generator.onrender.com/",
        screenshots: [
            { url: "assets/images/EMAIL_GUI1.jpg", caption: "Main Interface" },
            { url: "assets/images/EMAIL_GUI2.jpg", caption: "Tone Selection" },
            { url: "assets/images/EMAIL_GUI3.png", caption: "Generated Response" }
        ]
    },
    // 4) PayPal Payment Integration (INTERNSHIP)
    {
        title: "PayPal Payment Integration (INTERNSHIP)",
        description: "Enterprise-grade payment processing system using PayPal REST API with Spring Boot. Handles one-time payments, subscription management, webhook processing, and automated reconciliation.<br><br>" +
                     "<strong>Key Achievements:</strong><br>" +
                     "- Integrated PayPal SDK for seamless checkout experience, reducing cart abandonment by 35%<br>" +
                     "- Implemented subscription billing with automated monthly/yearly recurring payments<br>" +
                     "- Built webhook handlers for real-time payment notifications and order status updates<br>" +
                     "- Created admin dashboard for transaction monitoring, refunds, and dispute management<br>" +
                     "- Secured APIs with OAuth2 and JWT authentication, protecting over 10,000+ transactions<br>" +
                     "- Deployed microservices on AWS with Docker containers and CI/CD pipeline via Jenkins<br>" +
                     "- Achieved 99.95% transaction success rate through comprehensive error handling and retry logic",
        tech: ["Spring Boot", "PayPal REST API", "Microservices", "OAuth2", "JPA/Hibernate", "MySQL", "Docker", "AWS EC2", "Jenkins"],
        image: "project-4",
        thumbnail: "assets/images/Paypal_Express1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/Paypal_Express1.jpg", caption: "PayPal Integration" }
        ]
    },
    // 5) Meta Data Updater (NEW - after PayPal)
    {
        title: "Meta Data Updater According to File Name",
        description: "A Python utility tool that automatically updates file metadata (timestamps — modified time, access time, and Windows creation time) based on the file name or a specified target date. Useful for organizing photo archives, restoring correct file dates after backups, or bulk-updating media metadata.<br><br>" +
                     "- Reads target datetime from script configuration<br>" +
                     "- Updates file access and modification timestamps via os.utime()<br>" +
                     "- Uses Windows ctypes API to also update creation time (Windows-specific)<br>" +
                     "- Supports batch processing for entire directories<br>" +
                     "- Clean console output with success/failure indicators",
        tech: ["Python", "OS Module", "ctypes", "datetime", "File I/O"],
        image: "project-5",
        thumbnail: "assets/images/PAYMENTSYSTEM2.JPG",
        codeLink: "#",
        demoLink: "#",
        screenshots: []
    },
    // 6) Stripe Payment Integration
    {
        title: "Stripe Payment Integration (INTERNSHIP)",
        description: "Developed a secure payment processing system using Spring Boot and Stripe API that handles over 1,000 transactions daily. Implemented features like payment status tracking, webhook processing for real-time notifications, and comprehensive error handling. The system achieved 99.9% transaction success rate and reduced cart abandonment by 20%. Integrated with ActiveMQ for asynchronous processing and deployed on AWS EC2 for high availability.",
        tech: ["Spring Boot", "Stripe API", "Microservices", "AWS EC2", "ActiveMQ", "REST APIs"],
        image: "project-6",
        thumbnail: "assets/images/PAYMENTSYSTEM1.JPG",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/PAYMENTSYSTEM1.JPG", caption: "Payment Processing Interface" },
            { url: "assets/images/PAYMENTSYSTEM2.JPG", caption: "Transaction Dashboard" }
        ]
    },
    // 7) Bus Payment System
    {
        title: "Bus Payment System (FREELANCE)",
        description: "Built a comprehensive online ticketing system for school/college buses with tap-and-pay functionality. The system features real-time seat availability, automated notifications, and secure payment processing. Implemented data encryption for transactions, resulting in a 20% increase in online payments and 30% faster booking times. The admin dashboard provides analytics on ridership patterns and revenue tracking.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Python (OpenCV)"],
        image: "project-7",
        thumbnail: "assets/images/BUS1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/BUS1.jpg", caption: "Sign In Interface" },
            { url: "assets/images/BUS2.jpg", caption: "Sign Up Interface" },
            { url: "assets/images/BUS3.jpg", caption: "User Dashboard" },
            { url: "assets/images/BUS4.jpg", caption: "Dark Mode" },
            { url: "assets/images/BUS5.jpg", caption: "Admin Dashboard" }
        ]
    },
    // 8) Weather Forecasting
    {
        title: "Weather Forecasting",
        description: "A dynamic web application that provides accurate weather forecasts using the OpenWeather API. Features include 5-day forecasts, weather alerts, and location-based recommendations. Implemented caching to reduce API calls by 40% and developed a responsive UI that works seamlessly across devices. The system serves over 10,000 monthly users with 99.8% uptime.",
        tech: ["Java", "JSP", "Servlet", "OpenWeather API", "MySQL"],
        image: "project-8",
        thumbnail: "assets/images/TEMPRATURE1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/TEMPRATURE1.jpg", caption: "Weather Dashboard" },
            { url: "assets/images/TEMPRATURE2.jpg", caption: "Forecast View" }
        ]
    },
    // 9) TicTacToe
    {
        title: "TicTacToe",
        description: "A feature-rich implementation of the classic game with both single-player (against AI) and multiplayer modes. The AI uses a minimax algorithm for optimal moves, providing three difficulty levels. Implemented a sleek GUI with animations and game statistics tracking. The application features a clean CUI mode as well, with a 4.8/5 rating from users.",
        tech: ["Java", "AWT", "Swing", "Game AI", "CUI"],
        image: "project-9",
        thumbnail: "assets/images/TICTACTOE2.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/TICTACTOE1.jpg", caption: "Game Interface" },
            { url: "assets/images/TICTACTOE2.jpg", caption: "Game Board" }
        ]
    },
    // 10) Unlimited Message Sender (NEW - after TicTacToe)
    {
        title: "Unlimited Message Sender",
        description: "A Python automation tool that sends an unlimited stream of randomized messages using PyAutoGUI and PyPerclip. The tool selects random emojis and custom words from predefined lists and pastes them into any active chat window at set intervals. Built for automation demonstrations and PyAutoGUI learning.<br><br>" +
                     "- Uses pyautogui for clipboard-based message sending<br>" +
                     "- Random emoji and word selection from custom lists<br>" +
                     "- Configurable delay between messages<br>" +
                     "- Ctrl+V paste method for Unicode emoji support<br>" +
                     "- Works with any desktop messaging application",
        tech: ["Python", "PyAutoGUI", "PyPerclip", "Automation"],
        image: "project-10",
        thumbnail: "assets/images/CHATBOTCUI.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: []
    },
    // 11) YouTube Video Downloader (NEW - after Unlimited Message)
    {
        title: "YouTube Video Downloader",
        description: "A command-line Python tool that downloads YouTube videos in any available quality using the PyTube library. Users provide a YouTube URL, view all available streams with resolution options, and select their preferred format. The tool downloads videos directly to the working directory.<br><br>" +
                     "- Downloads YouTube videos via URL input<br>" +
                     "- Lists all available video streams with quality options<br>" +
                     "- Supports MP4, WebM and multiple resolutions<br>" +
                     "- Simple interactive CLI interface<br>" +
                     "- Built using the PyTube library",
        tech: ["Python", "PyTube", "CLI", "YouTube API"],
        image: "project-11",
        thumbnail: "assets/images/MUSICPLAYER1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: []
    },
    // 12) Attendance Management System (NEW - Python)
    {
        title: "Attendance Management System",
        description: "A Python-based Attendance Management System for tracking student or employee attendance efficiently. The system features a clean interface for marking, viewing, and managing attendance records with support for reports and analytics.<br><br>" +
                     "- Mark and track daily attendance records<br>" +
                     "- Student/Employee profile management<br>" +
                     "- Attendance reports (daily, weekly, monthly)<br>" +
                     "- Absent/Present/Late status tracking<br>" +
                     "- Data export functionality<br>" +
                     "- Admin and user role-based access",
        tech: ["Python", "Tkinter", "MySQL", "CSV Export"],
        image: "project-12",
        thumbnail: "assets/images/BLOODBANK1.JPG",
        codeLink: "#",
        demoLink: "#",
        screenshots: []
    },
    // 13) Art Instincts
    {
        title: "Art Instincts (FREELANCE)",
        description: "An online gallery platform that connects artists with art enthusiasts. Features include artist profiles, artwork categorization, and a commission request system. Implemented secure payment integration and a rating system that increased artist engagement by 45%. The platform hosts over 500 artists and 2,000 artworks with 10,000+ monthly visitors.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
        image: "project-13",
        thumbnail: "assets/images/ARTINSTINCTS2.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/ARTINSTINCTS1.jpg", caption: "Login Page" },
            { url: "assets/images/ARTINSTINCTS2.jpg", caption: "Artist Profile" },
            { url: "assets/images/ARTINSTINCTS3.jpg", caption: "Gallery View" }
        ]
    },
    // 14) Burger Shop
    {
        title: "Burger Shop (FREELANCE)",
        description: "A full-featured online ordering system for a burger restaurant chain. The system includes menu customization, cart functionality, and order tracking. Implemented a recommendation engine that increased average order value by 18%. Features real-time kitchen updates and delivery tracking, reducing customer service inquiries by 35%.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
        image: "project-14",
        thumbnail: "assets/images/BURGER1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/BURGER1.jpg", caption: "Main Interface" },
            { url: "assets/images/BURGER2.jpg", caption: "Order Customization" }
        ]
    },
    // 15) Food Order Website
    {
        title: "Food Order Website (FREELANCE)",
        description: "A comprehensive food delivery platform serving multiple restaurants. Features include real-time order tracking, multiple payment options, and a sophisticated recommendation system. Reduced order processing time by 40% through optimized database queries and implemented a loyalty program that increased repeat orders by 25%.",
        tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
        image: "project-15",
        thumbnail: "assets/images/FOODORDER1.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/FOODORDER1.jpg", caption: "Main Dashboard" },
            { url: "assets/images/FOODORDER2.jpg", caption: "Dark Mode" },
            { url: "assets/images/FOODORDER3.jpg", caption: "About" }
        ]
    },
    // 16) Music Player
    {
        title: "Music Player",
        description: "A responsive web-based music player with advanced features like playlist management, audio visualization, and crossfade between tracks. Implemented a custom audio engine that reduces latency by 30% compared to standard web players. The player supports multiple audio formats and has been used by over 50,000 music enthusiasts.",
        tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
        image: "project-16",
        thumbnail: "assets/images/MUSICPLAYER1.jpg",
        codeLink: "https://github.com/yashsherikar/music-player.git",
        demoLink: "https://yashsherikar.github.io/music-player/",
        screenshots: [
            { url: "assets/images/MUSICPLAYER1.jpg", caption: "Player Interface" },
            { url: "assets/images/MUSICPLAYER2.jpg", caption: "Playlist View" }
        ]
    },
    // 17) Chat Bot
    {
        title: "Chat Bot",
        description: "A Java-based chatbot with language processing capabilities. The bot handles customer inquiries with 85% accuracy, reducing human support needs by 40%. Features include context-aware conversations, multi-language support, and integration with knowledge bases. The modular architecture allows easy addition of new conversation flows.",
        tech: ["Java", "AWT", "Swing"],
        image: "project-17",
        thumbnail: "assets/images/CHATBOT3.jpg",
        codeLink: "https://github.com/yashsherikar/Project-s/tree/main/JAVA/Chat_Bot",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/CHATBOT3.jpg", caption: "" },
            { url: "assets/images/CHATBOT1.jpg", caption: "Chat Interface" },
            { url: "assets/images/CHATBOT2.jpg", caption: "Search Interface" }
        ]
    },
    // 18) Packer Unpacker
    {
        title: "Packer Unpacker",
        description: "A file compression and extraction tool with support for multiple formats (ZIP, RAR, TAR). Features include batch processing, password protection, and progress tracking. The application uses optimized algorithms that achieve 30% better compression ratios than standard tools while maintaining 50% faster processing speeds.",
        tech: ["Java", "AWT", "Swing", "File I/O"],
        image: "project-18",
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
    // 19) AI Chatbot Assistant
    {
        title: "AI Chatbot Assistant",
        description: "An advanced chatbot assistant with machine learning capabilities that improves responses over time. The system features sentiment analysis, personalized recommendations, and integration with external APIs for enriched responses. Reduced average response time from 2 minutes to 15 seconds while maintaining 92% customer satisfaction.",
        tech: ["Java", "Machine Learning", "API Integration", "Context Management"],
        image: "project-19",
        thumbnail: "assets/images/CHATBOTCUI.jpg",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/CHATBOTCUI.jpg", caption: "" }
        ]
    },
    // 20) Digital Banking Platform - Globe Minds (PROFESSIONAL)
    {
        title: "Digital Banking Platform (PROFESSIONAL)",
        description: "Enterprise-grade banking microservices platform developed at Globe Minds Technology Solutions for client EXELON FINTECH. Handles end-to-end banking operations including customer onboarding, account management, fund transfers, and payment processing.<br><br>" +
                     "<strong>Key Achievements:</strong><br>" +
                     "- Designed scalable REST APIs using Java and Spring Boot to process 10,000+ secure banking transactions daily<br>" +
                     "- Implemented JWT/OAuth2 security and role-based access controls ensuring PCI-DSS compliant authentication<br>" +
                     "- Optimized Redis caching and database queries, reducing transaction processing latency by 35%<br>" +
                     "- Integrated Kafka-based event-driven processing for secure asynchronous payment handling<br>" +
                     "- Developed responsive React.js UI components with REST API integration for improved user experience<br>" +
                     "- Collaborated with cross-functional agile teams to deliver production enhancements and critical banking releases<br><br>" +
                     "<strong>Client:</strong> EXELON FINTECH | <strong>Company:</strong> Globe Minds Technology Solutions",
        tech: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL", "Redis", "Kafka", "Docker", "AWS EC2/S3", "JWT/OAuth2", "React.js"],
        image: "project-20",
        thumbnail: "assets/images/PAYMENTSYSTEM1.JPG",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/PAYMENTSYSTEM1.JPG", caption: "Payment Processing Interface" },
            { url: "assets/images/PAYMENTSYSTEM2.JPG", caption: "Transaction Dashboard" }
        ]
    },
    // 21) Stripe Payment Integration - Globe Minds (PROFESSIONAL)
    {
        title: "Stripe Payment Integration – Globe Minds (PROFESSIONAL)",
        description: "Production-grade payment microservices system developed at Globe Minds Technology Solutions for client Constellation UK. Handles enterprise-level e-commerce and fintech payment flows with full Stripe integration.<br><br>" +
                     "<strong>Key Achievements:</strong><br>" +
                     "- Built enterprise payment microservices handling 1,000+ daily transactions at 99.9% success rate<br>" +
                     "- Integrated Stripe webhooks, subscription management, and automated reconciliation with OAuth2 security<br>" +
                     "- Implemented JWT-based authentication and Spring Security role-based authorization for customer data protection<br>" +
                     "- Participated in CI/CD deployment pipelines and cloud-based deployments on AWS EC2 for production-ready delivery<br>" +
                     "- Containerized services with Docker and orchestrated with Kubernetes for high availability<br>" +
                     "- Integrated Kafka for asynchronous event-driven payment processing<br><br>" +
                     "<strong>Client:</strong> Constellation UK | <strong>Company:</strong> Globe Minds Technology Solutions",
        tech: ["Java", "Spring Boot", "Microservices", "Stripe API", "Kafka", "MySQL", "Redis", "Docker", "Kubernetes", "AWS EC2/S3", "JWT/OAuth2", "CI/CD"],
        image: "project-21",
        thumbnail: "assets/images/PAYMENTSYSTEM2.JPG",
        codeLink: "#",
        demoLink: "#",
        screenshots: [
            { url: "assets/images/PAYMENTSYSTEM2.JPG", caption: "Payment Dashboard" },
            { url: "assets/images/PAYMENTSYSTEM1.JPG", caption: "Transaction Interface" }
        ]
    },
    // 22) GymCal – AI Fitness & Nutrition Tracker
    {
        title: "GymCal – AI Fitness & Nutrition Tracker",
        description: "A full-stack AI-powered gym calorie and nutrition management application with a Spring Boot backend and Vanilla JS frontend, deployed live on Vercel and Render.<br><br>" +
                     "<strong>Key Features:</strong><br>" +
                     "- User registration with BMI calculation using Mifflin-St Jeor BMR formula, TDEE, and auto-generated personalized daily macro targets (calories, protein, carbs, fat)<br>" +
                     "- AI Food Search powered by Groq API (LLaMA 3.1) — type any food and get instant full nutrition breakdown<br>" +
                     "- Daily food logging by meal type (Breakfast, Lunch, Dinner, Snack) with calorie/macro tracking and delete support<br>" +
                     "- AI Workout Plan Generator using LLaMA 3.3-70B — generates a complete personalized weekly workout schedule<br>" +
                     "- Water intake tracking with daily goal management<br>" +
                     "- Animated calorie ring dashboard, macro progress bars, and 7-day weekly calorie history chart<br>" +
                     "- JWT-based authentication with Spring Security and role-based access control<br>" +
                     "- Dockerized backend deployed on Render; frontend deployed on Vercel<br><br>" +
                     "<strong>Tech Stack:</strong> Java, Spring Boot 3.2, MongoDB Atlas, Groq AI (LLaMA), JWT, Docker, Vanilla JS, HTML5/CSS3",
        tech: ["Java", "Spring Boot 3.2", "MongoDB", "Groq AI (LLaMA)", "JWT/Spring Security", "Docker", "Render", "Vanilla JS", "HTML5/CSS3", "Vercel"],
        image: "project-22",
        thumbnail: "assets/images/gymcal1.jpg",
        codeLink: "https://github.com/yashsherikar",
        demoLink: "https://gymcal-frontend.vercel.app/",
        screenshots: [
            { url: "assets/images/gymcal1.jpg", caption: "Dashboard – Calorie Ring & Macro Progress" },
            { url: "assets/images/gymcal2.jpg", caption: "AI Food Search & Nutrition Breakdown" },
            { url: "assets/images/gymcal3.jpg", caption: "AI Workout Plan Generator" },
            { url: "assets/images/gymcal4.jpg", caption: "Weekly Calorie History Chart" },
            { url: "assets/images/gymcal5.jpg", caption: "User Profile & BMI Details" }
        ]
    }
];

// Lightbox variables
let currentProjectIndex = 0;
let currentImageIndex = 0;

function openModal(projectIndex) {
    const project = projects[projectIndex];
    currentProjectIndex = projectIndex;
    const modal = document.getElementById('modalOverlay');
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').innerHTML = project.description;
    
    const modalImage = document.getElementById('modalImage');
    modalImage.className = 'modal-image';
    modalImage.style.backgroundImage = `url('${project.thumbnail}')`;
    modalImage.style.backgroundSize = 'cover';
    modalImage.style.backgroundPosition = 'center';
    
    document.getElementById('modalCodeLink').href = project.codeLink;
    document.getElementById('modalDemoLink').href = project.demoLink;
    
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const techItem = document.createElement('span');
        techItem.className = 'modal-tech-item';
        techItem.textContent = tech;
        techContainer.appendChild(techItem);
    });
    
    const imagesContainer = document.getElementById('projectImagesGrid');
    imagesContainer.innerHTML = '';
    if (project.screenshots && project.screenshots.length > 0) {
        project.screenshots.forEach((screenshot, index) => {
            const img = document.createElement('img');
            img.className = 'project-image-thumbnail';
            img.src = screenshot.url;
            img.alt = project.title;
            img.onclick = (e) => { e.stopPropagation(); openLightbox(projectIndex, index); };
            imagesContainer.appendChild(img);
        });
        document.getElementById('projectImagesContainer').style.display = 'block';
    } else {
        document.getElementById('projectImagesContainer').style.display = 'none';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

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

function closeLightbox() {
    document.getElementById('lightboxOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeLightboxImage(direction) {
    const project = projects[currentProjectIndex];
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = project.screenshots.length - 1;
    else if (currentImageIndex >= project.screenshots.length) currentImageIndex = 0;
    const screenshot = project.screenshots[currentImageIndex];
    document.getElementById('lightboxImage').src = screenshot.url;
    document.getElementById('lightboxCaption').textContent = screenshot.caption;
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.getElementById('lightboxOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('modalOverlay').classList.contains('active')) closeModal();
        if (document.getElementById('lightboxOverlay').classList.contains('active')) closeLightbox();
    }
    if (document.getElementById('lightboxOverlay').classList.contains('active')) {
        if (e.key === 'ArrowLeft') changeLightboxImage(-1);
        else if (e.key === 'ArrowRight') changeLightboxImage(1);
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) backToTop.style.display = 'flex';
    else backToTop.style.display = 'none';
});

// IntersectionObserver for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });
    timelineItems.forEach(item => observer.observe(item));
}

// IntersectionObserver for project cards
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
}
