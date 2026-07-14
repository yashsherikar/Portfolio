import { useState, useRef, useCallback, useEffect } from "react";

const techCategories: { label: string; items: { name: string; icon: string; color: string }[] }[] = [
  {
    label: "Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FFFFFF", color: "#FFFFFF" },
      { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F", color: "#6DB33F" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", color: "#777BB4" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "#47A248" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438", color: "#FF4438" },
      { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/FFFFFF", color: "#FFFFFF" },
    ],
  },
  {
    label: "Tools & Cloud",
    items: [
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FFFFFF", color: "#FFFFFF" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5", color: "#326CE5" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939", color: "#D24939" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
    ],
  },
];

const techStackCount = techCategories.reduce((sum, c) => sum + c.items.length, 0);

const projects = [
  {
    title: "CodeTogether – Real-Time Collaborative Code Editor",
    badge: "FLAGSHIP",
    description: "Google-Docs-style live code editor — multiple users edit, see colored cursors, and run code together in real time via WebSocket/STOMP. Executes Java, Python, JS, C++, C#, Go via Judge0.",
    tech: ["Java", "Spring Boot", "WebSocket/STOMP", "React", "TypeScript", "Monaco Editor", "Docker"],
    thumbnail: null,
    github: "https://github.com/yashsherikar/code-together",
    demo: "https://code-together-six.vercel.app/",
  },
  {
    title: "Stripe Payment Integration",
    badge: "PROFESSIONAL",
    description: "Enterprise payment microservices at Globe Minds handling 1,000+ daily transactions at 99.9% success with Stripe, Kafka & Kubernetes.",
    tech: ["Java", "Spring Boot", "Stripe API", "Kafka", "Kubernetes", "AWS"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/PAYMENTSYSTEM2.JPG",
    github: "#",
    demo: "#",
  },
  {
    title: "JiraLite – Project Management Tool",
    badge: "IN PROGRESS",
    description: "A lightweight Jira-inspired tool with drag-and-drop Kanban boards, sprint planning, and RBAC — Spring Boot & React.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "Docker"],
    thumbnail: null,
    github: "https://github.com/yashsherikar",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "This portfolio itself — an interactive 3D personal site with a physics-based ID card, animated tech stack, and project showcase built with React and Three.js.",
    tech: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Vite"],
    thumbnail: null,
    github: "https://github.com/yashsherikar/Portfolio",
    demo: "https://yashsherikar.github.io/Portfolio/",
  },
  {
    title: "Naukri Auto Apply Bot",
    description: "Automation bot that auto-applies to relevant jobs on Naukri.com based on configured skills, experience, and location filters.",
    tech: ["Python", "Selenium", "WebDriver", "BeautifulSoup"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/naukri_bot.jpg",
    github: "https://github.com/yashsherikar",
    demo: "#",
  },
  {
    title: "GymCal – AI Fitness & Nutrition Tracker",
    description: "Full-stack AI calorie & workout tracker — BMI/TDEE calculation, AI food search via Groq (LLaMA), AI workout plans. Live on Vercel.",
    tech: ["Spring Boot", "MongoDB", "Groq AI", "JWT", "Docker", "Vercel"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/gymcal1.jpg",
    github: "https://github.com/yashsherikar",
    demo: "https://gymcal-frontend.vercel.app/",
  },
  {
    title: "Digital Banking Platform",
    badge: "PROFESSIONAL",
    description: "Enterprise banking microservices for onboarding, accounts & transfers — 10K+ secure transactions daily for EXELON FINTECH.",
    tech: ["Java", "Spring Boot", "Microservices", "Kafka", "Redis", "AWS"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/PAYMENTSYSTEM1.JPG",
    github: "#",
    demo: "#",
  },
  {
    title: "Blood Bank Management System",
    description: "Full-stack platform for donor registration, blood inventory tracking by group, donation scheduling, and hospital request fulfillment.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "JavaScript"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/BLOODBANK1.JPG",
    github: "https://github.com/yashsherikar",
    demo: "#",
  },
  {
    title: "Smart Hostel Management System",
    description: "Full ecosystem for hostel operations with dedicated modules for Admins, Wardens, Guards, and Students — role-based access, JWT auth, Razorpay payments, and email notifications.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "MySQL", "Razorpay"],
    thumbnail: null,
    github: "https://github.com/yashsherikar/Smart-Hostel-Management-System",
    demo: "#",
  },
  {
    title: "Patient Management System",
    description: "Full-stack patient management with secure doctor-patient workflows, appointment scheduling, prescription tracking, and revenue analytics.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/patient_mng_sys1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "VR Computer Services",
    description: "Professional multi-page website for an IT service company — AMC, networking, printer repair, engineer dispatch, and admin panel.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/VR_LOGO.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Doctor Patient Management",
    description: "System connecting doctors with patients, managing prescriptions, and tracking medicine inventory with digital signatures.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/Doctor1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Email Reply Generator",
    description: "AI-powered tool that generates context-aware email replies in different tones using Gemini AI and Spring Boot backend.",
    tech: ["Spring Boot", "Gemini AI", "JavaScript", "REST API"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/EMAIL_GUI1.jpg",
    github: "#",
    demo: "https://mail-reply-generator.onrender.com/",
  },
  {
    title: "PayPal Payment Integration",
    badge: "INTERNSHIP",
    description: "Enterprise payment processing with PayPal REST API, subscription management, webhook handling, 99.95% success rate.",
    tech: ["Spring Boot", "PayPal API", "OAuth2", "Docker", "AWS"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/Paypal_Express1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Meta Data Updater",
    description: "Python utility that automatically updates file metadata and timestamps based on filename to restore correct dates on archives.",
    tech: ["Python", "OS Module", "ctypes", "datetime"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/META_DATA_UPDATER.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Stripe Payment Integration",
    badge: "INTERNSHIP",
    description: "Secure payment processing microservice using Stripe API handling 1,000+ daily transactions with 99.9% success rate.",
    tech: ["Spring Boot", "Stripe API", "Microservices", "AWS"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/PAYMENTSYSTEM1.JPG",
    github: "#",
    demo: "#",
  },
  {
    title: "Bus Payment System",
    badge: "FREELANCE",
    description: "Online ticketing with tap-and-pay, real-time seat availability, automated notifications, and admin analytics.",
    tech: ["PHP", "MySQL", "Python (OpenCV)"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/BUS1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Forecasting",
    description: "Dynamic web app providing accurate weather forecasts via OpenWeather API with 5-day forecasts and alerts.",
    tech: ["Java", "JSP", "Servlet", "OpenWeather API"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/TEMPRATURE1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "TicTacToe",
    description: "Classic Tic Tac Toe with single/multiplayer modes, minimax AI algorithm, and three difficulty levels.",
    tech: ["Java", "AWT", "Swing", "Game AI"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/TICTACTOE2.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Unlimited Message Sender",
    description: "Python automation tool using PyAutoGUI to send randomized emoji/word messages in bulk to any desktop chat app.",
    tech: ["Python", "PyAutoGUI", "PyPerclip"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/CHATBOTCUI.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "YouTube Video Downloader",
    description: "CLI Python tool to download YouTube videos in any available quality, listing all streams and resolutions.",
    tech: ["Python", "PyTube", "CLI"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/MUSICPLAYER1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Attendance Management System",
    description: "Python-based attendance tracking with daily marking, profile management, reports, and role-based access.",
    tech: ["Python", "Tkinter", "MySQL", "CSV Export"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/ATTENDANCE_SYSTEM.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Art Instincts",
    badge: "FREELANCE",
    description: "Online gallery platform connecting artists with enthusiasts, with profiles, commission requests, and secure payments.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/ARTINSTINCTS2.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Burger Shop",
    badge: "FREELANCE",
    description: "Online ordering system for a restaurant chain with menu customization, cart, real-time kitchen updates, and delivery tracking.",
    tech: ["PHP", "MySQL", "JavaScript"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/BURGER1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Food Order Website",
    badge: "FREELANCE",
    description: "Multi-restaurant food delivery platform with real-time order tracking, loyalty program, and multiple payment options.",
    tech: ["PHP", "MySQL", "JavaScript"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/FOODORDER1.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Music Player",
    description: "Responsive web-based music player with playlist management, audio visualization, and crossfade using Web Audio API.",
    tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/MUSICPLAYER1.jpg",
    github: "https://github.com/yashsherikar/music-player.git",
    demo: "https://yashsherikar.github.io/music-player/",
  },
  {
    title: "Chat Bot",
    description: "Java-based chatbot with GUI interface, context-aware conversations, and multi-language support at 85% accuracy.",
    tech: ["Java", "AWT", "Swing"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/CHATBOT3.jpg",
    github: "https://github.com/yashsherikar/Project-s/tree/main/JAVA/Chat_Bot",
    demo: "#",
  },
  {
    title: "Packer Unpacker",
    description: "File compression and extraction tool supporting multiple formats with batch processing and password protection.",
    tech: ["Java", "AWT", "Swing", "File I/O"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/PACKERUNPACKER.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chatbot Assistant",
    description: "Advanced Java chatbot with sentiment analysis, personalized recommendations, and external API integration.",
    tech: ["Java", "Machine Learning", "API Integration"],
    thumbnail: import.meta.env.BASE_URL + "assets/projects/CHATBOTCUI.jpg",
    github: "#",
    demo: "#",
  },
];

const certificates = [
  {
    title: "AWS Certification",
    issuer: "Amazon Web Services",
    color: "#FF9900",
    link: "https://drive.google.com/file/d/1cQJcPYLHsB3UoIvk2pUnKk7qFVkRF_cO/view?usp=drive_link",
  },
  {
    title: "Generative AI",
    issuer: "Certification",
    color: "#8B5CF6",
    link: "https://drive.google.com/file/d/1GeEqTRaL9qEVpZHZFuwR9GDlxiZDjuLD/view?usp=drive_link",
  },
  {
    title: "Java Programming",
    issuer: "Great Learning",
    color: "#00A1E0",
    link: "https://drive.google.com/file/d/19w8Fvu5o29iQa_WoSlqmV0Gflt7qWwv5/view?usp=drive_link",
  },
  {
    title: "Java Programming",
    issuer: "Infosys Springboard",
    color: "#007CC3",
    link: "https://drive.google.com/file/d/1FPLM2LA4p7uj3048h56lHdpG3QG_KqQF/view?usp=drive_link",
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    color: "#FF6C37",
    link: "https://drive.google.com/file/d/14HGtVyfBQNRvIQXawaCpkkMZ8BsWkCku/view?usp=drive_link",
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10X",
    color: "#22D3EE",
    link: "https://drive.google.com/file/d/18LZd-9-0jlDXY0B_pOy2RMnlpkUH6Z8D/view?usp=drive_link",
  },
  {
    title: "Software Development",
    issuer: "LinkedIn Learning",
    color: "#0A66C2",
    link: "https://www.linkedin.com/learning/certificates/c68fb65fc4d01eaa26675568d1378d71d4ed83c71b5b78c9514b4f2c775ba83c/",
  },
  {
    title: "Full Stack Java Development",
    issuer: "Simplilearn",
    color: "#F5A623",
    link: null,
  },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 4h16v-2H4v2z" />
  </svg>
);

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2v4m0 12v4m10-10h-4M6 12H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5V5z" />
  </svg>
);

function ProjectCard({ item }: { item: typeof projects[0] }) {
  return (
    <div
      className="group relative rounded-2xl border border-white/15 overflow-hidden bg-white/[0.06] 
      hover:border-white/25 transition-all duration-500 
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md flex flex-col"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="relative h-40 overflow-hidden bg-white/5">
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">
              Preview coming soon
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
        {item.badge && (
          <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-white/80">
            {item.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-white font-semibold text-sm leading-snug line-clamp-1">{item.title}</p>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-xs text-white/50 leading-relaxed line-clamp-3">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[9px] uppercase tracking-[0.1em] text-white/40 font-mono px-2 py-1 rounded-full border border-white/10 bg-white/[0.03]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full 
            bg-white/5 border border-white/15 text-white/60 
            hover:bg-white/10 hover:text-white hover:border-white/30 
            transition-all duration-200 active:scale-95"
          >
            <GithubIcon />
          </a>
          {item.demo && item.demo !== "#" && (
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full 
              bg-white/5 border border-white/15 text-white/60 
              hover:bg-white/10 hover:text-white hover:border-white/30 
              transition-all duration-200 active:scale-95"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const CertBadgeIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function CertCard({ item }: { item: typeof certificates[0] }) {
  const CardInner = (
    <div
      className="group relative rounded-2xl border border-white/15 overflow-hidden bg-white/[0.06]
      hover:border-white/25 transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md p-6 flex flex-col gap-4 h-full"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div
        style={{ ["--glow" as any]: item.color }}
        className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 
        bg-white/5 group-hover:shadow-[0_0_30px_-8px_var(--glow)] group-hover:border-white/25 
        transition-all duration-300"
      >
        <div style={{ color: item.color }}>
          <CertBadgeIcon />
        </div>
      </div>

      <div className="flex-1">
        <p className="text-white font-semibold text-sm leading-snug mb-1">{item.title}</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
          {item.issuer}
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs font-medium text-white/50 group-hover:text-white/90 transition-colors duration-300">
        {item.link ? (
          <>
            View Certificate <ExternalIcon />
          </>
        ) : (
          <span className="text-white/30">Certificate on file</span>
        )}
      </div>
    </div>
  );

  return item.link ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {CardInner}
    </a>
  ) : (
    CardInner
  );
}


// ─── Categorized Tech Stack Grid ───────────────────────────────────────────
function TechGrid() {
  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center gap-4 mb-10">
        <div className="w-10 h-px bg-white/20" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/35 font-mono whitespace-nowrap">
          {techStackCount} Technologies · Daily Stack
        </span>
        <div className="w-10 h-px bg-white/20" />
      </div>

      <div className="flex flex-col gap-10">
        {techCategories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono mb-4">
              {cat.label}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {cat.items.map((tech) => (
                <div
                  key={tech.name}
                  style={{ ["--glow" as any]: tech.color }}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 
                  bg-white/[0.03] py-6 px-2 transition-all duration-300 
                  hover:-translate-y-1 hover:border-white/25 
                  hover:shadow-[0_0_35px_-8px_var(--glow)] cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 
                    border border-white/10 group-hover:border-white/20 transition-colors duration-300"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/45 font-mono group-hover:text-white/80 transition-colors duration-300 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const tabs: { id: TabId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
];

export default function ShowcaseSection() {
  const [active, setActive] = useState<TabId>("projects");
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const switchTab = useCallback(
    (id: TabId) => {
      if (id === active) return;
      setActive(id);
      setAnimKey((k) => k + 1);
    },
    [active]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) < 50) return;
    const order = tabs.map((t) => t.id);
    const idx = order.indexOf(active);
    if (dx < 0 && idx < order.length - 1) switchTab(order[idx + 1]);
    if (dx > 0 && idx > 0) switchTab(order[idx - 1]);
    touchStartX.current = null;
  };

  const activePillLeft =
    active === "projects"
      ? "8px"
      : active === "certificates"
      ? "calc(33.333% + 4px)"
      : "calc(66.666% + 0px)";

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden text-white px-4 sm:px-8 md:px-16 lg:px-24 py-0 md:py-12 -mt-16 sm:mt-0 md:mt-12">
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        {/* Label */}
        <div className="relative flex items-center justify-center gap-4 mb-5 opacity-0 animate-[fadeSlideDown_0.8s_ease_forwards]">
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-mono">
            Showcase
          </span>
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
        </div>

        {/* Heading */}
        <div className="relative overflow-hidden mb-12">
          <h1
            className="text-center font-black tracking-tight leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] text-white opacity-0 whitespace-nowrap animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
            style={{ fontSize: "clamp(32px,6vw,80px)" }}
          >
            <span className="inline-block bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h1>
        </div>

        {/* Tab Switcher */}
        <div
          className="relative flex items-center p-1.5 rounded-full border border-white/20 bg-white/[0.08] mb-14 w-full max-w-md opacity-0 animate-[fadeSlideUp_0.6s_ease_0.3s_forwards] shadow-2xl shadow-black/40"
          style={{ backdropFilter: "blur(30px)" }}
        >
          <div
            className="absolute top-1.5 bottom-1.5 rounded-full bg-white/20 border border-white/40 transition-[left] duration-300 ease-out shadow-xl shadow-white/10"
            style={{
              width: "calc(33.333% - 4px)",
              left: activePillLeft,
              backdropFilter: "blur(15px)",
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className="relative z-10 flex-1 h-12 rounded-full text-xs font-medium tracking-wide transition-colors duration-200"
            >
              <span
                className={
                  active === tab.id
                    ? "text-white font-semibold"
                    : "text-white/35 hover:text-white/60"
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content area with swipe */}
        <div
          key={animKey}
          className="w-full opacity-0 animate-[contentIn_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {active === "projects" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {projects.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "certificates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {certificates.map((item, i) => (
                <div
                  key={i}
                  className="opacity-0"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` }}
                >
                  <CertCard item={item} />
                </div>
              ))}
            </div>
          )}

          {active === "tech" && (
            <div
              className="opacity-0"
              style={{ animation: "fadeSlideUp 0.5s ease forwards" }}
            >
              <TechGrid />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes headingReveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineMove {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
