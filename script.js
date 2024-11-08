document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  // 


  // Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slides img");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  showSlide(currentSlide);

  

  // Tabs - Set Default Active Tab
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // Set the first tab and pane as active by default
  tabButtons[0].classList.add("active");
  tabPanes[0].classList.add("active");

  // Tab Switching Functionality
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetTab = button.dataset.tab;

      // Remove active class from all buttons and panes
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabPanes.forEach(pane => pane.classList.remove("active"));

      // Add active class to the clicked button and the corresponding pane
      button.classList.add("active");
      document.querySelector(`.tab-pane[data-content="${targetTab}"]`).classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
      const moreContent = button.previousElementSibling.querySelector(".more-content"); // this will search within the p tag
       
      if (moreContent.style.display === "none" || !moreContent.style.display) {
        moreContent.style.display = "inline";
        button.textContent = "Show Less";
      } else {
        moreContent.style.display = "none";
        button.textContent = "Read More";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("slider-modal");
  const closeModalBtn = document.querySelector(".close-modal");
  const slider = modal.querySelector(".slider");
  const prevSlideBtn = document.querySelector(".prev-slide");
  const nextSlideBtn = document.querySelector(".next-slide");
  let currentSlideIndex = 0;

  // Function to open modal and load dynamic images
  const openModal = (images) => {
    slider.innerHTML = ""; // Clear previous images
    images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("slide");
      img.classList.add(index === 0 ? "active" : "blurred"); // First image active, others blurred
      slider.appendChild(img);
    });

    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
    currentSlideIndex = 0;
    showSlide(currentSlideIndex);
  };

  // Function to close modal
  const closeModal = () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto"; // Restore background scrolling
  };

  // Show the active slide and blur others
  const showSlide = (index) => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "blurred");
      if (i === index) {
        slide.classList.add("active");
        slide.style.width = "90vw"; // Clear image
        slide.style.height = "70vh";
      } else {
        slide.classList.add("blurred");
        slide.style.width = "60%"; // Smaller size for blurred images
        slide.style.height = "60%";
      }
    });
  };

  // Navigate to the next slide
  const nextSlide = () => {
    currentSlideIndex = (currentSlideIndex + 1) % slider.children.length;
    showSlide(currentSlideIndex);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    currentSlideIndex = (currentSlideIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(currentSlideIndex);
  };

  // Event Listeners for Thumbnails
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", (event) => {
      const images = event.target.closest(".tab-pane").dataset.images.split(",");
      openModal(images); // Load images from the dataset
    });
  });

  closeModalBtn.addEventListener("click", closeModal);
  nextSlideBtn.addEventListener("click", nextSlide);
  prevSlideBtn.addEventListener("click", prevSlide);
});

document.addEventListener("DOMContentLoaded", () => {
  const faqBoxes = document.querySelectorAll(".faq-box");

  faqBoxes.forEach(box => {
    const toggleButton = box.querySelector(".toggle-btn");
    const answer = box.querySelector(".faq-answer");

    toggleButton.addEventListener("click", () => {
      // Toggle the visibility of the answer
      const isOpen = box.classList.contains("open");

      if (isOpen) {
        // Close the box
        box.classList.remove("open");
      } else {
        // Open the box and collapse any others
        // faqBoxes.forEach(otherBox => {
        //   if (otherBox !== box) {
        //     otherBox.classList.remove("open");
        //   }
        // });
        box.classList.add("open");
      }
    });
  });
});


// Accordion Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
      const toggleButton = item.querySelector(".accordion-title");

      toggleButton.addEventListener("click", () => {
          // Close other open items
          accordionItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove("active");
              }
          });

          // Toggle current item
          item.classList.toggle("active");
      });
  });
});






