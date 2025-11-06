// Projects data - Easy to modify and add new projects!
const projects = [
    {
        id: 1,
        title: "DormFindr",
        description: "Mockup dorm e-boards for University of Michigain Students. Meet people in your hallway without knocking and leave notes.",
        image: "images/dormfindr.png",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: [
            { text: "Website", url: "https://dormfindr.up.railway.app/", type: "primary" },
            { text: "GitHub", url: "#", type: "secondary" }
        ]
    },
    {
        id: 2,
        title: "Lol-Clacks",
        description: "League of Legends based physics ball game, based on popular instagram page @Earclacks. Check out @lol_clacks for some battles :) ",
        image: "images/lolclacks.JPEG",
        techStack: ["html", "javascript", "ctx"],
        links: [
            { text: "Website", url: "https://lolclacks.vercel.app", type: "primary" }
        ]
    },
    {
        id: 3,
        title: "Sample Project 3",
        description: "A third example project demonstrating the grid layout. Each project card includes an image, description, tech stack, and action buttons.",
        image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Project+3",
        techStack: ["Python", "Django", "PostgreSQL"],
        links: [
            { text: "Try It", url: "#", type: "primary" }
        ]
    },
    
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}
