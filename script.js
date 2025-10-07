const html = document.querySelector('html');
const foco = document.querySelector('.app__card-button--foco');
const curto = document.querySelector('.app__card-button--curto');
const longo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button')
const musicaInputs = document.querySelector('#alternar-musica')
const musica = new Audio('/music/luna-rise-part-one.mp3')
const startPauseBt = document.querySelector('#start-pause')
const audioPlay = new Audio('/music/play.wav');
const audioPausa = new Audio('/music/pause.mp3');
const audioTempoFinalizado = new Audio('./music/beep.mp3')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const incones = document.querySelector('.app__card-primary-butto-icon')
const tempoNaTela = document.querySelector('#timer')


let temporizador = 1500
let intervaloId = null

musica.loop = true ;


const alterarContexto = (contexto) => {
  mostrarTempo()
  botoes.forEach((contexto)=> {
    contexto.classList.remove('active')
  })
  html.setAttribute('data-contexto', contexto)
  banner.setAttribute('src', `/img/${contexto}.png`)
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `
      <h1 class="app__title">
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            </h1>
      `
      break;
    case 'descanso-curto':
      titulo.innerHTML = `
        <h1 class="app__title">
        Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            </h1>
        `
      break
    case "descanso-longo":
      titulo.innerHTML = `
        <h1 class="app__title">
        Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            </h1>
        `
    default:
      break;
  }
}

const contagemRegressiva = () => {
  if (temporizador <= 0) {
    audioTempoFinalizado.play()
    alert('tempo finalizado!')
    zerar()
    return
  }
  temporizador -= 1
 mostrarTempo()
}
const iniciarOuPausar = () => {
  if(intervaloId){
    audioPausa.play()
    zerar()
    return
  }
  audioPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000)
  iniciarOuPausarBt.textContent = `Pausar`
  incones.setAttribute('src', '/img/pause.png')
}
startPauseBt.addEventListener('click', iniciarOuPausar)

const mostrarTempo = () => {
const tempo = new Date(temporizador * 1000)
const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
tempoNaTela.innerHTML = `${tempoFormatado}`
}


const zerar = () => {
  clearInterval(intervaloId)
  iniciarOuPausarBt.textContent= `Começar`
  incones.setAttribute('src', '/img/play_arrow.png')
  intervaloId = null
}
foco.addEventListener('click', () => {
  temporizador = 1500
  alterarContexto('foco');
  foco.classList.add('active');
});

curto.addEventListener('click', () => {
  temporizador = 300
  alterarContexto('descanso-curto')
  curto.classList.add('active');
});

longo.addEventListener('click', () => {
  temporizador = 900
  alterarContexto('descanso-longo')
  longo.classList.add('active');
});

mostrarTempo()
