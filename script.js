// Theme Toggler Logic
const themeToggleBtn = document.getElementById('themeToggle');
const bodyEl = document.body;

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        bodyEl.classList.remove('dark-theme');
        bodyEl.classList.add('light-theme');
        updateThemeToggleIcon('light');
    } else {
        bodyEl.classList.remove('light-theme');
        bodyEl.classList.add('dark-theme');
        updateThemeToggleIcon('dark');
    }
}

function updateThemeToggleIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'light') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

themeToggleBtn.addEventListener('click', () => {
    if (bodyEl.classList.contains('light-theme')) {
        bodyEl.classList.remove('light-theme');
        bodyEl.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        updateThemeToggleIcon('dark');
    } else {
        bodyEl.classList.remove('dark-theme');
        bodyEl.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        updateThemeToggleIcon('light');
    }
});

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;
    const navbarHeight = 100;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll Event Handler for Progress Bar & Back to Top button
const scrollProgress = document.getElementById('scrollProgress');
const backToTopBtn = document.getElementById('backToTop');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
    
    if (scrollProgress) {
        scrollProgress.style.width = `${progress}%`;
    }

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const navbarHeight = 80;
            const offsetTop = target.offsetTop - navbarHeight;
            window.scrollTo({
                top: Math.max(0, offsetTop),
                behavior: 'smooth'
            });
        }
    });
});

// 1. Hero Parallax Effect
const blueprintSvg = document.getElementById('blueprintSvg');
if (blueprintSvg) {
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.clientX) / 40;
        const yAxis = (window.innerHeight / 2 - e.clientY) / 40;
        blueprintSvg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
}

// 2. Project Simulator Logic
const projectData = {
    goal: {
        title: "Goal - Financial Goal App",
        subtitle: "Fintech App for UHNI",
        date: "March 2025",
        desc: "Developed a sophisticated financial goal application specifically targeted for Ultra High Net Worth Individuals (UHNI). Designed intuitive UI with fluid animations, implemented quick action features, and conducted thorough unit testing.",
        tags: ["Flutter", "Fintech", "Animations", "Unit Testing"],
        playStore: "https://play.google.com/store/apps/details?id=com.tfo.financialgoal",
        appStore: "https://apps.apple.com/us/app/financial-goal/id6739766063",
        icon: "fa-bullseye",
        color: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
    },
    mstock: {
        title: "m Stock by Mirae Asset",
        subtitle: "Trading & Investment Platform",
        date: "Apr 2024 - Oct 2024",
        desc: "Orchestrated UI and API integrations, executed KYC features implementation, integrated third-party packages, and spearheaded application optimization resulting in a 40% increase in overall system performance.",
        tags: ["Flutter", "API Integration", "KYC", "Performance Optimization"],
        playStore: "https://play.google.com/store/apps/details?id=com.rs.mirae",
        appStore: "https://apps.apple.com/us/app/mstock-by-mirae-assets-ipo-mf/id1577155974",
        icon: "fa-chart-line",
        color: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)"
    },
    bounz: {
        title: "Bounz Rewards",
        subtitle: "Fintech Loyalty & Engagement",
        date: "Mar 2023 - Oct 2023",
        desc: "Established a fintech loyalty points application for users in Dubai. Implemented Firebase Dynamic Links, deep linking, push notifications, live location tracking, app engagement tracking, analytics, and interactive gamified UI.",
        tags: ["Flutter", "Firebase", "Deep Linking", "Location Tracking"],
        playStore: "https://play.google.com/store/search?q=bounz",
        appStore: "https://apps.apple.com/us/app/bounz-rewards-loyalty-app/id1573809550",
        icon: "fa-gift",
        color: "linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)"
    },
    happierwork: {
        title: "Happierwork - HRMS",
        subtitle: "Enterprise HR System",
        date: "Feb 2022 - Feb 2023",
        desc: "HRMS application for enterprises to manage employee lifecycle. Features include real-time location tracking, geofencing technology, dynamic server-driven UI, stream-based state management, and responsive interfaces.",
        tags: ["Flutter", "HRMS", "Geofencing", "Location Tracking"],
        playStore: "https://play.google.com/store/apps/details?id=com.happierwork.v2",
        appStore: "https://apps.apple.com/us/app/happierwork/id6462845228",
        icon: "fa-briefcase",
        color: "linear-gradient(135deg, #581c87 0%, #6b21a8 100%)"
    },
    ecommerce: {
        title: "E-commerce Template",
        subtitle: "Hexagonal Clean Architecture",
        date: "Jan 2024 - Apr 2024",
        desc: "Created a template for E-commerce projects utilizing hexagonal clean architecture to ensure loose coupling of dependencies. Developers can swap packages or frameworks without affecting core business logic.",
        tags: ["Flutter", "Hexagonal Architecture", "Clean Architecture", "Template"],
        playStore: "#",
        appStore: "#",
        icon: "fa-shopping-cart",
        color: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
    },
    uniontalk: {
        title: "Union Talk",
        subtitle: "Security & Vulnerability Fixes",
        date: "Jan 2024",
        desc: "Resolved security vulnerability issues identified by VAPT team. Enhanced application security through code obfuscation, implemented device root status checks, and secured dynamic UI screens.",
        tags: ["Flutter", "Security", "Code Obfuscation", "VAPT"],
        playStore: "#",
        appStore: "#",
        icon: "fa-shield-alt",
        color: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)"
    },
    wildfit: {
        title: "Wildfit - Client App",
        subtitle: "Fitness & Progress Tracker",
        date: "Health & Fitness",
        desc: "Client-facing application for Wildfit studio clients to track workouts progress, meals, and plans. Connects clients with performance coaches and nutritionists for a personalized experience.",
        tags: ["Flutter", "Health & Fitness", "Progress Tracking", "Nutrition"],
        playStore: "https://play.google.com/store/apps/details?id=me.wildfit.app",
        appStore: "https://apps.apple.com/us/app/wildfit/id6756062923",
        icon: "fa-dumbbell",
        color: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)"
    },
    wildfittribe: {
        title: "Wildfit Tribe",
        subtitle: "Trainer & Coach Interface",
        date: "Health & Fitness",
        desc: "Internal application for Wildfit studio trainers and employees to manage members, assign workout plans, view nutritional routines, and check daily scheduling, streamlining studio operations.",
        tags: ["Flutter", "Employee Management", "Workout Planning", "Metrics"],
        playStore: "https://play.google.com/store/apps/details?id=me.wildfit.tribe",
        appStore: "https://apps.apple.com/us/app/wildfit-tribe/id6756008262",
        icon: "fa-users-cog",
        color: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"
    },
    aplivaaastu: {
        title: "ApliVaastu",
        subtitle: "PropTech & Property Discovery",
        date: "Real Estate Platform",
        desc: "Comprehensive real estate platform with advanced search filters, interactive map integration, image galleries, and lead management panels. Built with Clean Architecture (BLoC) and Node.js backend.",
        tags: ["Flutter", "Clean Architecture", "BLoC", "Node.js", "MongoDB"],
        playStore: "https://play.google.com/store/apps/details?id=com.applivaastu.app",
        appStore: "#",
        icon: "fa-building",
        color: "linear-gradient(135deg, #115e59 0%, #134e4a 100%)"
    }
};

const simTabs = document.querySelectorAll('.sim-tab');
const simScreen = document.getElementById('simScreen');
const simBoot = document.getElementById('simBoot');
const simAppIcon = document.getElementById('simAppIcon');
const simAppName = document.getElementById('simAppName');
const simAppSub = document.getElementById('simAppSub');
const simAppDate = document.getElementById('simAppDate');
const simAppDesc = document.getElementById('simAppDesc');
const simAppTags = document.getElementById('simAppTags');
const simPlayBtn = document.getElementById('simPlayBtn');
const simAppStoreBtn = document.getElementById('simAppStoreBtn');

function switchProject(projKey) {
    const data = projectData[projKey];
    if (!data) return;

    // Trigger Lottie-style Boot/Sync sequence
    simBoot.classList.add('active');
    
    setTimeout(() => {
        // Update content
        simScreen.style.background = data.color;
        
        simAppIcon.className = `fas ${data.icon} sim-card-icon-inner`;
        simAppName.textContent = data.title;
        simAppSub.textContent = data.subtitle;
        simAppDate.textContent = data.date;
        simAppDesc.textContent = data.desc;
        
        // Render Tags
        simAppTags.innerHTML = '';
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'sim-tag';
            span.textContent = tag;
            simAppTags.appendChild(span);
        });

        // Set Link Buttons
        if (data.playStore && data.playStore !== '#') {
            simPlayBtn.href = data.playStore;
            simPlayBtn.style.display = 'inline-flex';
        } else {
            simPlayBtn.style.display = 'none';
        }

        if (data.appStore && data.appStore !== '#') {
            simAppStoreBtn.href = data.appStore;
            simAppStoreBtn.style.display = 'inline-flex';
        } else {
            simAppStoreBtn.style.display = 'none';
        }

        // Complete Boot sequence
        setTimeout(() => {
            simBoot.classList.remove('active');
        }, 300);
    }, 400);
}

simTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        simTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const proj = tab.getAttribute('data-project');
        switchProject(proj);
    });
});

// 3. Skills Circuit Board Interaction
const circuitNodes = document.querySelectorAll('.circuit-node');
const circuitPaths = document.querySelectorAll('.circuit-path');
const activeNodeSkillList = document.getElementById('activeNodeSkillList');
const activeNodeName = document.getElementById('activeNodeName');

const nodeSkills = {
    power: {
        name: "Power Supply: Backend & Databases",
        skills: ["Node.js", "Firebase", "Serverpod", "Python", "RESTful APIs", "WebSocket", "MongoDB", "SQL / NoSQL", "Payment Gateways"]
    },
    micro: {
        name: "Microprocessor: Core Logic",
        skills: ["Flutter", "Dart", "BLoC", "Riverpod", "Provider", "GetX", "Clean Architecture", "Hexagonal Architecture", "MVVM"]
    },
    peripherals: {
        name: "Peripherals: Native & IoT Platforms",
        skills: ["Native iOS (Swift)", "Native Android (Kotlin)", "BLE (Bluetooth Low Energy)", "ESP32 / Arduino", "MQTT & IoT Protocols", "Sensors Integration", "Raspberry Pi"]
    },
    tools: {
        name: "Bus Matrix: System Tools & AI",
        skills: ["Git & Version Control", "XCode & Android Studio", "Unit & Integration Testing", "VAPT & Security Auditing", "Gemini AI / Generative AI Integration", "CI/CD Pipelines"]
    }
};

circuitNodes.forEach(node => {
    node.addEventListener('click', () => {
        const nodeType = node.getAttribute('data-node');
        
        // Toggle Active Node highlight
        circuitNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        // Play click sound using AudioContext synth
        playBeep();

        // Highlight connected pathways
        circuitPaths.forEach(path => {
            const pathNode = path.getAttribute('data-from');
            if (pathNode === nodeType) {
                path.classList.add('pulse');
                // Remove pulse animation after some runs so it restarts clean
                setTimeout(() => {
                    path.classList.remove('pulse');
                }, 2000);
            }
        });

        // Display current node description and skills list
        const info = nodeSkills[nodeType];
        if (info) {
            activeNodeName.textContent = info.name;
            activeNodeSkillList.innerHTML = '';
            info.skills.forEach(skill => {
                const li = document.createElement('li');
                li.className = 'active-skill-item';
                li.innerHTML = `<i class="fas fa-microchip skill-chip-icon"></i> ${skill}`;
                activeNodeSkillList.appendChild(li);
            });
            
            // Trigger animation on container reveal
            const panel = document.querySelector('.active-skills-display');
            panel.style.animation = 'none';
            panel.offsetHeight; // Trigger reflow
            panel.style.animation = 'glowBorderPulse 1s ease-out';
        }
    });
});

// Synthesize a retro circuit/button click sound
function playBeep() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // 800Hz
        oscillator.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
        // Fallback if AudioContext is blocked or unsupported
    }
}

// 4. Interactive Resume Switch (Smart Switch)
const resumeSwitch = document.getElementById('resumeSwitch');
const printerIndicator = document.getElementById('printerIndicator');
const printerPaper = document.getElementById('printerPaper');
const switchStatusText = document.getElementById('switchStatusText');

if (resumeSwitch) {
    resumeSwitch.addEventListener('change', () => {
        if (resumeSwitch.checked) {
            playBeep();
            switchStatusText.textContent = "Resume status: PRINTING...";
            printerIndicator.classList.add('printing');
            printerPaper.classList.add('eject');
            
            // Eject paper, download PDF, toggle back
            setTimeout(() => {
                // Download file
                const downloadLink = document.createElement('a');
                downloadLink.href = 'resume.pdf';
                downloadLink.download = 'Nitish_Rajguru_Resume.pdf';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                switchStatusText.textContent = "Resume status: COMPLETED";
                
                setTimeout(() => {
                    resumeSwitch.checked = false;
                    printerIndicator.classList.remove('printing');
                    printerPaper.classList.remove('eject');
                    switchStatusText.textContent = "Resume: STANDBY";
                }, 2000);
            }, 3000);
        }
    });
}

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://formspree.io/f/mojwpvge", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Sleek Lottie-style success checkmark injection
                const successOverlay = document.createElement('div');
                successOverlay.className = 'form-success-overlay';
                successOverlay.innerHTML = `
                    <div class="success-checkmark-box">
                        <div class="success-checkmark">
                            <i class="fas fa-check-circle animated-check"></i>
                        </div>
                        <h3>Data Sync Successful</h3>
                        <p>Message logged into the cloud server. I will connect with you soon!</p>
                    </div>
                `;
                contactForm.style.position = 'relative';
                contactForm.appendChild(successOverlay);
                
                setTimeout(() => {
                    successOverlay.classList.add('active');
                }, 10);
                
                contactForm.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    alert(data.errors.map(error => error["message"]).join(", "));
                } else {
                    alert("Oops! There was a problem submitting your form");
                }
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form");
        } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Intersection Observer for slide/fade reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Stats Counter Animation
function animateCounter(element, target, duration = 1800) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-card h3');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number && !stat.dataset.animated) {
                    stat.dataset.animated = 'true';
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    const animateElements = document.querySelectorAll(
        '.timeline-item, .contact-item, .about-text, .stat-card, .simulator-wrapper, .circuit-board-container, .smart-switch-card'
    );

    animateElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Trigger highlight active menu element
window.addEventListener('scroll', highlightActiveSection);
window.addEventListener('load', highlightActiveSection);
