const ctx = document.getElementById('myChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(72, 219, 251, 1)');
gradient.addColorStop(1, 'rgba(72, 219, 251, 0)');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            label: 'Year 2023',
            data: [100, 200, 150, 175, 250, 200, 300, 250, 225, 275, 325, 400],
            backgroundColor: gradient,
            borderColor: '#48dbfb',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#48dbfb',
            pointRadius: 4,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'N' + value + 'k';
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return 'N' + context.parsed.y + 'k';
                    }
                }
            }
        },
    }
});


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



const ctxx = document.getElementById('myCircleChart').getContext('2d');

const myCircleChart = new Chart(ctxx, {
    type: 'doughnut', 
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sample Doughnut Chart'
            }
        }
    },
});


function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
