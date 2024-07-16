document.addEventListener('DOMContentLoaded', () => {
    const userCountElement = document.getElementById('user-count');
    const animationContainer = document.getElementById('animation-container');
    const potatoImage = document.getElementById('potato');

    // Extract current counter value
    const userCountText = userCountElement.innerText;
    const currentCount = parseInt(userCountText.replace(/\D/g, ''), 10);

    // Decrement by 1 for initial display
    userCountElement.innerText = `${currentCount - 1} Idiots have visited the site`;

    // Show +1 animation
    animationContainer.innerText = '+1';
    void animationContainer.offsetWidth;  // Trigger reflow to restart the animation
    animationContainer.style.animation = 'pop-up 1s ease-out forwards';

    // Increment counter after animation
    setTimeout(() => {
        userCountElement.innerText = `${currentCount} Idiots have visited the site`;
    }, 1000);  // Match the animation duration

    // Function to create a falling potato
    function createFallingPotato() {
        const potato = document.createElement('img');
        potato.src = '/assests/potato.png';  // Adjust the path if necessary
        potato.classList.add('potato');

        // Randomize the horizontal position
        potato.style.left = `${Math.random() * 100}vw`;

        // Add the potato to the body
        document.body.appendChild(potato);

        // Triggering reflow to start animation
        void potato.offsetWidth;

        // Start animation
        potato.style.animation = 'fall 2s linear';

        // Remove the potato after the animation ends
        potato.addEventListener('animationend', () => {
            potato.remove();
        });
    }

    // Add event listener to the potato image
    potatoImage.addEventListener('click', () => {
        console.log('Potato image clicked');
        for (let i = 0; i < 10; i++) {
            setTimeout(createFallingPotato, i * 100);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fallingTextContainer = document.querySelector('.falling-text-container');

    // Function to show falling text
    function showFallingText() {
        fallingTextContainer.style.display = 'block';
        setTimeout(hideFallingText, 2000); // Hide after 2 seconds (adjust as needed)
    }

    // Function to hide falling text
    function hideFallingText() {
        fallingTextContainer.style.display = 'none';
        setTimeout(showFallingText, 5000); // Show again after 5 seconds
    }

    // Initially hide the falling text container
    fallingTextContainer.style.display = 'none';

    // Start showing falling text after initial delay
    setTimeout(showFallingText, 2000); // Show after 5 seconds initially
});

