// Day 8: Skill Cards Stagger Reveal
document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
