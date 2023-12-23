const audio = document.querySelector('audio');
    const body = document.body;

audio.addEventListener('play', () => {
        boody.classList.add('play-music');
    }
);

audio.addEventListener('pause', () => {
    body.classList.remove('play-music');
    }
);