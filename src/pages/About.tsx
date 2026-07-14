import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();
  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [downloading, setDownloading] = useState(false);

  // TYPING EFFECT
  useEffect(() => {
    let index = 0;
    let interval;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);

  // DOWNLOAD FUNCTION
  const handleDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setCountdown(3);

    let time = 3;

    const timer = setInterval(() => {
      time--;
      setCountdown(time);

      if (time <= 0) {
        clearInterval(timer);

        const a = document.createElement("a");
        a.href = import.meta.env.BASE_URL + "assets/Yash_Sherikar_Resume.pdf";
        a.download = "Yash_Sherikar_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setDownloading(false);
        setCountdown(null);
      }
    }, 1000);
  };


  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10">
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >
          <img
            src={import.meta.env.BASE_URL + "assets/yash-profile.png"}
            alt="Yash Sherikar"
            className="
              w-[200px]
              sm:w-[280px]
              md:w-[320px]
              rounded-2xl
              border
              border-white/15
              object-cover
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              hover:border-white/25
              transition-all
              duration-300
            "
          />

          {/* DIVIDER LINE */}
          <div
            className="
              mt-6
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              w-[90vw]
              sm:w-[400px]
              md:w-[500px]
            "
          />
        </motion.div>

        {/* GLASS BOX CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-4xl
            h-[500px]
            sm:h-[550px]
            md:h-[600px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
        >
          {/* GLASS LIGHT EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* HEADER SECTION */}
          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
              "
            >
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </h1>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div
            className="
              relative
              z-10
              h-[calc(100%-80px)]
              overflow-y-auto
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >
            <div
              className="
                text-white/70
                text-sm
                sm:text-base
                leading-8
                tracking-wide
                space-y-6
              "
            >
              <p>
                Hi, I'm Yash Sherikar, a Full-Stack Java Developer with 2+
                years of experience (including freelance) designing and
                building scalable, cloud-native microservices using Java,
                Spring Boot, React.js, and AWS.
              </p>

              <p>
                Currently at Globe Minds Technology Solutions, I develop
                secure payment microservices handling production-grade
                transactions for Fintech and E-Commerce clients — integrating
                Stripe &amp; PayPal with AES encryption and JWT/OAuth2
                authentication, and achieving a 30% database performance
                improvement through indexing and query tuning.
              </p>

              <p>
                Previously, as a Freelance Full-Stack Java Developer with
                LogiBit Technologies, I independently designed and delivered
                a complete Doctor-Patient Management System end-to-end using
                Java, Spring Boot, and React.
              </p>

              <p>
                My backend expertise covers Spring Boot microservices,
                Hibernate/JPA, MySQL/MongoDB/PostgreSQL, Redis caching,
                Kafka-based event-driven architecture, Docker, and Kubernetes
                deployments on AWS. I maintain 90% unit test coverage using
                JUnit and Mockito, and contribute to CI/CD pipelines using
                Jenkins.
              </p>

              <p>
                I've also solved 500+ DSA problems on LeetCode and
                GeeksforGeeks, with a strong foundation in distributed systems
                and system design.
              </p>

              <p>
                An MCA graduate from Bharati Vidyapeeth University with a 9.0
                CGPA, I'm passionate about writing clean, maintainable code
                and continuously growing across backend, full stack, and
                GenAI-assisted development. I've also served as a Guest
                Lecturer delivering technical talks on Core Java at multiple
                engineering colleges.
              </p>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-white font-bold text-lg mb-3">Experience</h3>
                <p className="mb-1">
                  <span className="text-white font-semibold">
                    Full-Stack Java Developer
                  </span>{" "}
                  — Globe Minds Technology Solutions, Pune (May 2025 – Present)
                </p>
                <p>
                  <span className="text-white font-semibold">
                    Freelance Full-Stack Java Developer
                  </span>{" "}
                  — Multipale Companies/Clients, Remote (Aug 2024 – Mar 2025)
                </p>
                <p>
                  <span className="text-white font-semibold">
                    Web Developer
                  </span>{" "}
                  — LogiBit Technologies, Sangli (Jan 2024 – Jun 2024)
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-white font-bold text-lg mb-3">Education</h3>
                <p className="mb-1">
                  <span className="text-white font-semibold">
                    MCA
                  </span>{" "}
                  — Bharati Vidyapeeth University, Pune (2025) · CGPA 9.0/10
                </p>
                <p>
                  <span className="text-white font-semibold">
                    BCA
                  </span>{" "}
                  — Bharati Vidyapeeth University, Pune (2023) · CGPA 8.38/10
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-white font-bold text-lg mb-3">Core Skills</h3>
                <p>
                  Java · Spring Boot · Spring Security · React.js · MySQL ·
                  MongoDB · Redis · Apache Kafka · Docker · Kubernetes ·
                  AWS (EC2/S3/IAM) · JWT/OAuth2 · REST APIs · Microservices ·
                  JUnit &amp; Mockito · Jenkins CI/CD
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DOWNLOAD BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          onClick={handleDownload}
          disabled={downloading}
          className="
            group
            relative
            overflow-hidden
            flex
            items-center
            justify-center
            gap-3
            px-8
            sm:px-10
            py-3
            sm:py-4
            rounded-2xl
            border
            border-white/15
            bg-white/8
            backdrop-blur-xl
            hover:bg-white/15
            hover:border-white/30
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            duration-300
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            hover:shadow-[0_15px_50px_rgba(255,255,255,0.08)]
          "
        >
          {/* BUTTON GLOW EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* BUTTON CONTENT */}
          <div className="relative z-10 flex items-center gap-3">
            <Download
              size={20}
              className="
                group-hover:scale-110
                group-hover:-translate-y-1
                transition-all
                duration-300
              "
            />
            <span className="font-semibold tracking-wide">
              {downloading ? `Downloading in ${countdown}s` : "Download Resume"}
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}