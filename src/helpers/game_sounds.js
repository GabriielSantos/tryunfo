// Sounds ######### START
import urlAudioClick from '../media/audios/click_sound.mp3';
import urlAudioStart from '../media/audios/start_sound.mp3';
import urlAudioCards from '../media/audios/theme_cards.mp3';
import urlAudioPrincipal from '../media/audios/theme_song.mp3';

const backSound = new Audio(urlAudioPrincipal);
backSound.volume = 0.60;
backSound.loop = true;

const backSoundCards = new Audio(urlAudioCards);
backSoundCards.loop = true;

const clickSound = new Audio(urlAudioClick);
const startSound = new Audio(urlAudioStart);
startSound.volume = 0.10;
clickSound.volume = 0.20;
backSoundCards.volume = 0.20;
backSound.volume = 0.20;
// SOUNDS ############# END

// ############################################################## Funções das ROTAS COMEÇO ###########################
export const playClickSound = () => {
  clickSound.currentTime = 0.5;
  clickSound.play();
};

export const playCardsSound = () => {
  if (backSoundCards.paused) {
    backSound.pause();
    backSound.currentTime = 0;
    backSoundCards.currentTime = 0;
    backSoundCards.play();
  }
};

export const playStarGameSound = () => {
  backSoundCards.pause();
  if (backSound.paused) {
    startSound.play();
    backSound.currentTime = 0;
    backSound.play();
  }
};

export const playAttrSound = () => {
  // startSound.currentTime = 0;
  // startSound.play();
};

export const pauseAll = () => {
  backSoundCards.pause();
};
