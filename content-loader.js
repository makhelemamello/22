// Dynamic content loader for Netlify CMS integration
class PortfolioLoader {
    constructor() {
        this.loadContent();
    }

    async loadContent() {
        try {
            // Load settings
            await this.loadSettings();
            // Load about content
            await this.loadAbout();
            // Load skills
            await this.loadSkills();
            // Load projects would require a build step to convert YAML to JSON
            // For now, we'll use the static content in the HTML
        } catch (error) {
            console.log('Using static content - CMS data not available');
        }
    }

    async loadSettings() {
        // This would typically load from a generated JSON file
        // For now, we'll provide methods to update content
                const defaultSettings = {
            site_title: "Mamello Makhele Portfolio",
            name: "Mamello Makhele",
            job_title: "Public Health Leader & PhD Researcher",
            bio: "Fulbright Scholar and Bill Gates Hero in the Field, dedicated to transforming maternal and child health outcomes in underserved communities through innovative research and advocacy.",
            email: "mamello.makhele@unmc.edu",
            linkedin: "linkedin.com/in/mamello-makhele",
            github: "github.com/mamello",
            phone: "+1-xxx-xxx-xxxx"
        };

        this.updateSettings(settings);
    }

    updateSettings(settings) {
        // Update hero section
        const heroTitle = document.querySelector('.hero-title .highlight');
        if (heroTitle) {
            heroTitle.textContent = settings.name;
        }

        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = settings.job_title;
        }

        // Update contact links
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.href = `mailto:${settings.email}`;
            link.textContent = settings.email;
        });
    }

    async loadAbout() {
                const defaultAbout = {
            paragraph_1: "Driven by purpose and global recognition, I am a dedicated public health leader and registered nurse-midwife with more than five years of experience transforming maternal and child health (MCH) outcomes in underserved communities. Renowned as a Fulbright Scholar and recipient of the Bill Gates Heroes in the Field Award, I have pioneered impactful programs and forged partnerships with international organizations, governments, and grassroots leaders to advance sexual and reproductive health and rights (SRHR).",
            paragraph_2: "Currently, I am pursuing a PhD in Health Services Research at the University of Nebraska Medical Center—building on a foundation that includes an MPH and other honors. My academic journey empowers me to integrate rigorous research and innovative thinking into real-world solutions for MCH.",
            paragraph_3: "My story is rooted in a passion for advocating for women's and children's health, dismantling barriers to quality care, and fostering sustainable, data-driven change. From elevating youth voices on international platforms to spearheading award-winning HIV prevention and empowerment initiatives with the Barali Foundation, my commitment to equity, innovation, and measurable impact in MCH remains unwavering.",
            paragraph_4: "I invite you to join me in building healthier futures—where every woman and child has access to dignity and the opportunity to thrive."
        };

        this.updateAbout(about);
    }

    updateAbout(about) {
        const aboutText = document.querySelector('.about-text');
        if (aboutText) {
            const paragraphs = aboutText.querySelectorAll('p');
            if (paragraphs[0]) paragraphs[0].textContent = about.paragraph_1;
            if (paragraphs[1]) paragraphs[1].textContent = about.paragraph_2;
        }

        // Update stats
        const stats = document.querySelectorAll('.stat h3');
        if (stats[0]) stats[0].textContent = `${about.projects_count}+`;
        if (stats[1]) stats[1].textContent = `${about.years_learning}+`;
        if (stats[2]) stats[2].textContent = `${about.technologies_count}+`;
    }

    async loadSkills() {
        const skills = {
            frontend: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js"],
            backend: ["Node.js", "Python", "Java", "Express.js", "MongoDB"],
            tools: ["Git", "Docker", "AWS", "Figma", "VS Code"]
        };

        this.updateSkills(skills);
    }

    updateSkills(skills) {
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillCategories.forEach((category, index) => {
            const skillTags = category.querySelector('.skill-tags');
            let skillArray = [];
            
            switch(index) {
                case 0:
                    skillArray = skills.frontend;
                    break;
                case 1:
                    skillArray = skills.backend;
                    break;
                case 2:
                    skillArray = skills.tools;
                    break;
            }
            
            if (skillTags && skillArray.length > 0) {
                skillTags.innerHTML = skillArray
                    .map(skill => `<span class="skill-tag">${skill}</span>`)
                    .join('');
            }
        });
    }

    // Method to load projects dynamically (for future implementation)
    async loadProjects() {
        // This would load project data from CMS
        // For now, projects are static in HTML
        console.log('Projects loaded from static HTML');
    }
}

// Initialize the portfolio loader
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioLoader();
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioLoader;
}
