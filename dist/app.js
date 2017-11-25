var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
favoriteDroid = 8;
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
// Usar aspas para utilizar a template string
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
// Arrow function
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
