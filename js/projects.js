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
        id: 3,
        title: "lolclacks",
        description: "got bored during winter break because my mom blocked #leagueoflegends, developed a physics engine emulating league characters inspod (ripped off from) by @earclacks on insta :) ",
        image: "images/lolclacks.JPEG",
        techStack: ["html", "javascript", "ctx"],
        links: [
            { text: "Website", url: "https://lolclacks.vercel.app", type: "primary" }
        ]
    },
    {
        id: 2,
        title: "SnapTask",
        description: "AI-powered job matching platform that connects clients with skilled workers for projects. Workers create profiles with skills, location, and availability, while clients post projects and get AI-matched with suitable workers who can accept, complete, and get reviewed for their work.",
        image: "images/snaptask.png",
        techStack: ["Next.js", "Supabase", "TypeScript"],
        links: [
            { text: "Website", url: "https://snaptask-ai.vercel.app/", type: "primary" }
        ]
    },
    {
        id: 4,
        title: "New Years Bubbles",
        description: "Add your project description here.",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=New+Years+Bubbles",
        techStack: ["Tech", "Stack", "Here"],
        links: [
            { text: "Website", url: "#", type: "primary" }
        ]
    }
    
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}
