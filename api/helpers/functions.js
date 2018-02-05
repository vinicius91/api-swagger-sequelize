"use strict";

module.exports = {
    str_pad: str_pad
};

function str_pad(input, padLength, padString, padType) {
    //   example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT')
    //   returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
    //   example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH')
    //   returns 2: '------Kevin van Zonneveld-----'
    var half = ''
    var padToGo
    var _strPadRepeater = function (s, len) {
        var collect = ''
        while (collect.length < len) {
            collect += s
        }
        collect = collect.substr(0, len)
        return collect
    }

    input += ''
    padString = padString !== undefined ? padString : ' '
    if (padType !== 'STR_PAD_LEFT' && padType !== 'STR_PAD_RIGHT' && padType !== 'STR_PAD_BOTH') {
        padType = 'STR_PAD_RIGHT'
    }

    if ((padToGo = padLength - input.length) > 0) {
        if (padType === 'STR_PAD_LEFT') {
            input = _strPadRepeater(padString, padToGo) + input
        } else if (padType === 'STR_PAD_RIGHT') {
            input = input + _strPadRepeater(padString, padToGo)
        } else if (padType === 'STR_PAD_BOTH') {
            half = _strPadRepeater(padString, Math.ceil(padToGo / 2))
            input = half + input + half
            input = input.substr(0, padLength)
        }
    }
    return input
}