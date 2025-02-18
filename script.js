document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.querySelector(".question-container");
  const resultContainer = document.querySelector(".result-container");
  const gifResult = document.querySelector(".gif-result");
  const heartLoader = document.querySelector(".cssload-main");
  const yesBtn = document.querySelector(".js-yes-btn");
  const noBtn = document.querySelector(".js-no-btn");

  // Move the No button to a random position inside the container
  noBtn.addEventListener("mouseover", () => {
      const maxX = questionContainer.clientWidth - noBtn.clientWidth;
      const maxY = questionContainer.clientHeight - noBtn.clientHeight;

      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);

      noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
  });

  // Yes button functionality
  yesBtn.addEventListener("click", () => {
      questionContainer.style.display = "none";
      heartLoader.style.display = "block";

      setTimeout(() => {
          heartLoader.style.display = "none";
          resultContainer.style.display = "block";

          // Play video if available
          if (gifResult && typeof gifResult.play === "function") {
              gifResult.play();
          }
      }, 3000);
  });
});
