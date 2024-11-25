
        const audio = document.getElementById('background-audio');

        // Добавляем событие клика для включения звука
        document.addEventListener('click', () => {
            audio.muted = false; // Убираем mute
            audio.play().catch((error) => {
                console.log('Ошибка воспроизведения:', error);
            });
        }, { once: true }); // Событие сработает только один раз
