;(function(window) {
    'use strict';
  
    function Modal(button, config) {
      let $element = document.querySelector(config.content);
      let body = document.body;
      
      button.addEventListener('click', openModal, false);
      body.addEventListener('click', closeModal, false);
      
      $element.addEventListener('click', function(event) {
        event.stopPropagation();
      });
      
      document.addEventListener('keydown', function() {
        if (27 === event.keyCode) {
          closeModal();
        }
      }, false);
  
      function openModal(event) {
        event && event.stopPropagation();
        let modal = $element.classList;
        modal.add('opened');
        modal.remove('closed');
      }
  
      function closeModal(event) {
        let modal = $element.classList;
        modal.remove('opened');
        modal.add('closed');
      }
      
      this.open = openModal;
      this.close = closeModal;
    }
    window.Modal = Modal;
  }(window));
  

  let b1 = document.querySelector('.modal__btn');
  
  new Modal(b1, {
    content: '.modal__wrap'
  });
  