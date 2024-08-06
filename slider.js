const images = ["images/1st one.jpg", "images/2nd one.jpg", "images/3rd one.jpg","images/4th one.jpg","images/5th.jpg","images/6th one.jpg"];
let currentImageIndex = 0;
const sliderImage = document.getElementById('sliderImage');

function showImage(index) {
    if (index < 0) {
        currentImageIndex = images.length - 1;
    } else if (index >= images.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }
    sliderImage.src = images[currentImageIndex];
}

function nextSlide() {
    showImage(currentImageIndex + 1);
}

function prevSlide() {
    showImage(currentImageIndex - 1);
}


showImage(currentImageIndex);
setInterval(nextSlide,3000);

const slogans = [
    "Donate Blood, Save Lives.",
    "Be a Hero. Give Blood.",
    "Your Blood Can Give Someone Another Chance at Life.",
    "Blood Donation is a Gift of Life.",
    "Share a Little, Care a Little, Donate Blood.",
    "A Pint of Blood Can Save Three Lives.",
    "Give the Gift of Life: Donate Blood.",
    "Donate Blood, Be the Reason for Someone's Heartbeat.",
    "Your Blood is Precious: Save a Life Today.",
    "Be a Lifesaver, Donate Blood."
];

let currentIndex = 0;
const marqueeElement = document.getElementById('sloganMarquee');

function updateMarquee() {
    marqueeElement.textContent = slogans[currentIndex];
    currentIndex = (currentIndex + 1) % slogans.length;
}

marqueeElement.addEventListener('animationiteration', updateMarquee);

updateMarquee(); 
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}

