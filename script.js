/* script.js */
document.querySelectorAll('.photo img').forEach(image => {
    image.addEventListener('click', () => {
        // Create the modal container
        const modal = document.createElement('div');
        modal.classList.add('modal');

        // Add the modal content
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
          </div>
        `;

        // Append the modal to the body
        document.body.appendChild(modal);

        // Close the modal on clicking the close button
        modal.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Close the modal on clicking outside the modal content
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });
});
