document.addEventListener("DOMContentLoaded", function () {
  // Create the first div element
  const div1 = document.createElement("div");
  div1.className = "first-div flex items-center";
  document.body.appendChild(div1);

  // Create the second div element
  const div2 = document.createElement("div");
  div2.className = "second-div";
  document.body.appendChild(div2);

  const parallaxContainer = document.createElement("div");
  parallaxContainer.id = "paralax1";
  parallaxContainer.className =
    "mb-20 sm:mb-20 mt-24 sm:mt-44 lg:mt-44 sm:flex justify-evenly mx-2 sm:mx-10 lg:mx-32 items-center";
  div1.appendChild(parallaxContainer);

  const circleData = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
  ];

  const isMobile = window.innerWidth < 768;
  let hoveredCircleIndex = null;

  // Add styles dynamically
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
      .circle-box {
        width: ${isMobile ? "110px" : "210px"};
        height: ${isMobile ? "110px" : "210px"};
        border-radius: 50%;
        margin-right: 4rem;
        animation: moveAround 5s linear infinite alternate;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease-in;
        margin-bottom: 20px;
        padding: 0 20px;
      }
  
      @media (max-width: 728px) {
        .circle-box {
          margin-right: 2vw;
          margin-left: 2vw;
          margin-bottom: 0;
        }
      }
  
      @media (max-width: 1024px) {
        .circle-box {
          margin-right: 2vw;
          margin-left: 2vw;
          width: 110px;
          height: 110px;
        }
      }
  
      .circle-box.mobile .circle-description {
        display: none;
      }
  
      .circle-box.hovered {
        background-color: #a4bac8;
        animation-play-state: paused;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                    0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
  
      .circle-description {
        display: none;
        background-color: transparent;
        padding: 10px;
        text-align: center;
        color: white;
        font-size: 14px;
        font-weight: 400;
      }
  
      .circle-description.visible {
        display: block;
      }
  
      .circle-box-1:hover .circle-description,
      .circle-box-2:hover .circle-description,
      .circle-box-3:hover .circle-description,
      .circle-box-4:hover .circle-description,
      .circle-box-5:hover .circle-description {
        display: block;
      }
  
      .circle-box-1 {
        animation-name: moveAround1;
      }
  
      .circle-box-2 {
        animation-name: moveAround2;
      }
  
      .circle-box-3 {
        animation-name: moveAround3;
      }
  
      .circle-box-4 {
        animation-name: moveAround4;
      }
  
      .circle-box-5 {
        animation-name: moveAround5;
      }
  
      @keyframes moveAround1 {
        0% {
          transform: translate(30px, 10px);
        }
        100% {
          transform: translate(10px, -40px);
        }
      }
  
      @media (max-width: 720px) {
        @keyframes moveAround1 {
          0% {
            transform: translate(30px, 10px);
          }
          100% {
            transform: translate(10px, -10px);
          }
        }
      }
  
      @keyframes moveAround2 {
        0% {
          transform: translate(0, 2px);
        }
        100% {
          transform: translate(-20px, 30px);
        }
      }
  
      @media (max-width: 720px) {
        @keyframes moveAround2 {
          0% {
            transform: translate(0, 2px);
          }
          100% {
            transform: translate(-10px, 15px);
          }
        }
      }
  
      @keyframes moveAround3 {
        0% {
          transform: translate(0, -10px);
        }
        100% {
          transform: translate(-50px, 3px);
        }
      }
  
      @media (max-width: 720px) {
        @keyframes moveAround3 {
          0% {
            transform: translate(0, -10px);
          }
          100% {
            transform: translate(-30px, 3px);
          }
        }
      }
  
      @keyframes moveAround4 {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(-30px, -10px);
        }
      }
  
      @media (max-width: 720px) {
        @keyframes moveAround4 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-10px, -5px);
          }
        }
      }
  
      @keyframes moveAround5 {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(20px, -30px);
        }
      }
  
      @media (max-width: 720px) {
        @keyframes moveAround5 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(10px, 0px);
          }
        }
      }
    `;
  document.head.appendChild(styleElement);

  const heading1 = document.createElement("h1");
  heading1.textContent = "Blobs Title 1 Blobs Title 2";
  heading1.className = `sm:text-start tilt-in-right-1 text-center text-2xl mb-5 lg:mb-7 sm:text-[43px] sm:leading-[50px] lg:text-5xl lg:max-w-[350px] lg:leading-[60px] font-semibold ${
    isMobile ? "tilt-in-right-1" : ""
  }`;
  heading1.style.color = "var(--carousel_h1)";
  div1.appendChild(heading1);

  const hrElement = document.createElement("hr");
  hrElement.className =
    "h-1 rounded-xl sm:rotate-90 flex justify-center items-center sm:block sm:mx-0 mx-[12vw] mb-5 sm:mb-0 sm:w-56 lg:w-24 tracking-in-expand";
  hrElement.style.background = "var(--carousel_hr)";
  div1.appendChild(hrElement);

  const paragraph = document.createElement("p");
  paragraph.className = `sm:text-xl tilt-in-right-2 sm:text-start text-center ${
    isMobile ? "tilt-in-right-2" : ""
  }`;
  paragraph.style.color = "var(--carousel_h1)";
  paragraph.textContent = "Blobs Text 1 Blobs Text 2";
  div1.appendChild(paragraph);

  // Create the circle container for the second div
  const circleContainer = document.createElement("div");
  circleContainer.className =
    "flex flex-row justify-between text-center items-center font-semibold text-white fade-in-bck";
  div2.appendChild(circleContainer);
  for (let index = 0; index < circleData.length; index++) {
    const circle = circleData[index];
    const circleBox = document.createElement("div");
    circleBox.className = `circle-box circle-box-${
      index + 1
    } shadow-md shadow-white border-[1px] ${
      hoveredCircleIndex === index ? "hovered" : ""
    } ${isMobile ? "mobile-circle-box" : ""}`;
    circleBox.style.backgroundImage =
      "linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3)";
    circleBox.addEventListener("mouseenter", () => handleCircleHover(index));
    circleBox.addEventListener("mouseleave", handleCircleLeave);

    const circleTitle = document.createElement("div");
    circleTitle.className = "circle-title";
    circleTitle.textContent = circle.title;

    const circleDescription = document.createElement("div");
    circleDescription.className = `circle-description ${
      hoveredCircleIndex === index ? "visible" : ""
    }`;
    circleDescription.textContent = circle.description;

    circleBox.appendChild(circleTitle);
    circleBox.appendChild(circleDescription);
    circleContainer.appendChild(circleBox);
  }

  function handleCircleHover(index) {
    if (!isMobile) {
      hoveredCircleIndex = index;
      updateCircleStyles();
    }
  }

  function handleCircleLeave() {
    hoveredCircleIndex = null;
    updateCircleStyles();
  }

  function updateCircleStyles() {
    const circleBoxes = document.querySelectorAll(".circle-box");
    circleBoxes.forEach((box, index) => {
      const title = box.querySelector(".circle-title");
      const description = box.querySelector(".circle-description");

      if (index === hoveredCircleIndex) {
        box.classList.add("hovered");
        title.classList.add("hidden");
        description.classList.add("visible");
      } else {
        box.classList.remove("hovered");
        title.classList.remove("hidden");
        description.classList.remove("visible");
      }
    });
  }
});
