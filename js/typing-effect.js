class TypingEffect {
    constructor(element, texts, typingSpeed = 120, deletingSpeed = 60, pauseDuration = 2000) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.pauseDuration = pauseDuration;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isPaused) {
            setTimeout(() => {
                this.isPaused = false;
                this.isDeleting = true;
                this.type();
            }, this.pauseDuration);
            return;
        }

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            setTimeout(() => this.type(), this.deletingSpeed);
        } else {
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            setTimeout(() => this.type(), this.typingSpeed);
        }

        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            this.isPaused = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        }
    }

    start() {
        this.type();
    }
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing-text');
    const codeSnippets = [
        'const passion = "Teaching";',
        'while(true) { learn(); teach(); grow(); }',
        'function inspireStudents() { return "Success"; }',
        'class TeachingJourney { constructor() { this.passion = "Infinite"; } }'
    ];

    const typingEffect = new TypingEffect(typingText, codeSnippets);
    typingEffect.start();
}); 