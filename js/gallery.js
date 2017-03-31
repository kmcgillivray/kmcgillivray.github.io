(function() {
  var thumbnails = document.querySelectorAll('[data-thumbnail]');
  var modal = document.getElementById('gallery-modal');
  var modalImage = document.getElementById('gallery-modal-image');

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(e) {
      e.preventDefault();
      var image = this.dataset.image;
      modal.className = 'db flex fixed bg-dark-gray w-100';
      setTimeout(function() {
        modal.className += ' open';
      });
      modalImage.src = '/img/' + image;
    });
  }

  modal.addEventListener('click', function(e) {
    modal.className = 'dn fixed bg-dark-gray';
  });
})();
