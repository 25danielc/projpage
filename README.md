# Daniel Chen - Portfolio

Easy website for projects: built with HTML, CSS, JavaScript, and Tailwind CSS.

## Project Structure

- `src/index.html` - Main portfolio page
- `src/js/projects.js` - Project data (easy to add new projects)
- `src/js/app.js` - JavaScript functionality
- `src/input.css` - Tailwind CSS directives
- `src/dist/output.css` - Generated CSS (created after running dev or build)
- `src/images/` - Project images
- `tailwind.config.js` - Tailwind configuration

## Adding New Projects

Edit `src/js/projects.js` and add a new project object, it's super easy to understand:

```javascript
{
    id: 4,
    title: "Your Project Name",
    description: "What your project does and why you built it.",
    image: "images/your-project.jpg", // or URL
    techStack: ["React", "Node.js", "MongoDB"],
    links: [
        { text: "Live Demo", url: "https://your-site.com", type: "primary" },
        { text: "GitHub", url: "https://github.com/your-repo", type: "secondary" }
    ]
}
```

## Features

- ✅ Responsive design (mobile-friendly)
- ✅ Clean, modern UI with Tailwind CSS
- ✅ Easy project management via JSON
- ✅ Links open in new tabs
- ✅ Hover effects and smooth transitions
- ✅ Tech stack tags for each project

#projpage
