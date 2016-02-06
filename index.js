
/**
 *
 * @title simple_progression
 * @artist Guilletr0n
 * @license mit
 *
 */

var transpose = 0;
var notes = [ 3,5,7,8,10,12,14,15];

export function dsp(t){
  
  var melody = note(notes[Math.floor(t * 2) % notes.length], 0);
  
  var tone =   sin(melody, t);

  // mixer
  return 0.4 * (
    clip(0.4, tone)
  );
}


function sin(x, t){
  return Math.sin(2 * Math.PI * t * x);
}

function clip(n, x){
  return x > n
    ? n
    : x < -n
    ? -n
    : x
  ;
}

// gets note `n` frequency of `octave`
function note(n, octave){
  return Math.pow(
    2,
    (n + transpose - 33 + (12 * (octave || 0))) / 12
  ) * 440; // A4 tune
}

