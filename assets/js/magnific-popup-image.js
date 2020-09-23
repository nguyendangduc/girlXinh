$(document).ready(function(){
    $('.gallery--vietnamese').magnificPopup({
      
        delegate: '.gallery-figcaption__link', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled:true}
        // other options
      });
      $('.gallery--asean').magnificPopup({
        delegate: '.gallery-figcaption__link', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled:true}
        // other options
      });
      $('.gallery--america').magnificPopup({
        delegate: '.gallery-figcaption__link', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled:true}
        // other options
      });
      $('.gallery--other').magnificPopup({
        delegate: '.gallery-figcaption__link', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled:true}
        // other options
      });
      $(".mfp-title").html("<a>hihi</a>");
});