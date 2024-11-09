// Toggle Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Enroll in a course (display an alert)
function enrollInCourse(courseName) {
    alert(`You have successfully enrolled in the "${courseName}" course!`);
}

// Countdown Timer Functionality
function startCountdown() {
    // Set the date for the next live course (example: December 1, 2024)
    const courseDate = new Date("Dec 1, 2024 12:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = courseDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown ends
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "The course has started!";
        }
    }, 1000);
}

// Start the countdown on page load
window.onload = startCountdown;