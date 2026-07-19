$(function initializeBGM() {
    const page = document.querySelector("body");
    const bgm = document.querySelector(".bgm");

    page.addEventListener("click", playBGM);
    bgm.volume = 0.1;
    bgm.addEventListener('error', (e) => {
        console.error('Audio error:', e);
    });
    function playBGM() {
        bgm.load();
        bgm.play();
        page.removeEventListener("click", playBGM);
    }
});

function toggleBGM(){
    const bgm = document.querySelector('.bgm');
    const muteButton = document.querySelector('.mute-toggle');
    const muted_icon = document.querySelector('.muted');
    const unmuted_icon = document.querySelector('.unmuted');
    let isMuted = !bgm.muted;

    muteButton.muted = isMuted;
    if(isMuted){
        bgm.muted = isMuted;
        unmuted_icon.style = "display: none";
        muted_icon.style = "display: flex";
    }
    else {
        bgm.muted = isMuted;
        unmuted_icon.style = "display: flex";
        muted_icon.style = "display: none";
    }
}