const toggleOpenBtn = document.getElementById('menu_icon');
const toggleCloseBtn = document.getElementById('close_menu_icon');
const navBar = document.getElementById('nav_two');

toggleOpenBtn.addEventListener('click', function (){
  navBar.style.display = 'flex';
});

toggleCloseBtn.addEventListener('click', function (){
  navBar.style.display = 'none'; 
})