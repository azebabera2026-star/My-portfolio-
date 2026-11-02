// Day 8: Skill Cards Stagger Reveal
document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
// Day 10: Skills Category Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skills-card, .skill-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        skillCards.card.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// Day 11: Animated Counters for Experience & Projects
const counters = document.querySelectorAll('.about-stats h3, .stats-card h3, .about-grid h3'); // እንደየ HTML መዋቅርሽ
let animated = false;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const aboutSection = document.querySelector('#about');
    
    if (aboutSection) {
        const sectionTop = aboutSection.offsetTop;
        
        if (scrollPos >= sectionTop && !animated) {
            const experienceCounter = document.querySelector('.about-stats div:nth-child(1) h3, .stats-card:nth-child(1) h3');
            const projectsCounter = document.querySelector('.about-stats div:nth-child(2) h3, .stats-card:nth-child(2) h3');
            
            animated = true;
        }
    }
});