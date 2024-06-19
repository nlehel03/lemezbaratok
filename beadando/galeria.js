document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = new bootstrap.Modal(document.getElementById('photoModal'));
    const modalImage = document.getElementById('modalImage');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            modalImage.src = this.src;
            modal.show();
        });
    });
});