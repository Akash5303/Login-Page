const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.login');
const register = document.querySelector('.register');
const loginlink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
registerLink.addEventListener('click', ()=> {
    register.classList.add('active');
    login.classList.remove('active');
    
});
loginlink.addEventListener('click', ()=> {
    login.classList.add('active');
     register.classList.remove('active');
   

});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
