document.addEventListener('DOMContentLoaded', function () {

    // --- EDITE AQUI ---
    const dataInicio = new Date('2022-09-27T00:00:00');

    // --- NOVO: Elementos para o contador e player ---
    const diasEl = document.getElementById('dias');
    const horasEl = document.getElementById('horas');
    const minutosEl = document.getElementById('minutos');
    const segundosEl = document.getElementById('segundos');

    const audio = document.getElementById('musica-fundo');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = playPauseBtn.querySelector('i');

    function atualizarContador() {
        const hoje = new Date();
        let diferenca = hoje.getTime() - dataInicio.getTime();

        const umDia = 1000 * 60 * 60 * 24;
        const umaHora = 1000 * 60 * 60;
        const umMinuto = 1000 * 60;

        let dias = Math.floor(diferenca / umDia);
        diferenca -= dias * umDia;
        let horas = Math.floor(diferenca / umaHora);
        diferenca -= horas * umaHora;
        let minutos = Math.floor(diferenca / umMinuto);
        diferenca -= minutos * umMinuto;
        let segundos = Math.floor(diferenca / 1000);

        // Atualiza cada cartão do contador individualmente
        // padStart adiciona um '0' à esquerda se o número for menor que 10
        diasEl.innerText = dias;
        horasEl.innerText = String(horas).padStart(2, '0');
        minutosEl.innerText = String(minutos).padStart(2, '0');
        segundosEl.innerText = String(segundos).padStart(2, '0');
    }

    // --- NOVO: Lógica do Player de Música ---
    playPauseBtn.addEventListener('click', () => {
        const estaTocando = !audio.paused;
        if (estaTocando) {
            audio.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        } else {
            audio.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        }
    });

    // Inicia o Swiper (Carrossel)
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: { delay: 3500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    atualizarContador();
    setInterval(atualizarContador, 1000);
});