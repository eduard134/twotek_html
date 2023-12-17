document.addEventListener('DOMContentLoaded', function () {
  // Verifică dacă există elementul cu id-ul "review"
  const reviewElement = document.getElementById("review");
  if (reviewElement) {
      let language = localStorage.getItem('selectedLanguage') || 'ro';

      function getTranslatedContent(lang) {
          const translations = {
              ro: {
                  ReviewApiSudexTitle: 'Title in Romanian',
                  ReviewApiSudexText: 'Description in Romanian',
                  ReviewADTitle: 'Another Title in Romanian',
                  ReviewADText: 'Another Description in Romanian',
                  ReviewSandutaArtTitle: 'Yet Another Title in Romanian',
                  ReviewSAText: 'Yet Another Description in Romanian',
              },
              en: {
                  ReviewApiSudexTitle: 'Title in English',
                  ReviewApiSudexText: 'Description in English',
                  ReviewADTitle: 'Another Title in English',
                  ReviewADText: 'Another Description in English',
                  ReviewSandutaArtTitle: 'Yet Another Title in English',
                  ReviewSAText: 'Yet Another Description in English',
              },
              ru: {
                  ReviewApiSudexTitle: 'Title in Russian',
                  ReviewApiSudexText: 'Description in Russian',
                  ReviewADTitle: 'Another Title in Russian',
                  ReviewADText: 'Another Description in Russian',
                  ReviewSandutaArtTitle: 'Yet Another Title in Russian',
                  ReviewSAText: 'Yet Another Description in Russian',
              },
              // Adăugați traduceri pentru alte limbi
          };

          return translations[lang];
      }

      let isVisible = false;
      let isVisible2 = false;
      let isVisible3 = false;
      let isVisible4 = false;
      let hasAnimated = false;

      let reviewData = {
          title: '',
          description: '',
          mainImage: '/images/misha.png',
      };

      function setLanguage(lang) {
          localStorage.setItem('selectedLanguage', lang);
          language = lang;
      }

      function updateReviewData() {
          const content = getTranslatedContent(language);
          reviewData = {
              title: content.ReviewApiSudexTitle,
              description: content.ReviewApiSudexText,
              mainImage: '/images/misha.png',
          };
      }

      function handleIntersection(ref, callback) {
          const observer = new IntersectionObserver(entries => {
              const entry = entries[0];
              if (entry.isIntersecting) {
                  callback();
                  observer.unobserve(ref);
              }
          });
          observer.observe(ref);
      }

      setLanguage(language);
      const content = getTranslatedContent(language);
      updateReviewData();

      function handleImageClick(newData) {
          reviewData = newData;
          updateReviewData();
          render();
      }

      function render() {
          const root = document.getElementById('review');

          if (!root) {
              console.error("Error: Review element not found.");
              return;
          }

          root.innerHTML = `
              <div class="flex sm:mt-96 lg:mt-32 justify-around items-center bg-black border-white border-y-[.1px] text-black p-7 lg:p-20">
                  <div>
                      <div class="bg-white p-10 rounded-bl-[20%] rounded-tr-[20%] rounded-md shadow-md shadow-white mb-10">
                          <h1 id="myRef" class="text-start font-semibold text-xl sm:text-3xl lg:text-4xl mb-5 ${isVisible ? 'fade-in-top' : ''}">
                              ${reviewData.title}
                          </h1>
                          <p id="h1Ref" class="text-start sm:text-xl sm:max-w-[700px] ${isVisible2 ? 'fade-in-left1' : ''}">
                              ${reviewData.description}
                          </p>
                      </div>
                      <div id="h2Ref" class="flex justify-between ${isVisible3 ? 'scale-in-center' : ''}">
                          <!-- Image 1 -->
                          <div onclick="handleImageClick({ title: 'ReviewApiSudexTitle', description: 'ReviewApiSudexText', mainImage: '/images/misha.png' })" class="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out cursor-pointer">
                              <img src="/images/misha.png" alt="" class="rounded-[50%] w-[24vw] sm:w-[17vw] lg:w-[9vw]">
                          </div>
                          <!-- Image 2 -->
                          <div onclick="handleImageClick({ title: 'ReviewADTitle', description: 'ReviewADText', mainImage: '/images/viorel.png' })" class="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out cursor-pointer">
                              <img src="/images/viorel.png" alt="" class="rounded-[50%] w-[24vw] sm:w-[17vw] lg:w-[9vw]">
                          </div>
                          <!-- Image 3 -->
                          <div onclick="handleImageClick({ title: 'ReviewSandutaArtTitle', description: 'ReviewSAText', mainImage: '/images/vasea.png' })" class="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out cursor-pointer">
                              <img src="/images/vasea.png" alt="" class="rounded-[50%] w-[24vw] sm:w-[17vw] lg:w-[9vw]">
                          </div>
                      </div>
                  </div>
                  <div id="h3Ref" class="hidden sm:block ${isVisible4 ? 'tilt-in-fwd-br' : ''}">
                      <img src="${reviewData.mainImage}" alt="" width="307" height="298">
                  </div>
              </div>
          `;

          if (!hasAnimated) {
              const myRef = document.getElementById('myRef');
              const h1Ref = document.getElementById('h1Ref');
              const h2Ref = document.getElementById('h2Ref');
              const h3Ref = document.getElementById('h3Ref');

              if (myRef) handleIntersection(myRef, () => { isVisible = true; hasAnimated = true; render(); });
              if (h1Ref) handleIntersection(h1Ref, () => { isVisible2 = true; hasAnimated = true; render(); });
              if (h2Ref) handleIntersection(h2Ref, () => { isVisible3 = true; hasAnimated = true; render(); });
              if (h3Ref) handleIntersection(h3Ref, () => { isVisible4 = true; hasAnimated = true; render(); });
          }
      }

      render();
  } else {
      console.error("Error: Review element not found.");
  }
});
