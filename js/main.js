let header = document.querySelector('h1')
let phoneSize = window.matchMedia('(max-width:760px)')

if(phoneSize.matches){
    header.textContent = 'OUR TEAM'
}

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  