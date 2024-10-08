
const menuItems = document.querySelectorAll('.menu-item');

window.addEventListener('DOMContentLoaded', () => {
    const selectedMenuItem = localStorage.getItem('selectedMenu');
    
    if (selectedMenuItem) {
        document.getElementById(selectedMenuItem).classList.add('selected');
    }
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {

        document.querySelector('.menu-item.selected')?.classList.remove('selected');
        

        item.classList.add('selected');
        

        localStorage.setItem('selectedMenu', item.id);
    });
});
const toggle = document.getElementById('darkModeToggle');

        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
 });


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

               function toggleMenu() {
                var menu = document.getElementById("menu");
                if (menu.style.display === "block") {
                    menu.style.display = "none";
                } else {
                    menu.style.display = "block";
                }
            }