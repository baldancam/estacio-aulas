(function () {
    emailjs.init("pHPSNM_GLwzfehnxe"); // Substitua pelo seu ID do usuário EmailJS
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    emailjs.sendForm('service_isxss0c', 'template_4f5jifa', this)
      .then(function () {
        alert('Mensagem enviada com sucesso! 👍');
      }, function (error) {
        alert('Erro: ' + JSON.stringify(error));
      });
  
    this.reset();
  });
  