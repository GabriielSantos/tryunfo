import BloodBorne from './BloodBorne.png';
import Crash from './Crash.png';
import Cyber from './Cyber.png';
import Horizon from './Horizon.png';
import Injustice from './Injustice.png';
import MK11 from './MK11.png';
import ResidentEvil from './ResidentEvil.png';
import StarWars from './StarWars.png';
import daysGone from './daysGone.png';
import ffVII from './ffVII.png';
import fifa23 from './fifa23.png';
import got from './got.png';
import gow from './gow.png';
import gtaV from './gtaV.png';
import hogwarts from './hogwarts.png';
import rdd2 from './rdd2.png';
import spiderMan from './spiderMan.png';
import theLastOfUs from './theLastOfUs.png';
import theWitcher from './theWitcher.png';
import uncharted4 from './uncharted4.png';

const normal = 'daora';
const raro = 'foda';
const muitoRaro = 'muito foda';

const cards = [
  {
    cardName: 'The Last of Us',
    cardDescription:
    'O fungo cordyceps infecta pessoas e criaturas e as torna zumbis.',
    cardAttr1: '70',
    cardAttr2: '70',
    cardAttr3: '70',
    cardImage: theLastOfUs,
    cardRare: muitoRaro,
    cardTrunfo: true,
  },
  {
    cardName: 'God of War Ragnarock',
    cardDescription:
    'O famoso Deus da Guerra, socando tudo e todos desde os primórdios do Playstation.',
    cardAttr1: '70',
    cardAttr2: '70',
    cardAttr3: '70',
    cardImage: gow,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },
  {
    cardName: 'The Witcher III',
    cardDescription:
     'Geralt of Rivia, um mercenário caçador de monstros.',
    cardAttr1: '55',
    cardAttr2: '45',
    cardAttr3: '50',
    cardImage: theWitcher,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },
  {
    cardName: 'GTA V',
    cardDescription:
    'Quando se trata de Grand Theft Auto V, faltam palavras para descrever este jogo.',
    cardAttr1: '60',
    cardAttr2: '60',
    cardAttr3: '90',
    cardImage: gtaV,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },
  {
    cardName: 'Uncharted',
    cardDescription:
    'Nathan Drake o maior caçador de tesouros da história.',
    cardAttr1: '60',
    cardAttr2: '70',
    cardAttr3: '80',
    cardImage: uncharted4,
    cardRare: muitoRaro,
    cardTrunfo: false,
  },
  {
    cardName: 'Days Gone',
    cardDescription:
    'Days gone é um jogo em mundo aberto que se passa em um ambiente apocalíptico.',
    cardAttr1: '50',
    cardAttr2: '50',
    cardAttr3: '40',
    cardImage: daysGone,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Red Dead Redemption II',
    cardDescription:
    'O fim da era do velho oeste se aproxima, e os xerifes caçam'
    + ' as últimas gangues fora da lei.',
    cardAttr1: '70',
    cardAttr2: '50',
    cardAttr3: '80',
    cardImage: rdd2,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Ghost of Tsuhima',
    cardDescription:
    'É um jogo de ação e aventura em meio ao Japão Medieval, no final do século XIII.',
    cardAttr1: '50',
    cardAttr2: '55',
    cardAttr3: '40',
    cardImage: got,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Spider Man',
    cardDescription:
    'Um dos heróis mais queridos por todos, e famoso amigo da vizinhança.',
    cardAttr1: '60',
    cardAttr2: '55',
    cardAttr3: '50',
    cardImage: spiderMan,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Final Fantasy VII',
    cardDescription:
    'O mercenário Cloud Strife, tenta impedir que a poderosa megacorporação Shinra'
    + ' use a essência vital do planeta como fonte de energia.',
    cardAttr1: '45',
    cardAttr2: '40',
    cardAttr3: '50',
    cardImage: ffVII,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Mortal Kombat 11',
    cardDescription:
    'Um jogo clássico de porradaria que não pode faltar nessa lista.',
    cardAttr1: '60',
    cardAttr2: '40',
    cardAttr3: '55',
    cardImage: MK11,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Cyberpunk 2077',
    cardDescription:
    'Jogo de  mundo aberto ambientado em Night City, uma megalópole obcecada por poder,'
    + ' glamour e biomodificações.',
    cardAttr1: '30',
    cardAttr2: '40',
    cardAttr3: '50',
    cardImage: Cyber,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Bloodborne',
    cardDescription:
    'Jogo inpirado na Era Vitoriana, época próspera, mas que escondia'
    + ' segredos obscuros após o anoitecer.',
    cardAttr1: '40',
    cardAttr2: '45',
    cardAttr3: '35',
    cardImage: BloodBorne,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Hogwarts Legacy',
    cardDescription:
    'É ambientado na Escola de Magia e Bruxaria de Hogwarts e arredores,'
    + ' influenciado pela franquia do mundo mágico.',
    cardAttr1: '70',
    cardAttr2: '50',
    cardAttr3: '40',
    cardImage: hogwarts,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Star Wars Jedi: Fallen Order',
    cardDescription:
    'Jogo inspirado na  franquia Star Wars. "Que a Força esteja com você..."',
    cardAttr1: '60',
    cardAttr2: '55',
    cardAttr3: '50',
    cardImage: StarWars,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Injustice',
    cardDescription:
    'Batman e seus aliados se esforçam para reconstruir a sociedade e têm dificuldades'
    + ' para combater os que querem restaurar o Regime do Superman.',
    cardAttr1: '40',
    cardAttr2: '60',
    cardAttr3: '50',
    cardImage: Injustice,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Crash Bandicoot',
    cardDescription:
    'Crash é caçado pelo Doutor Neo Cortex, que criou Crash e deseja o matá-lo,'
    + ' pois ele é um experimento fracassado.',
    cardAttr1: '30',
    cardAttr2: '20',
    cardAttr3: '40',
    cardImage: Crash,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'Resident Evil IV',
    cardDescription:
    'É um jogo de terror e sobrevivência no qual os jogadores terão que enfrentar'
    + ' situações extremas de medo.',
    cardAttr1: '40',
    cardAttr2: '60',
    cardAttr3: '45',
    cardImage: ResidentEvil,
    cardRare: normal,
    cardTrunfo: false,
  },
  {
    cardName: 'Horizon Forbidden West',
    cardDescription:
    'Aloy esta em busca de Gaia, na esperança de restaurar o sistema de terraformação'
    + ' do planeta e salvar a vida na Terra.',
    cardAttr1: '60',
    cardAttr2: '50',
    cardAttr3: '60',
    cardImage: Horizon,
    cardRare: raro,
    cardTrunfo: false,
  },
  {
    cardName: 'FIFA 23',
    cardDescription:
    'Não podia faltar uma referência aos apaixonados por Futebol.',
    cardAttr1: '55',
    cardAttr2: '10',
    cardAttr3: '30',
    cardImage: fifa23,
    cardRare: normal,
    cardTrunfo: false,
  },
];

export default cards;
