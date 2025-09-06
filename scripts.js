
//header//
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

//genre//
const genres = document.querySelectorAll('.genre');

genres.forEach((genre) => {
    genre.addEventListener('click', () => {
        // Highlight selected genre
        genres.forEach((g) => g.classList.remove('selected'));
        genre.classList.add('selected');
    });
});

//autoplay//
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("my-video");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play(); // Autoplay when visible
          } else {
            video.pause(); // Pause when not visible
          }
        });
      },
      {
        threshold: 0.5, // Video starts when 50% of it is visible
      }
    );
  
    observer.observe(video);
  });

  
  //snow//
  document.addEventListener("DOMContentLoaded", () => {
  const sec2 = document.querySelector(".sec2");

  // Function to create a snowflake
  function createSnowflakeSec2() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake-sec2");
    snowflake.textContent = "❄"; // Snowflake character
    snowflake.style.left = Math.random() * 120 + "vw"; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 5 + 10 + "s"; // Adjusted fall speed (5s to 10s)
    snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + "rem"; // Random size

    sec2.appendChild(snowflake);

    // Remove the snowflake after its animation ends
    setTimeout(() => {
      snowflake.remove();
    }, 10000); // Matches the max animation duration
  }

  // Create snowflakes at intervals
  setInterval(createSnowflakeSec2, 400); // Create fewer snowflakes for a gentle effect
});


//spell//
const letters = document.querySelectorAll('.letter');

function scatterLetters() {
  letters.forEach(letter => {
    const randomX = Math.random() * 300 - 150; // Random X (-150 to 150)
    const randomY = Math.random() * 300 - 150; // Random Y (-150 to 150)

    // Apply random translations
    letter.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });

  // Bring letters back after 3 seconds
  setTimeout(gatherLetters, 3000);
}

function gatherLetters() {
  letters.forEach(letter => {
    letter.style.transform = `translate(0, 0)`; // Reset to original position
  });

  // Restart the scatter effect after 3 seconds
  setTimeout(scatterLetters, 3000);
}

// Start the animation
scatterLetters();



//gallery//
const galleryWrapper = document.querySelector('.gallery-wrapper');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

// Scroll Left
scrollLeftBtn.addEventListener('click', () => {
  galleryWrapper.scrollBy({ left: -200, behavior: 'smooth' });
});

// Scroll Right
scrollRightBtn.addEventListener('click', () => {
  galleryWrapper.scrollBy({ left: 200, behavior: 'smooth' });
});
