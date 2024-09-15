const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");

toggleSkillsButton?.addEventListener("click", () => {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
    }
});
