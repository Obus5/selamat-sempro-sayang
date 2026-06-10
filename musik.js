console.log("JS BERHASIL DIMUAT");

function resetGift(){

    const giftBox = document.getElementById("gift-box");

    if(giftBox){
        giftBox.style.display = "none";
    }

    document.querySelectorAll(".fall-heart")
        .forEach(heart => heart.remove());
}

function showPage(pageId){

    resetGift();

    document
        .querySelectorAll('.page')
        .forEach(page => {
            page.classList.remove('active');
        });

    document
        .getElementById(pageId)
        .classList.add('active');
}

const music = document.getElementById("bgMusic");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {

    if(music.paused){

        music.play();
        btn.innerHTML = "🔊";

    }else{

        music.pause();
        btn.innerHTML = "🎵";

    }

});