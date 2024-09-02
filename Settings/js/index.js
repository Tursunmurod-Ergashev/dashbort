
const menuItems = document.querySelectorAll('.menu-items');

window.addEventListener('DOMContentLoaded', () => {
    const selectedMenuItem = localStorage.getItem('selectedMenu');
    
    if (selectedMenuItem) {
        document.getElementById(selectedMenuItem).classList.add('selected');
    }
});

menuItems.forEach(items => {
    items.addEventListener('click', () => {
    
        document.querySelector('.menu-items.selected')?.classList.remove('selected');
        
        items.classList.add('selected');
        

        localStorage.setItem('selectedMenu', items.id);
    });
});