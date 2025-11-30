function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Tamanho aleatório
    const size = Math.random() * 10 + 10 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    
    // Posição horizontal aleatória
    petal.style.left = Math.random() * 100 + 'vw';
    
    // Duração da queda aleatória
    const duration = Math.random() * 3 + 2 + 's';
    petal.style.transition = `top ${duration} linear, transform ${duration} linear`;
    
    document.body.appendChild(petal);

    // Força o navegador a reconhecer o elemento antes de animar
    setTimeout(() => {
        petal.style.top = '100vh'; // Cai até o final da tela
        petal.style.transform = `rotate(${Math.random() * 360}deg)`; // Gira
    }, 50);

    // Remove do HTML depois que cair para não pesar o site
    setTimeout(() => {
        petal.remove();
    }, 5000);
}

// Cria uma pétala a cada 300ms
setInterval(createPetal, 300);