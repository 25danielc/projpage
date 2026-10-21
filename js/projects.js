// Projects data - Easy to modify and add new projects!
const projects = [
    {
        id: 7,
        title: "DUOQUEUE",
        description: "League of Legends fan brawler, a top-down pixel-art arena fighter where you draft two champs and tag between them mid-fight. Has a Gauntlet campaign across Runeterra (Zaun, Piltover, Noxus, Ionia, Shadow Isles...) with bosses and stars to earn, plus Duo Queue, 3v3, Duel and local 2-player on keyboard or gamepad. No image or sound files at all, every sprite, arena and sound effect is generated in code.",
        techStack: ["JavaScript", "Canvas"],
        links: [
            { text: "Play", url: "https://duoqueued.com", type: "primary" }
        ]
    },
    {
        id: 8,
        title: "wohn.ai",
        description: "Wohn is an AI ring we're building: hold it and talk to hand a job to your AI agents, and it taps your finger when they need you or when they're done. I worked on the ring's hardware and firmware, and built the pre-order site: a scroll-driven 3D film of the ring (384 rendered frames scrubbed as you scroll), a checkout stage where you spin the ring and pick a finish, then the waitlist.",
        techStack: ["C++", "Microcontrollers", "SPI", "KiCad", "TypeScript", "Next.js"],
        links: [
            { text: "Website", url: "https://wohn.ai", type: "primary" }
        ]
    },
    {
        id: 11,
        title: "INSEAM",
        description: "Clothes that actually fit. Something I'm working on right now: try clothes on a 3D copy of your body before you buy them. It sews each size, drapes it on you with a cloth physics sim, and tells you where it's tight, good or loose. Early days, only t-shirts so far. More soon.",
        techStack: ["Python", "PyTorch"],
        links: []
    },
    {
        id: 9,
        title: "Shotgun",
        description: "Built solo at MHacks 2026. An AI agent for the car instead of another chatbot: plug your phone into CarPlay and the car calls you. Quick questions get answered on the call, bigger jobs (fix a bug and open a PR, research, send an email) get handed to background agents while you drive, and 3 minutes before you arrive it calls back with what got done. Nothing irreversible happens without a spoken \"yes\".",
        techStack: ["Python", "LLM APIs"],
        links: [
            { text: "Demo", url: "https://www.youtube.com/watch?v=P9eiu86cmdE", type: "primary" },
            { text: "GitHub", url: "https://github.com/25danielc/shotgun", type: "secondary" }
        ]
    },
    {
        id: 10,
        title: "Company Star Map",
        description: "Interactive 3D galaxy of startups and companies. Every company is a star, and the distance between stars is how similar their products actually are (from text embeddings of their descriptions). They clump into auto-named constellations like \"Launch Vehicles & Spacecraft\" or \"Payment Processing\".",
        techStack: ["TypeScript", "Embeddings"],
        links: [
            { text: "GitHub", url: "https://github.com/25danielc/workMap", type: "primary" }
        ]
    },
    {
        id: 1,
        title: "DormFindr",
        description: "Earliest development project, Mockup dorm e-boards for University of Michigain Students. Meet people in your hallway without knocking and leave notes.",
        techStack: ["JavaScript"],
        links: [
            { text: "Website", url: "https://dormfindr.up.railway.app/", type: "primary" }
        ]
    },
    {
        id: 2,
        title: "SnapTask",
        description: "AI-powered job matching platform that connects clients with skilled workers for projects. Workers create profiles with skills, location, and availability, while clients post projects and get AI-matched with suitable workers who can accept, complete, and get reviewed for their work.",
        techStack: ["TypeScript", "Next.js", "React"],
        links: [
            { text: "Website", url: "https://snaptask-ai.vercel.app/", type: "primary" }
        ]
    },
    {
        id: 3,
        title: "lolclacks",
        description: "got bored during winter break because my mom blocked #leagueoflegends, developed a physics engine emulating league characters inspod (ripped off from) by @earclacks on insta :) ",
        techStack: ["JavaScript"],
        links: [
            { text: "Website", url: "https://lolclacks.vercel.app", type: "primary" }
        ]
    },
    {
        id: 4,
        title: "Ski Sim",
        hidden: true,
        description: "2 day project during skiing trip with friends when I was tired af on the couch, inspired by cross country skiiers, simple temple run esque game.",
        techStack: ["TypeScript"],
        links: [
            { text: "Website", url: "https://skisim.vercel.app/", type: "primary" }
        ]
    },
    {
        id: 5,
        title: "Euler's Method Exploration",
        description: "An exploration of Euler's method and its variations using Wolfram Mathematica. Basically diving into this numerical method for solving differential equations, looked at the classic Euler method, improved Euler (Heun's method), and some higher-order variations. Compared how accurate and stable they are, made some cool visualizations of the solution curves, and analyzed the errors. Pretty interesting to see how choosing different step sizes and methods affects the results.",
        techStack: ["Mathematica"],
        links: [
            { text: "PDF", url: "https://pdflink.to/eulerexploration/", type: "primary" }
        ]
    },
    {
        id: 6,
        title: "YearZero",
        description: "New Year's resolution app that gamifies resolutions, developed over winter break at home. Basically turns your goals into a game, you set resolutions, do daily challenges, earn points and badges, and track your progress. I needed it to stay motivated way more fun than just writing down goals and forgetting about them.",
        techStack: ["TypeScript", "Next.js", "React"],
        links: [
            { text: "GitHub", url: "https://github.com/25danielc/YearZero", type: "primary" }
        ]
    }
    
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}
