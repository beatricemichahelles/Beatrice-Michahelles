document.addEventListener('DOMContentLoaded', function () {
  var imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(function (container) {
    var overlay = container.querySelector('.overlay');
    var description = container.querySelector('.description');
    var image = container.querySelector('img');

    container.addEventListener('mouseover', function () {
      showOverlay(overlay, description, image);
    });

    container.addEventListener('mouseout', function () {
      hideOverlay(overlay, description, image);
    });
  });
});

function showOverlay(overlay, description, image) {
  overlay.style.background = 'rgba(0, 0, 0, 0.7)';
  image.style.filter = 'brightness(20%)';
  description.style.opacity = '1';
}

function hideOverlay(overlay, description, image) {
  overlay.style.background = 'transparent';
  image.style.filter = 'brightness(100%)';
  description.style.opacity = '0';
}
