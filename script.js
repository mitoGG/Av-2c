// Atualiza o relógio do sistema
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR');
    document.getElementById('current-time').textContent = timeString;
}

setInterval(updateClock, 1000);

// Troca o layout do grid
function changeLayout(cols) {
    const grid = document.getElementById('camera-grid');
    if(cols === 1) {
        grid.style.gridTemplateColumns = '1fr';
    } else {
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
}

updateClock();