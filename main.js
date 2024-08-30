document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      image: "ApselVendor.jpg",
      title: "Drive sales and manage your store",
      subtext:
        "Seamlessly respond to customer enquiries, take orders, collect payment and track sales automatically",
    },
    {
      image: "ApselVendor.jpg",
      title: "Expand customer reach",
      subtext:
        "Enhance your customer reach through Apsel market, the go-to platform for shoppers.",
    },
    {
      image: "ApselVendor.jpg",
      title: "Enhance Customer Trust",
      subtext:
        "Validate your business to enhance customer trust and leverage escrow services for confident payments.",
    },
  ];

  let currentSlide = 0;

  const carouselImage = document.getElementById("carousel-image");
  const carouselTitle = document.getElementById("carousel-title");
  const carouselSubtext = document.getElementById("carousel-subtext");

  function updateSlide() {
    carouselImage.src = slides[currentSlide].image;
    carouselTitle.textContent = slides[currentSlide].title;
    carouselSubtext.textContent = slides[currentSlide].subtext;
  }

  function goToNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }

  function goToPrevSlide() {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    updateSlide();
  }

  document.querySelector(".next-btn").addEventListener("click", goToNextSlide);
  document.querySelector(".prev-btn").addEventListener("click", goToPrevSlide);

  setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

  // Mobile Navbar Toggle
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinksMobile = document.querySelector(".nav-links-mobile");

  hamburgerMenu.addEventListener("click", () => {
    navLinksMobile.classList.toggle("active");
  });
});
