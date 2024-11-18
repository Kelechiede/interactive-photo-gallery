/* script.js */
document.querySelectorAll('.photo img').forEach(image => {
    image.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${image.src}" alt="${image.alt}">
        </div>
      `;
      document.body.appendChild(modal);
  
      modal.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });
  });
  