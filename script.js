
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const words = ["Developer.", "Designer.", "Programmer."]; 
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 150; 
const erasingSpeed = 100; 
const delay = 1000; 
const targetElement = document.getElementById("changing-text");

function type() {
    
    const currentWord = words[wordIndex];

    
    if (charIndex < currentWord.length) {
        targetElement.textContent += currentWord.charAt(charIndex);
        charIndex++;
        
        setTimeout(type, typingSpeed);
    } else {
        
        setTimeout(erase, delay);
    }
}

function erase() {
    const currentWord = words[wordIndex];

    
    if (charIndex > 0) {
        targetElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        
        setTimeout(erase, erasingSpeed);
    } else {
        
        wordIndex++;
       
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
        
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});