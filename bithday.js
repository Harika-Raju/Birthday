document.addEventListener("DOMContentLoaded", function() {
    let cake = document.querySelector(".cake-button");
    let poem = document.querySelector(".poem");
    let poemText = `HThrough every storm, through every night,
You held my hand, you gave me light.

Your words so calm, your heart so kind,
A better soul, I’ll never find.

In every fight, in every play,
Our love just grows in its own way.

You guide my path, you make me see,
The best of life, the best in me.

So stay the same, don’t change a bit,
'Cause you are perfect—just admit!

`;

    cake.addEventListener("click", function() {
        // Move cake to center
        cake.classList.add("cake-move");

        // After reaching the center, burst effect
        setTimeout(() => {
            cake.classList.add("cake-burst");
        }, 1000);

        // Show poem after cake bursts
        setTimeout(() => {
            cake.style.display = "none"; // Hide cake
            poem.style.display = "block"; // Show poem
            typePoem(poem, poemText);
        }, 1500);
    });
});

// Function to create typing effect
function typePoem(element, text) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust speed of typing
        }
    }
    type();
}
