// GSAP Coin Spin Animation
gsap.to(".coin-spin img", {
    rotation: 360,
    repeat: -1,
    duration: 10,
    ease: "none"
});

// Wealth Chart Animation
const ctx = document.getElementById('wealthChart').getContext('2d');
const wealthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Wealth Growth',
            data: [50, 100, 300, 500, 700, 1000],
            borderColor: '#FFD700',
            borderWidth: 2,
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            pointBackgroundColor: '#FFD700'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Appetite Meter Scroll Animation
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const meterFill = document.querySelector('.meter-fill');
    meterFill.style.width = `${scrollPos * 100}%`;
    document.getElementById('appetiteLevel').textContent = `${Math.floor(scrollPos * 100)}%`;
});

// Cursor Trail Effect
document.body.addEventListener('mousemove', function(e) {
    const cursorEffect = document.createElement('div');
    cursorEffect.classList.add('cursor-effect');
    cursorEffect.style.left = `${e.clientX}px`;
    cursorEffect.style.top = `${e.clientY}px`;
    document.body.appendChild(cursorEffect);
    setTimeout(() => cursorEffect.remove(), 800);
});

// Cursor Trail Effect on Social Icons
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        // Add custom hover effect (e.g., particles, glow, etc.)
        // Example: Change icon color or add a glow effect
        icon.style.filter = 'drop-shadow(0 0 5px #FFD700)';
    });

    icon.addEventListener('mouseleave', () => {
        // Reset the effect
        icon.style.filter = 'none';
    });
});
