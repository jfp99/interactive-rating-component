document.addEventListener('DOMContentLoaded', function() {
    //DOM Elements
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.getElementById('submit-btn');
    const ratingState = document.querySelector('.rating-state');
    const thankYouState = document.querySelector('.thank-you-state');
    const selectedRatingDisplay = document.getElementById('selected-rating');
    let selectedRating = 0;

    // Hanlde rating button clicks
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class
            ratingButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class
            this.classList.add('active');
            // Store the selected rating
            selectedRating = this.dataset.rating;
        });
    });

    // Handle form submission
    submitButton.addEventListener('click', function() {
        if(selectedRating === 0) {
            alert('Please select a rating before submitting');
            return;
        }

        // Update the thx message with the selected ring
        selectedRatingDisplay.textContent = selectedRating;

        // Switch States
        ratingState.classList.remove('active');
        thankYouState.classList.add('active')

    });
});
