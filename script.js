/* ==========================================================================
   BUILD RIGHT - CORE ENGINE & ANALYTICS INTERACTION (WELL-TRAINED ARCHITECT)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Build Right Core System Engine: Active and Operational.");

    // 1. DYNAMIC NAVIGATION HIGHLIGHTER (SEO FRIENDLY TRACKING)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Scroll calculation with offset spacing
            if (pageYOffset >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSectionId)) {
                link.classList.add("active");
            }
        });
    });

    // 2. WHATSAPP CLICK ENGINE INTEGRATION
    // Automatic event logging for lead quality monitoring
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Can append conversion metrics here if Google Analytics is hooked
            console.log("Lead Redirect Triggered: WhatsApp Chat Connected Successfully.");
        });
    });

    // 3. SECURE ACTION FOR TELEPHONY EVENTS
    const callButtons = document.querySelectorAll('a[href*="tel:"]');
    callButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Direct Phone Call Dialed to Registered Hotline: +91 9987974496");
        });
    });
});
