(function () {

'use strict';

var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;

var UNDER_HUNDRED_TENTH = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

var UNDER_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

/**
 * Converts an integer between 0 and 1000 to a grammatical correct sentence.
 * @example convert(11) => 'eleven'
 * @param {number|string} number
 * @returns {string}
 */

function leftTrim(nbr) {
  return nbr.replace && nbr !== "0" ? nbr.replace(/^0+/,"") : nbr;
}

function convert(number) {
    var words;
    var num = Number.isInteger(parseFloat(leftTrim(number))) && !isNaN(number);
    if (num){
      words = makeSentence(parseInt(number, 10));
    } else {
      words = 'Non-integers are not allowed => ' + number;
    }
    return words;
}

function makeSentence(number, sentence) {
    var left;
    var word;
    var words = sentence || [];

    if (number === 0) {
        return !words || !words.length ? 'zero' : words.join(' ').replace(/,$/, '');
    }

    if (number < 0) {
        word = number + ' not allowed';
        left = 0;
    } else if (number < 20) {
        left = 0;
        word = UNDER_TWENTY[number];
    } else if (number < ONE_HUNDRED) {
        left = number % TEN;
        word = UNDER_HUNDRED_TENTH[Math.floor(number / TEN)];
        if (left) {
            word += '-' + UNDER_TWENTY[left];
            left = 0;
        }
    } else if (number < ONE_THOUSAND) {
        left = number % ONE_HUNDRED;
        word = makeSentence(Math.floor(number / ONE_HUNDRED)) + ' hundred';
        if(left > 0){
          word += ' and';
        }
    } else if (number === ONE_THOUSAND) {
        left = number % ONE_THOUSAND;
        word = makeSentence(Math.floor(number / ONE_THOUSAND)) + ' thousand,';
    } else {
      word = number + ' not allowed';
      left = 0;
    }

    words.push(word);
    return makeSentence(left, words);
}


if (typeof exports != 'undefined') {
  if (typeof module != 'undefined' && module.exports) {
    exports = module.exports = convert;
  }
  exports.numberToWords = convert;
}

}());
