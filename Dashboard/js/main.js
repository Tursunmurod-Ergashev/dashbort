
const menuItems = document.querySelectorAll('.menu-item');

// LocalStorage dan saqlangan bo'limni olish va tiklash
window.addEventListener('DOMContentLoaded', () => {
    const selectedMenuItem = localStorage.getItem('selectedMenu');
    
    if (selectedMenuItem) {
        document.getElementById(selectedMenuItem).classList.add('selected');
    }
});

// Menyu elementlari uchun hodisalar qo'shish
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Avvalgi tanlangan elementdan 'selected' klassini olib tashlash
        document.querySelector('.menu-item.selected')?.classList.remove('selected');
        
        // Tanlangan elementga 'selected' klassini qo'shish
        item.classList.add('selected');
        
        // Tanlangan elementni LocalStorage da saqlash
        localStorage.setItem('selectedMenu', item.id);
    });
});
// onclik
const toggle = document.getElementById('darkModeToggle');

        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
 });

//  chatjs
const ctx = document.getElementById('financesChart').getContext('2d');

const financesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE'],
        datasets: [
            {
                label: 'Income',
                data: [15, 40, 25, 20, 30, 35],
                backgroundColor: 'rgba(0, 200, 0, 1)', // Green
                borderWidth: 1,
               
            },
            {
                label: 'Expense',
                data: [5, 10, 15, 25, 20, 10],
                backgroundColor: 'rgba(0, 200, 0, 0.3)', // Light Green
                borderWidth: 1,
                
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                    callback: function(value) { return value + 'M'; }
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 20
                }
            }
        },
        maintainAspectRatio: false
    }
});


const chtx = document.getElementById('donutChart').getContext('2d'); 
 const donutChart = new Chart(chtx,{
    type: 'doughnut', 
    data: { labels: ['Label 1', 'Label 2', 'Label 3'], 
      datasets: [{ 
        data: [31, 53, 16], 
         backgroundColor: ['#FFA500', '#00FF00', '#CCFFCC'], 
          hoverBackgroundColor: ['#FF8C00', '#32CD32', '#ADFF2F'], 
          borderWidth: 2,
         }] }, options: { 
          responsive: true, 
          maintainAspectRatio: false, 
          cutout: '70%',
           plugins: { 
             tooltip: { 
               enabled: false } } } });