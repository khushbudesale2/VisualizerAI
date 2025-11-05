const reviewsContainer = document.querySelector(".reviews-container");
const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const reviewWidth = 340; // Width of a review (including margin/gap)

nextButton.addEventListener("click", () => {
  currentIndex++;
  const maxIndex = document.querySelectorAll(".review").length - 2; // Allow only partial scroll
  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }
  reviewsContainer.style.transform = `translateX(-${
    currentIndex * reviewWidth
  }px)`;
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  reviewsContainer.style.transform = `translateX(-${
    currentIndex * reviewWidth
  }px)`;
});
