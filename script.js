// const carousel = document.querySelector('.carousel');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');

//     let currentIndex = 0;
//     const totalCards = 6;
//     const cardsPerView = 3;

//     function updateCarousel() {
//       const offset = -(currentIndex * 50.1);
//       carousel.style.transform = `translateX(${offset}%)`;
//     }

//     nextButton.addEventListener('click', () => {
//       if (currentIndex < totalCards / cardsPerView - 1) {
//         currentIndex++;
//         updateCarousel();
//       }
//     });

//     prevButton.addEventListener('click', () => {
//       if (currentIndex > 0) {
//         currentIndex--;
//         updateCarousel();
//       }
//     });



     // Add animation when elements come into view
     function checkVisibility() {
      const aboutSection = document.getElementById('about');
      const bounding = aboutSection.getBoundingClientRect();

      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
          aboutSection.querySelector('h1').classList.remove('hidden');
          aboutSection.querySelector('h1').classList.add('visible');
          aboutSection.querySelector('p').classList.remove('hidden');
          aboutSection.querySelector('p').classList.add('visible');
          aboutSection.querySelector('.features').classList.remove('hidden');
          aboutSection.querySelector('.features').classList.add('visible');
      }
  }

  // Trigger visibility check on scroll and page load
  document.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);

const topCards = document.querySelector('.top-cards');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

const totaltopCards = 8;

function topCarousel() {
  const offset = -(currentIndex * 12.32);
  topCards.style.transform = `translateX(${offset}%)`;
}

arrowRight.addEventListener('click', () => {
  if (currentIndex < totaltopCards - cardsPerView ) {
    currentIndex++;
  }
  else {
    currentIndex = 0; // Loop back to start
  }
    topCarousel();
  
});

arrowLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;

  }
  else {
    currentIndex = totaltopCards - cardsPerView; // Loop back to end
  }
    topCarousel();
  
});
// setInterval(() => {
//   currentIndex = (currentIndex +1) % totaltopCards; // Loop back to the first card
//   topCarousel();
// },3000);




function showDetails(title, description) {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1000';

  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = 'white';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '10px';
  modalContent.style.textAlign = 'center';
  modalContent.style.width = '90%';
  modalContent.style.maxWidth = '500px';

  const modalTitle = document.createElement('h2');
  modalTitle.innerText = title;
  modalTitle.style.color = '#007BFF';

  const modalDescription = document.createElement('p');
  modalDescription.innerText = description;
  modalDescription.style.color = '#555';
  modalDescription.style.marginTop = '10px';

  const closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.style.marginTop = '20px';
  closeButton.style.padding = '10px 20px';
  closeButton.style.backgroundColor = '#007BFF';
  closeButton.style.color = 'white';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '5px';
  closeButton.style.cursor = 'pointer';
  closeButton.onclick = () => document.body.removeChild(modal);

 
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  }




  // ------------campuses-------
//   const slidesContainer = document.querySelector('.campus-slides');
// const slides = slidesContainer.children;
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const totalSlides = slides.length;

// let currentIndex1 = 1;


// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[totalSlides - 1].cloneNode(true);

// slidesContainer.appendChild(firstClone);
// slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

// slidesContainer.style.transform = `translateX(-${currentIndex1 * 50}%)`;

// const updateSlider = () => {
//   slidesContainer.style.transition = 'transform 0.5s ease-in-out';
//   slidesContainer.style.transform = `translateX(-${currentIndex1 * 50}%)`;
// };

// nextBtn.addEventListener('click', () => {
//   currentIndex1++;
//   updateSlider();
//   if (currentIndex1 === totalSlides) {
//     setTimeout(() => {
//       slidesContainer.style.transition = 'none';
//       currentIndex1 = 0;
//       slidesContainer.style.transform = `translateX(-${currentIndex1 * 50}%)`;
//     }, 500);
//   }
// });

// prevBtn.addEventListener('click', () => {
//   currentIndex1--;
//   updateSlider();
//   if (currentIndex1 === 0) {
//     setTimeout(() => {
//       slidesContainer.style.transition = 'none';
//       currentIndex1 = totalSlides - 0;
//       slidesContainer.style.transform = `translateX(-${currentIndex1 * 50}%)`;
//     }, 500);
//   }
// });




const slidesContainer = document.querySelector('.campus-slides');
  const slides = slidesContainer.children;
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const totalSlides = slides.length;

  let currentIndex = 1;

  // Clone the first and last slides for seamless looping
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

  // Set the initial position
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  const updateSlider = () => {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
    if (currentIndex === totalSlides) {
      setTimeout(() => {
        slidesContainer.style.transition = 'none';
        currentIndex = 0;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 500);
    }
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
    if (currentIndex === 0) {
      setTimeout(() => {
        slidesContainer.style.transition = 'none';
        currentIndex = totalSlides - 0;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 500);
    }
  });































//   const carousel1 = document.querySelector('.carousel');
// const prevButton1 = document.getElementById('prev');
// const nextButton1 = document.getElementById('next');

// let currentIndex3 = 0; 
// const totalCards3 = 6; 
// const cardsPerView3 = 3; 

// function updateCarousel3() {
//   const isSmallScreen = window.matchMedia('(max-width: 600px)').matches;

//   if (isSmallScreen) {
   
//     const offsett = -(currentIndex3 * (300 / cardsPerView3)); 
//     carousel1.style.transform = `translateY(${offsett}%)`;
//   } else {
    
//     const offsett = -(currentIndex3 * (300 / cardsPerView3)); 
//     carousel1.style.transform = `translateX(${offsett}%)`;
//   }
// }


// nextButton1.addEventListener('click', () => {
//   if (currentIndex3 < Math.ceil(totalCards3 / cardsPerView3) - 1) {
//     currentIndex3++;
//     updateCarousel3();
//   }
// });

// prevButton1.addEventListener('click', () => {
//   if (currentIndex3 > 0) {
//     currentIndex3--;
//     updateCarousel3();
//   }
// });


// window.addEventListener('resize', updateCarousel3);


// updateCarousel3();






const carousell = document.querySelector('.carousel');
const prevButtonn = document.getElementById('prev');
const nextButtonn = document.getElementById('next');

let currentIndex3 = 0; // Current index of the set of cards
const totalCards3 = 6; // Total number of cards
const cardsPerView3 = 3; // Number of cards visible at a time

function updateCarousell() {
  const screenWidth = window.innerWidth; // Get the screen width

  if (screenWidth <= 600) {
    // For screens <= 600px: Vertical scrolling
    const offsett = -(currentIndex3 * 100); // Move vertically by 100% of the card height
    carousell.style.transform = `translateY(${offsett}%)`;
  } else {
    // For screens > 600px: Horizontal scrolling
    const offsett = -(currentIndex3 * 50.1); // Move horizontally by 100% of the card width
    carousell.style.transform = `translateX(${offsett}%)`;
  }
}

// Handle "Next" button click
nextButtonn.addEventListener('click', () => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 600) {
    // For small screens: Vertical scrolling
    if (currentIndex3 < Math.ceil(totalCards3 / cardsPerView3) - 1) {
      currentIndex3++;
      updateCarousell();
    }
  } else {
    // For large screens: Horizontal scrolling
    if (currentIndex3 < totalCards3 / cardsPerView3 - 1) {
      currentIndex3++;
      updateCarousell();
    }
  }
});

// Handle "Previous" button click
prevButtonn.addEventListener('click', () => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 600) {
    // For small screens: Vertical scrolling
    if (currentIndex3 > 0) {
      currentIndex3--;
      updateCarousell();
    }
  } else {
    // For large screens: Horizontal scrolling
    if (currentIndex3 > 0) {
      currentIndex3--;
      updateCarousell();
    }
  }
});

// Update the carousel layout dynamically when resizing the screen
window.addEventListener('resize', updateCarousell);

// Initialize the carousel on page load
updateCarousell();




