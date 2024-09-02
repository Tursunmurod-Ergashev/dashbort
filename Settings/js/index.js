
const menuItems = document.querySelectorAll('.menu-items');

// LocalStorage dan saqlangan bo'limni olish va tiklash
window.addEventListener('DOMContentLoaded', () => {
    const selectedMenuItem = localStorage.getItem('selectedMenu');
    
    if (selectedMenuItem) {
        document.getElementById(selectedMenuItem).classList.add('selected');
    }
});

// Menyu elementlari uchun hodisalar qo'shish
menuItems.forEach(items => {
    items.addEventListener('click', () => {
        // Avvalgi tanlangan elementdan 'selected' klassini olib tashlash
        document.querySelector('.menu-items.selected')?.classList.remove('selected');
        
        // Tanlangan elementga 'selected' klassini qo'shish
        items.classList.add('selected');
        
        // Tanlangan elementni LocalStorage da saqlash
        localStorage.setItem('selectedMenu', items.id);
    });
});