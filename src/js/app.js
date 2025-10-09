// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
});

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (!projectsGrid) {
        console.error('Projects grid element not found');
        return;
    }

    projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

function createProjectCard(project) {
    const linksHTML = project.links.map(link => {
        const buttonClass = link.type === 'primary' 
            ? 'bg-gray-900 text-white hover:bg-gray-800' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200';
        
        return `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg text-sm font-medium transition-colors ${buttonClass}">
                ${link.text}
            </a>
        `;
    }).join('');

    const techTagsHTML = project.techStack.map(tech => 
        `<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">${tech}</span>`
    ).join('');

    return `
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <!-- Project Image -->
            <div class="aspect-video bg-gray-100 overflow-hidden">
                <img src="${project.image}" 
                     alt="${project.title}" 
                     class="w-full h-full object-cover"
                     onerror="this.src='https://via.placeholder.com/400x250/f3f4f6/6b7280?text=Image+Not+Found'">
            </div>
            
            <!-- Project Content -->
            <div class="p-6">
                <!-- Title -->
                <h3 class="text-xl font-bold text-gray-900 mb-3">${project.title}</h3>
                
                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-4">
                    ${techTagsHTML}
                </div>
                
                <!-- Description -->
                <p class="text-gray-600 text-sm leading-relaxed mb-6">${project.description}</p>
                
                <!-- Action Buttons -->
                <div class="flex gap-3">
                    ${linksHTML}
                </div>
            </div>
        </div>
    `;
}

// Function to add a new project (for future backend integration)
function addProject(projectData) {
    projects.push(projectData);
    renderProjects();
}

// Function to remove a project
function removeProject(projectId) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index > -1) {
        projects.splice(index, 1);
        renderProjects();
    }
}
