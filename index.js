const insults = require("./insults/insults.js");
const InsultMachine = () => {
    return insults[Math.floor(Math.random() * insults.length)];
}
const compliments = require("./compliments/compliment.js");
const ComplimentMachine = () => {
    return compliments[Math.floor(Math.random() * compliments.length)];
}
module.exports.InsultMachine = InsultMachine;
module.exports.ComplimentMachine = ComplimentMachine;

