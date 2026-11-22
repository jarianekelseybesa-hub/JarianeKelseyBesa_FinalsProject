
const skills = [
    {
        title: "COMMUNICATION SKILLS",
        description: "I can communicate and share my ideas with other people. I also value listening and understanding different opinions.",
        image: "images/communication.png"
    },
    {
        title: "TIME-MANAGEMENT",
        description: "I know how to manage my time so I can finish a task before the deadline. I know what to prioritize first rather than cramming and procrastinating.",
        image: "images/time-management.png"
    },
    {
        title: "TEAMWORK",
        description: "I can work with other people, share ideas, and cooperate to accomplish tasks and achieve common goals.",
        image: "images/teamwork.png"
    }
];

let currentSkill = 1;

const skillImage = document.getElementById("skillImage");
const skillTitle = document.getElementById("skillTitle");
const skillDescription = document.getElementById("skillDescription");

const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

function showSkill(index) {
    currentSkill = index;

    const previousIndex = (currentSkill - 1 + skills.length) % skills.length;
    const nextIndex = (currentSkill + 1) % skills.length;


    skillImage.src = skills[currentSkill].image;
    skillTitle.textContent = skills[currentSkill].title;
    skillDescription.textContent = skills[currentSkill].description;

    prevImage.src = skills[previousIndex].image;
    nextImage.src = skills[nextIndex].image;
}

document.getElementById("nextBtn").addEventListener("click", function() {
    currentSkill = (currentSkill + 1) % skills.length;
    showSkill(currentSkill);
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentSkill = (currentSkill - 1 + skills.length) % skills.length;
    showSkill(currentSkill);
});

showSkill(currentSkill);