// Projects data - Easy to modify and add new projects!
const projects = [
    {
        id: 1,
        title: "DormFindr",
        description: "Earliest development project, Mockup dorm e-boards for University of Michigain Students. Meet people in your hallway without knocking and leave notes.",
        image: "images/dormfindr.png",
        techStack: ["HTML", "CSS", "JavaScript"],
        links: [
            { text: "Website", url: "https://dormfindr.up.railway.app/", type: "primary" },
            { text: "GitHub", url: "#", type: "secondary" }
        ]
    },
    {
        id: 2,
        title: "SnapTask",
        description: "AI-powered job matching platform that connects clients with skilled workers for projects. Workers create profiles with skills, location, and availability, while clients post projects and get AI-matched with suitable workers who can accept, complete, and get reviewed for their work.",
        image: "images/snaptask2.png",
        techStack: ["Next.js", "Supabase", "TypeScript"],
        links: [
            { text: "Website", url: "https://snaptask-ai.vercel.app/", type: "primary" }
        ]
    },
    {
        id: 3,
        title: "lolclacks",
        description: "got bored during winter break because my mom blocked #leagueoflegends, developed a physics engine emulating league characters inspod (ripped off from) by @earclacks on insta :) ",
        image: "images/lolclacks.JPEG",
        techStack: ["HTML", "Javascript", "Canvas"],
        links: [
            { text: "Website", url: "https://lolclacks.vercel.app", type: "primary" }
        ]
    },
    {
        id: 4,
        title: "Ski Sim",
        description: "2 day project during skiing trip with friends when I was tired af on the couch, inspired by cross country skiiers, simple temple run esque game.",
        image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Ski+Sim",
        techStack: ["Canvas", "TypeScript"],
        links: [
            { text: "Website", url: "https://skisim.vercel.app/", type: "primary" }
        ]
    },
    {
        id: 5,
        title: "Euler's Method Exploration",
        description: "An exploration of Euler's method and its variations using Wolfram Mathematica. Basically diving into this numerical method for solving differential equations, looked at the classic Euler method, improved Euler (Heun's method), and some higher-order variations. Compared how accurate and stable they are, made some cool visualizations of the solution curves, and analyzed the errors. Pretty interesting to see how choosing different step sizes and methods affects the results.",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Euler%27s+Method",
        techStack: ["Wolfram Mathematica"],
        links: [
            { text: "PDF", url: "https://pdflink.to/eulerexploration/", type: "primary" }
        ]
    },
    {
        id: 6,
        title: "YearZero",
        description: "New Year's resolution app that gamifies resolutions, developed over winter break at home. Basically turns your goals into a game, you set resolutions, do daily challenges, earn points and badges, and track your progress. I needed it to stay motivated way more fun than just writing down goals and forgetting about them.",
        image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=YearZero",
        techStack: ["Next.js", "TypeScript"],
        links: [
            { text: "Website", url: "#", type: "primary" }
        ]
    }
    
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}
