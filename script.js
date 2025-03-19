function openEnvelope() {
    let envelope = document.querySelector('.envelope');
    let container = document.querySelector('.container');
    let music = document.getElementById('bg-music');
    
    envelope.classList.add('open');


    music.play();

    
    setTimeout(() => {
        container.classList.add('show');
    }, 800);
}
