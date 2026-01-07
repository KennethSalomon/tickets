/* --- JAVASCRIPT --- */
        
        // Sélection des éléments du DOM
        const track = document.getElementById('track');
        const slides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const container = document.getElementById('carouselContainer');

        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoSlideInterval;

        // Fonction pour mettre à jour la position du carrousel
        function updateCarousel() {
            // On déplace la piste vers la gauche selon l'index actuel
            // Index 0 = 0%, Index 1 = -100%, Index 2 = -200%, etc.
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Fonction pour aller à l'image suivante
        function nextSlide() {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0; // Retour au début si on est à la fin
            }
            updateCarousel();
        }

        // Fonction pour aller à l'image précédente
        function prevSlide() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1; // Aller à la dernière si on est au début
            }
            updateCarousel();
        }

        // --- Gestion des événements ---

        // Clic sur les boutons
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer(); // Réinitialise le timer automatique après un clic manuel
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });

        // --- Automatisation ---

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 3000); // Change toutes les 3000ms (3 secondes)
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Fonction pour redémarrer le timer après une interaction
        function resetTimer() {
            stopAutoSlide();
            startAutoSlide();
        }

        // Arrêter le défilement quand la souris est sur le carrousel
        container.addEventListener('mouseenter', stopAutoSlide);

        // Reprendre le défilement quand la souris quitte le carrousel
        container.addEventListener('mouseleave', startAutoSlide);

        // Lancer le carrousel au démarrage
        startAutoSlide();
