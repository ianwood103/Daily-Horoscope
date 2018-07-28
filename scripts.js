
var aquarius= 'img/aquarius.png';
var aries = 'img/aries.png';
var capricorn = 'img/capricornus.png';
var cancer = 'img/cancer.png';
var gemini = 'img/gemini.png';
var leo = 'img/leo.png';
var libra = 'img/libra.png';
var pisces = 'img/pisces.png';
var sagittarius = 'img/sagittarius.png';
var scorpio = 'img/scorpio.png';
var taurus = 'img/taurus.png';
var virgo = 'img/virgo.png';

var zArray = [
  aquarius,
  aries,
  capricorn,
  cancer,
  gemini,
  leo,
  libra,
  pisces,
  sagittarius,
  scorpio,
  taurus,
  virgo
];

var wordArray = [
  'aquarius',
  'aries',
  'capricorn',
  'cancer',
  'gemini',
  'leo',
  'libra',
  'pisces',
  'sagittarius',
  'scorpio',
  'taurus',
  'virgo'
];

var zodiac = 0;
var zodiacLeft = 11;
var zodiacRight = 1;

function zodiacSwitch() {
  $('#left-zodiac-picture').attr('src',zArray[zodiacLeft]);
  $('#zodiac-picture').attr('src',zArray[zodiac]);
  $('#right-zodiac-picture').attr('src',zArray[zodiacRight]);
  document.getElementById("left-zodiac").innerHTML = wordArray[zodiacLeft];
  document.getElementById("primary-zodiac").innerHTML = wordArray[zodiac];
  document.getElementById("right-zodiac").innerHTML = wordArray[zodiacRight];
}

function leftZodiac() {
  zodiac -= 1;
  zodiacLeft -= 1;
  zodiacRight -= 1;

  if (zodiac < 0) {
    zodiac = 11;
  }

  if (zodiacLeft < 0) {
    zodiacLeft = 11;
  }

  if (zodiacRight < 0) {
    zodiacRight = 11;
  }
  zodiacSwitch();
}

function rightZodiac() {
  zodiac += 1;
  zodiacLeft += 1;
  zodiacRight += 1;

  if (zodiac > 11) {
    zodiac = 0;
  }

  if (zodiacRight > 11) {
    zodiacRight = 0;
  }

  if (zodiacLeft > 11) {
    zodiacLeft = 0;
  }
  zodiacSwitch();
}

function horoscopeClick() {
  alert(zArray[zodiacLeft]);
  alert(zArray[zodiac]);
  alert(zArray[zodiacRight]);
}

$(document).ready(function() {
  zodiacSwitch();
});
