var horoscope = [];
var buttonCounter;
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
  'Aquarius',
  'Aries',
  'Capricorn',
  'Cancer',
  'Gemini',
  'Leo',
  'Libra',
  'Pisces',
  'Sagittarius',
  'Scorpio',
  'Taurus',
  'Virgo'
];

var horoscopeArray = {
  "Aries": 0,
  "Taurus": 1,
  "Gemini": 2,
  "Cancer": 3,
  "Leo": 4,
  "Virgo": 5,
  "Libra": 6,
  "Scorpio": 7,
  "Sagittarius": 8,
  "Capricorn": 9,
  "Aquarius": 10,
  "Pisces": 11
}

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
  buttonCounter += 1;
  console.log(zodiac);
  if(buttonCounter % 2 == 1) {
    $('.zodiac-wrapper').fadeOut(100);
    document.getElementById('horoscope').innerHTML = horoscope[horoscopeArray[wordArray[zodiac]]]["Horoscope"];
    document.getElementById('horoscope-header').innerHTML = horoscope[horoscopeArray[wordArray[zodiac]]]["Zodiac Sign"];
    $('#submit-button').attr('value', 'Return');
    $('.horoscope-message').fadeIn(500);
    $('.button-wrapper input').addClass('new-color');
    console.log(horoscope[horoscopeArray[wordArray[zodiac]]]["Zodiac Sign"]);
  } else {
    $('.button-wrapper input').removeClass('new-color');
    $('.zodiac-wrapper').fadeIn(200);
    $('#submit-button').attr('value', 'Submit');
    $('.horoscope-message').hide();
    zodiacSwitch();
  }
}

$(document).ready(function() {
  zodiacSwitch();
  buttonCounter = 0;
  $('.horoscope-message').hide();
  $('#horoscope-header', '#horoscope').hide();

  $.getJSON("https://s3.amazonaws.com/scrapy.seattle/Folder1/data.json", function(json) {
    horoscope = json;
    console.log(horoscope);
  });
});
