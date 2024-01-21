const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysChecker = document.querySelector(".keys-check input");

//resolvendo o problema de teclas não mapeadas. Só as teclas permitidas para clicar
let mapedKeys = [];
//funcão criada pra colocar música no html
let audio = new Audio ("src/tunes/caminhodoaudio");
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    //linkar o teclado do computador ao teclado do piano para receber o mesmo efeito de quando clicamos na tela
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active") // active é uma nova classe
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

//para coletar o conteúdo de entro dos valores html, nesse caso as letras que temos dentro das classes
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    //resolvendo o problema de teclas não mapeadas. Só as teclas permitidas para clicar
    mapedKeys.push(key.dataset.key);
});

//para capturar o conteúdo da teclado do teclado do meu dispositivo
document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){ //linkar o teclado do computador ao teclado do piano para receber o mesmo efeito de quando clicamos na tela
        playTune(e.key); 
    }
    
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}
volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysChecker.addEventListener("click", showHideKeys)

