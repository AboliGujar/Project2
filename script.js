let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function showImage(index) {
    const slider = document.querySelector('.slider-images');
    // Adjust the slider's position to show the correct image
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Show the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// Show the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Auto-slide functionality
function autoSlide() {
    setInterval(() => {
        nextImage();
    }, 3000); // Change image every 3 seconds
}

// Initialize the auto-slide
autoSlide();
