(function() {
  var thumbnails = document.querySelectorAll('[data-thumbnail]');

  if (window.innerWidth > 480) {
    var modal = document.getElementById('gallery-modal');
    var modalImage = document.getElementById('gallery-modal-image');

    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('click', function(e) {
        e.preventDefault();
        var image = this.dataset.image;
        modal.className = 'db fixed bg-dark-gray cover w-100 vh-100';
        setTimeout(function() {
          modal.className += ' open';
        });
        modalImage.src = '/img/' + image;
      });
    }

    modal.addEventListener('click', function(e) {
      modal.className = 'dn fixed bg-dark-gray cover w-100 vh-100';
    });
  } else {
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('click', function(e) {
        e.preventDefault();
      });
    }
  }
})();
