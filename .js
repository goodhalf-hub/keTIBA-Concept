// Set the date we're counting down to
const countDownDate = new Date("December 1, 2024 00:00:00").getTime(); // Change the date and time as needed

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the corresponding elements
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown-timer").innerHTML = "<h2>The event has started!</h2>";
    }
}, 1000);

document.querySelector('.countdown-timer').addEventListener('mouseover', () => {
    setTimeout(() => {
        document.querySelector('.timer').style.opacity = '1';
    }, 200); // Delay of 200ms
});




// Get the categories section and the new images
const categoriesSection = document.querySelector('.categories');
const newImages = document.querySelector('.new-images');

// Add mouseover and mouseout event listeners
categoriesSection.addEventListener('mouseover', () => {
    newImages.style.opacity = '0'; // Hide new images when hovering
    newImages.style.transform = 'translateY(20px)'; // Slide down
});

categoriesSection.addEventListener('mouseout', () => {
    newImages.style.opacity = '1'; // Show new images when hovering out
    newImages.style.transform = 'translateY(0)'; // Slide up
});
