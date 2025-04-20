class Timeline {
    constructor() {
        this.timeline = document.querySelector('.timeline');
        this.entries = [
            {
                date: '2024',
                title: 'Started Teaching Journey',
                description: 'Began preparing for a career in IT education',
                type: 'education',
                icon: 'fa-graduation-cap',
                color: 'blue'
            },
            {
                date: '2023',
                title: 'Web Development Bootcamp',
                description: 'Completed intensive training in modern web development',
                type: 'education',
                icon: 'fa-code',
                color: 'blue'
            },
            {
                date: '2023',
                title: 'First Teaching Experience',
                description: 'Volunteered as a coding mentor for beginners',
                type: 'work',
                icon: 'fa-chalkboard-teacher',
                color: 'green'
            },
            {
                date: '2022',
                title: 'CSS Certification',
                description: 'Completed CSS programming certification',
                type: 'certification',
                icon: 'fa-certificate',
                color: 'yellow'
            },
            {
                date: '2022',
                title: 'Personal Projects',
                description: 'Developed several web applications using JavaScript and CSS',
                type: 'project',
                icon: 'fa-project-diagram',
                color: 'purple'
            },
            {
                date: '2021',
                title: 'Self-Study Journey',
                description: 'Began learning programming through online resources',
                type: 'self-study',
                icon: 'fa-book',
                color: 'red'
            }
        ];

        this.initializeTimeline();
    }

    initializeTimeline() {
        this.entries.forEach((entry, index) => {
            const timelineItem = this.createTimelineItem(entry, index);
            this.timeline.appendChild(timelineItem);
        });
    }

    createTimelineItem(entry, index) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        
        const dot = document.createElement('div');
        dot.className = `timeline-dot bg-${entry.color}-700`;
        
        const icon = document.createElement('i');
        icon.className = `fas ${entry.icon} text-${entry.color}-400 text-xl mb-2`;
        
        const date = document.createElement('div');
        date.className = 'text-sm text-gray-400 mb-1';
        date.textContent = entry.date;
        
        const title = document.createElement('h3');
        title.className = 'text-xl font-bold mb-2 text-white';
        title.textContent = entry.title;
        
        const description = document.createElement('p');
        description.className = 'text-gray-300';
        description.textContent = entry.description;
        
        const details = document.createElement('div');
        details.className = 'mt-4 hidden';
        
        const tags = this.createSkillTags(entry);
        details.appendChild(tags);
        
        const toggleButton = document.createElement('button');
        toggleButton.className = 'mt-2 text-blue-400 hover:text-blue-300';
        toggleButton.textContent = 'Show Details';
        toggleButton.onclick = () => this.toggleDetails(details, toggleButton);
        
        content.appendChild(icon);
        content.appendChild(date);
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(details);
        content.appendChild(toggleButton);
        
        item.appendChild(content);
        item.appendChild(dot);
        
        return item;
    }

    createSkillTags(entry) {
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'flex flex-wrap gap-2';
        
        const skills = this.getSkillsForEntry(entry);
        skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'px-2 py-1 bg-gray-600 rounded-full text-sm text-gray-200';
            tag.textContent = skill;
            tagsContainer.appendChild(tag);
        });
        
        return tagsContainer;
    }

    getSkillsForEntry(entry) {
        const skillMap = {
            'Web Development Bootcamp': ['JavaScript', 'HTML', 'CSS', 'React'],
            'CSS Certification': ['CSS', 'Data Structures', 'Algorithms'],
            'Personal Projects': ['JavaScript', 'CSS', 'Git', 'Web Development'],
            'Self-Study Journey': ['Programming Basics', 'Problem Solving']
        };
        
        return skillMap[entry.title] || [];
    }

    toggleDetails(details, button) {
        const isHidden = details.classList.contains('hidden');
        details.classList.toggle('hidden');
        button.textContent = isHidden ? 'Hide Details' : 'Show Details';
        
        if (isHidden) {
            details.style.maxHeight = details.scrollHeight + 'px';
        } else {
            details.style.maxHeight = '0';
        }
    }
}

// Initialize timeline
document.addEventListener('DOMContentLoaded', () => {
    new Timeline();
}); 