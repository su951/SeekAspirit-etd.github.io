document.addEventListener('DOMContentLoaded', () => {

    // --- Modal Logic ---
    window.openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    };

    window.closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            // Stop any media playing inside
            const video = modal.querySelector('video');
            const audio = modal.querySelector('audio');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    };
    
    // Close modal on Escape key press
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
     // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal(this.id);
            }
        });
    });

    // --- Prayer Wall Logic ---
    const prayerForm = document.getElementById('prayer-form');
    const prayerInput = document.getElementById('prayer-input');
    const prayerWall = document.getElementById('prayer-wall');

    // For a real website, you would fetch prayers from a server.
    // We'll use Local Storage for a persistent client-side demo.
    const savedPrayers = JSON.parse(localStorage.getItem('prayers')) || [];
    savedPrayers.forEach(addPrayerToWall);

    if(prayerForm) {
        prayerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const prayerText = prayerInput.value.trim();

            if (prayerText) {
                addPrayerToWall(prayerText);
                
                // Save to local storage
                savedPrayers.push(prayerText);
                localStorage.setItem('prayers', JSON.stringify(savedPrayers));
                
                prayerInput.value = '';
            }
        });
    }

    function addPrayerToWall(text) {
        if(!prayerWall) return;
        const note = document.createElement('div');
        note.classList.add('prayer-note');
        // Sanitize text to prevent HTML injection
        note.textContent = text;
        prayerWall.appendChild(note);
    }
});