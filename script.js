const form = document.querySelector('#budget-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const budget = document.querySelector('#budget').value;
  const message = document.querySelector('#message').value;
  
  const whatsappMessage = `Olá, meu nome é ${name}, meu e-mail é ${email}, meu telefone é ${phone} e gostaria de um orçamento no valor de R$ ${budget}. Minha mensagem é a seguinte: ${message}`;
  
  const whatsappLink = `https://wa.me/5541998473182?text=${encodeURIComponent(whatsappMessage)}`;
  
  window.open(whatsappLink);
});
